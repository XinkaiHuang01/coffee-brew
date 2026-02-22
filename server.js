// server.js - Coffee Brew Notion 同步服务
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Client } = require('@notionhq/client');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const axios = require('axios');

// Imgur configuration - 用户需要替换为自己的 Client ID
const IMGUR_CLIENT_ID = 'YOUR_IMGUR_CLIENT_ID';

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(ROOT_DIR, 'uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } }); // 10MB limit

const ROOT_DIR = path.join(__dirname);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Static files
app.use(express.static(ROOT_DIR));
app.use('/uploads', express.static(path.join(ROOT_DIR, 'uploads')));

// Image upload endpoint - 上传到 Imgur 并返回公开 URL
app.post('/api/upload', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: '没有文件上传' });
  }
  
  try {
    // 读取上传的文件
    const imagePath = path.join(ROOT_DIR, 'uploads', req.file.filename);
    const imageBuffer = fs.readFileSync(imagePath);
    const base64Image = imageBuffer.toString('base64');
    
    // 上传到 Imgur
    const imgurResponse = await axios.post('https://api.imgur.com/3/image', {
      image: base64Image,
      type: 'base64'
    }, {
      headers: {
        Authorization: `Client-ID ${IMGUR_CLIENT_ID}`
      }
    });
    
    const imgurUrl = imgurResponse.data.data.link;
    
    // 删除本地文件
    fs.unlinkSync(imagePath);
    
    res.json({ url: imgurUrl });
  } catch (error) {
    console.error('Imgur上传失败:', error.message);
    // 如果 Imgur 失败，返回本地路径
    const imageUrl = `/uploads/${req.file.filename}`;
    res.json({ url: imageUrl });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'index.html'));
});

// Notion 客户端初始化
let notion;
let NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

function initNotion(apiKey, databaseId) {
  if (apiKey) {
    notion = new Client({ auth: apiKey });
    NOTION_DATABASE_ID = databaseId || process.env.NOTION_DATABASE_ID;
    console.log('✅ Notion 客户端已初始化');
  } else {
    console.log('⚠️ 未配置 NOTION_API_KEY');
  }
}

initNotion(process.env.NOTION_API_KEY, process.env.NOTION_DATABASE_ID);

const METHOD_MAP = {
  'pour-over': '手冲',
  'french-press': '法压壶',
  'aeropress': '爱乐压',
  'clever': '聪明杯',
  'cold-brew': '冷萃',
  'siphon': '虹吸壶'
};

const GRIND_MAP = {
  '极细': 'Extra Fine',
  '细': 'Fine',
  '中细': 'Medium-Fine',
  '中': 'Medium',
  '中粗': 'Medium-Coarse',
  '粗': 'Coarse',
  '极粗': 'Extra Coarse'
};

const ROAST_MAP = {
  '浅烘': 'Light',
  '浅中烘': 'Light-Medium',
  '中烘': 'Medium',
  '中深烘': 'Medium-Dark',
  '深烘': 'Dark'
};

function notionToRecord(page) {
  const props = page.properties;
  
  // 解析图片
  let image = '';
  const imageFiles = props['图片']?.files;
  if (imageFiles && imageFiles.length > 0) {
    const firstFile = imageFiles[0];
    if (firstFile.type === 'external') {
      image = firstFile.external?.url || '';
    } else if (firstFile.type === 'file') {
      image = firstFile.file?.url || '';
    }
  }
  
  return {
    id: page.id,
    notionId: page.id,
    date: props['日期']?.date?.start || new Date().toISOString(),
    method: Object.keys(METHOD_MAP).find(key => METHOD_MAP[key] === props['冲泡方法']?.select?.name) || 'pour-over',
    coffee: {
      name: props['咖啡豆']?.title?.[0]?.plain_text || ''
    },
    params: {
      dose: props['粉量']?.number || 20,
      water: props['水量']?.number || 300,
      temperature: props['水温']?.number || 92,
      grindSize: props['研磨度']?.select?.name || '中',
      roast: props['烘焙度']?.select?.name || '中烘',
      brewTime: props['时长']?.number || 0
    },
    taste: {
      rating: props['评分']?.select ? parseInt(props['评分']?.select?.name) || 0 : 0,
      notes: props['口感描述']?.rich_text?.[0]?.plain_text || ''
    },
    stages: [],
    image: image
  };
}

function recordToNotionProperties(record) {
  const properties = {
    '日期': {
      date: { start: record.date || new Date().toISOString() }
    },
    '冲泡方法': {
      select: { name: METHOD_MAP[record.method] || '手冲' }
    },
    '咖啡豆': {
      title: [{ text: { content: record.coffee?.name || '' } }]
    },
    '粉量': {
      number: record.params?.dose || 20
    },
    '水量': {
      number: record.params?.water || 300
    },
    '水温': {
      number: record.params?.temperature || 92
    },
    '研磨度': {
      select: { name: record.params?.grindSize || '中' }
    },
    '烘焙度': {
      select: { name: record.params?.roast || '中烘' }
    },
    '时长': {
      number: record.params?.brewTime || 0
    },
    '评分': {
      select: { name: String(record.taste?.rating || 0) }
    },
    '口感描述': {
      rich_text: [{ text: { content: record.taste?.notes || '' } }]
    }
  };

  // 添加图片（仅支持外部URL，不支持base64）
  if (record.image && !record.image.startsWith('data:')) {
    // 转换本地URL为完整URL
    let imageUrl = record.image;
    if (imageUrl.startsWith('/uploads/')) {
      // Railway 环境变量中获取域名
      const domain = process.env.RAILWAY_PUBLIC_DOMAIN || `localhost:${PORT}`;
      const protocol = process.env.RAILWAY_PUBLIC_DOMAIN ? 'https' : 'http';
      imageUrl = `${protocol}://${domain}${imageUrl}`;
    }
    // 只有外部URL才能同步到Notion
    properties['图片'] = {
      files: [
        {
          type: 'external',
          name: 'coffee-photo.jpg',
          external: { url: imageUrl }
        }
      ]
    };
  } else {
    properties['图片'] = { files: [] };
  }

  return properties;
}

app.get('/api/records', async (req, res) => {
  try {
    if (!notion || !NOTION_DATABASE_ID) {
      return res.status(503).json({ 
        error: 'Notion 未配置', 
        message: '请配置 NOTION_API_KEY 和 NOTION_DATABASE_ID' 
      });
    }

    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      sorts: [{ property: '日期', direction: 'descending' }]
    });

    const records = response.results.map(notionToRecord);
    res.json(records);
  } catch (error) {
    console.error('获取记录失败:', error);
    res.status(500).json({ error: '获取记录失败', details: error.message });
  }
});

app.post('/api/records', async (req, res) => {
  try {
    if (!notion || !NOTION_DATABASE_ID) {
      return res.status(503).json({ error: 'Notion 未配置' });
    }

    const record = req.body;
    const properties = recordToNotionProperties(record);

    const response = await notion.pages.create({
      parent: { database_id: NOTION_DATABASE_ID },
      properties: properties
    });

    res.json(notionToRecord(response));
  } catch (error) {
    console.error('创建记录失败:', error);
    res.status(500).json({ error: '创建记录失败', details: error.message });
  }
});

app.put('/api/records/:notionId', async (req, res) => {
  try {
    if (!notion || !NOTION_DATABASE_ID) {
      return res.status(503).json({ error: 'Notion 未配置' });
    }

    const { notionId } = req.params;
    const record = req.body;
    const properties = recordToNotionProperties(record);

    const response = await notion.pages.update({
      page_id: notionId,
      properties: properties
    });

    res.json(notionToRecord(response));
  } catch (error) {
    console.error('更新记录失败:', error);
    res.status(500).json({ error: '更新记录失败', details: error.message });
  }
});

app.delete('/api/records/:notionId', async (req, res) => {
  try {
    if (!notion || !NOTION_DATABASE_ID) {
      return res.status(503).json({ error: 'Notion 未配置' });
    }

    const { notionId } = req.params;

    await notion.pages.update({
      page_id: notionId,
      archived: true
    });

    res.json({ success: true });
  } catch (error) {
    console.error('删除记录失败:', error);
    res.status(500).json({ error: '删除记录失败', details: error.message });
  }
});

app.post('/api/setup-database', async (req, res) => {
  try {
    if (!notion) {
      return res.status(503).json({ error: 'Notion 未配置' });
    }

    const page = await notion.pages.create({
      parent: { type: 'workspace', workspace: true },
      properties: {
        'title': [
          {
            type: 'text',
            text: { content: '咖啡冲泡记录数据库' }
          }
        ]
      }
    });

    const response = await notion.databases.create({
      parent: { page_id: page.id },
      title: [{ type: 'text', text: { content: '咖啡冲泡记录' } }],
      properties: {
        '日期': { date: {} },
        '冲泡方法': { select: { options: [
          { name: '手冲', color: 'green' },
          { name: '法压壶', color: 'yellow' },
          { name: '爱乐压', color: 'blue' },
          { name: '聪明杯', color: 'purple' },
          { name: '冷萃', color: 'cyan' },
          { name: '虹吸壶', color: 'orange' }
        ]}},
        '咖啡豆': { title: {} },
        '粉量': { number: { unit: 'gram' } },
        '水量': { number: { unit: 'milliliter' } },
        '水温': { number: { unit: 'celsius' } },
        '研磨度': { select: { options: [
          { name: '极细' },
          { name: '细' },
          { name: '中细' },
          { name: '中' },
          { name: '中粗' },
          { name: '粗' },
          { name: '极粗' }
        ]}},
        '烘焙度': { select: { options: [
          { name: '浅烘' },
          { name: '浅中烘' },
          { name: '中烘' },
          { name: '中深烘' },
          { name: '深烘' }
        ]}},
        '时长': { number: { unit: 'second' } },
        '评分': { select: { options: [
          { name: '1', color: 'red' },
          { name: '2', color: 'orange' },
          { name: '3', color: 'yellow' },
          { name: '4', color: 'green' },
          { name: '5', color: 'blue' }
        ]}},
        '口感描述': { rich_text: {} },
        '图片': { files: {} }
      }
    });

    res.json({ 
      success: true, 
      databaseId: response.id,
      message: '数据库创建成功，请在 .env 中设置 NOTION_DATABASE_ID'
    });
  } catch (error) {
    console.error('创建数据库失败:', error);
    res.status(500).json({ error: '创建数据库失败', details: error.message });
  }
});

app.post('/api/test-config', async (req, res) => {
  try {
    const { apiKey, databaseId } = req.body;
    
    if (!apiKey || !databaseId) {
      return res.json({ success: false, message: '缺少 API Key 或数据库 ID' });
    }
    
    const testClient = new Client({ auth: apiKey });
    
    const response = await testClient.databases.query({
      database_id: databaseId,
      page_size: 1
    });
    
    res.json({ success: true, message: '连接成功' });
  } catch (error) {
    console.error('测试连接失败:', error);
    res.json({ success: false, message: error.message });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    notionConfigured: !!notion,
    databaseId: NOTION_DATABASE_ID || '未配置'
  });
});

app.post('/api/save-config', (req, res) => {
  try {
    const { apiKey, databaseId } = req.body;
    
    if (!apiKey || !databaseId) {
      return res.json({ success: false, message: '缺少 API Key 或数据库 ID' });
    }
    
    initNotion(apiKey, databaseId);
    
    res.json({ success: true, message: '配置已保存' });
  } catch (error) {
    console.error('保存配置失败:', error);
    res.json({ success: false, message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`☕ Coffee Brew API 运行在 http://localhost:${PORT}`);
  console.log(`📋 API 端点:`);
  console.log(`   GET  /api/records      - 获取所有记录`);
  console.log(`   POST /api/records     - 创建记录`);
  console.log(`   PUT  /api/records/:id - 更新记录`);
  console.log(`   DELETE /api/records/:id - 删除记录`);
  console.log(`   POST /api/setup-database - 创建 Notion 数据库`);
});
