# Coffee Brew ☕

咖啡冲泡计时器与记录应用，支持可选的 Notion 数据同步。

在线访问: **https://coffeebrew.online**

## 功能特性

- ⏱️ **冲泡计时器** - 分阶段倒计时，视觉进度环显示，音频提示音
- 📋 **配方管理** - 支持多种冲泡方法：手冲、法压壶、爱乐压、聪明杯、冷萃、虹吸壶
- 📓 **冲泡记录** - 记录每次冲泡的日期、方法、咖啡名称、剂量、水量、温度、研磨度、评分、笔记和图片
- 🔄 **Notion 同步** - 可选功能，将记录同步到 Notion 数据库备份
- 💾 **本地存储** - 数据保存在浏览器 localStorage，图片可选择 Imgur 或本地存储

## 技术栈

- **前端**: Vanilla JavaScript (ES6+), HTML5, CSS3
- **后端**: Express.js
- **数据存储**: localStorage + 可选 Notion API

## 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/XinkaiHuang01/coffee-brew.git
cd coffee-brew
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动

```bash
npm start
```

然后访问: **http://localhost:3001**

## 配置 Notion 同步（可选）

1. 创建 Notion Integration: https://www.notion.so/my-integrations
2. 获取 API Key
3. 创建 Notion 数据库，包含以下属性：
   - 日期 (Date)
   - 方法 (Select)
   - 咖啡名称 (Title)
   - 剂量 (Number)
   - 水量 (Number)
   - 温度 (Number)
   - 研磨度 (Select)
   - 评分 (Number)
   - 笔记 (Rich Text)
4. 在应用中设置 API Key 和数据库 ID

## 项目结构

```
coffee-brew/
├── index.html          # 主页面
├── server.js           # Express 后端
├── js/
│   ├── app.js         # 前端主逻辑
│   └── notion-sync.js # Notion API 客户端
├── css/
│   └── styles.css     # 样式文件
├── uploads/           # 本地图片存储
├── .env               # 环境变量 (不提交)
└── package.json
```

## 支持的冲泡方法

| 方法 | 说明 |
|------|------|
| 手冲 | Pour Over |
| 法压壶 | French Press |
| 爱乐压 | AeroPress |
| 聪明杯 | Clever Dripper |
| 冷萃 | Cold Brew |
| 虹吸壶 | Siphon |

## 许可证

MIT
