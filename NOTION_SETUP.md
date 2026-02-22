# Notion 同步设置指南

## 方法一：网页内配置（推荐）

1. 打开 http://localhost:3000
2. 点击左侧 **"Notion 同步"** 区域（不是开关，是整个区域）
3. 按照页面内的步骤操作：
   - 获取 API Key
   - 创建数据库
   - 填写配置

---

## 方法二：手动配置

### 第一步：获取 API Key

1. 打开 https://www.notion.so/my-integrations
2. 点击左侧 **Internal integrations** 标签（重要！）
3. 点击 **New integration**
4. 填写名称：`Coffee Brew`
5. 点击 **Save**
6. 复制 **Internal Integration Token**（以 `secret_` 开头）

### 第二步：创建数据库

1. 打开 https://www.notion.so/new
2. 输入 `/database`，选择 **Table - Full page**（真正的数据库）
3. 重命名页面为 "咖啡冲泡记录"

4. 添加以下属性列：

| 列名 | 类型 |
|------|------|
| 咖啡豆 | Title |
| 日期 | Date |
| 冲泡方法 | Select |
| 粉量 | Number |
| 水量 | Number |
| 水温 | Number |
| 研磨度 | Select |
| 烘焙度 | Select |
| 时长 | Number |
| 评分 | Select |
| 口感描述 | Text |

5. 点击右上角 **...** → **Connect to** → 选择 **Coffee Brew**

6. 复制数据库 URL 中的 ID

### 第三步：配置应用

**网页内配置（推荐）**
- 点击左侧 "Notion 同步" 区域
- 填写 API Key 和数据库 ID
- 点击保存

### 第四步：启动

```bash
npm run dev
```

---

## 使用同步功能

1. 刷新页面
2. 开启左侧 **Notion 同步** 开关
3. 添加咖啡记录，会自动同步到 Notion

---

## 故障排除

### 同步失败
- 确认 API Key 正确
- 确认数据库已 Connect to 集成
- 确认属性列名称完全一致

### 数据库类型错误
- 必须使用 `/database` 创建的 Table - Full page
- 不是 `/table` 嵌入的表格
