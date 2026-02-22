# Coffee Brew - 咖啡冲泡记录网站

## 1. Project Overview

- **Project Name**: Coffee Brew
- **Project Type**: Single-page webapp with multiple views
- **Core Functionality**: 咖啡冲泡记录工具，支持多种冲泡方法、推荐参数、手冲计时器、个人冲泡记录管理
- **Target Users**: 咖啡爱好者、家用咖啡冲泡者、咖啡学习者

## 2. UI/UX Specification

### Layout Structure

**页面结构**:
- 首页/仪表盘 - 显示快捷入口和最近记录
- 冲泡方法页 - 展示各种咖啡冲泡方法
- 推荐参数页 - 各方法的推荐参数
- 计时器页 - 手冲计时器
- 我的记录页 - 个人冲泡记录列表
- 记录详情页 - 单条记录的详细信息

**布局**:
- 左侧固定导航栏 (240px宽度)
- 右侧主内容区域 (flex: 1)
- 移动端: 底部导航栏

**响应式断点**:
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

### Visual Design

**色彩方案**:
- Primary: #4A2C2A (深咖啡色)
- Secondary: #8B5A2B (中咖啡色)
- Accent: #D4A574 (浅咖啡色/拿铁色)
- Background: #FDF8F3 (米白色/奶油色)
- Surface: #FFFFFF (白色卡片)
- Text Primary: #2C1810 (深棕黑)
- Text Secondary: #6B5344 (中棕色)
- Success: #5D8A66 (绿色)
- Warning: #C4875A (橙色)
- Timer Active: #8B4513 (深橙色)

**字体**:
- 中文: "Noto Serif SC", serif (标题), "Noto Sans SC", sans-serif (正文)
- 英文/数字: "DM Sans", sans-serif
- 标题: 32px (h1), 24px (h2), 20px (h3), 16px (h4)
- 正文: 14px, 行高 1.6

**间距系统**:
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- xxl: 48px

**视觉效果**:
- 卡片阴影: 0 4px 20px rgba(74, 44, 42, 0.08)
- 悬停阴影: 0 8px 30px rgba(74, 44, 42, 0.15)
- 圆角: 12px (卡片), 8px (按钮), 50% (头像)
- 过渡: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)

### Components

**导航栏**:
- Logo + 品牌名
- 导航项: 首页、冲泡方法、推荐参数、计时器、我的记录
- 当前激活项有底部高亮条

**方法卡片**:
- 图标 (40x40px)
- 方法名称
- 简短描述
- 点击进入详情或计时器

**参数卡片**:
- 方法图标和名称
- 参数列表 (粉水比、水温、研磨度、时长)
- "开始冲泡" 按钮

**计时器**:
- 大字体显示时间 (mm:ss)
- 圆形进度条
- 当前阶段显示
- 阶段列表 (浸泡、注水、闷蒸等)
- 开始/暂停/重置按钮
- 完成后自动记录

**记录卡片**:
- 缩略图 (如果上传了图片)
- 日期和时间
- 冲泡方法
- 关键参数 (粉量、水温)
- 口感评分 (星级)
- 点击查看详情

**表单**:
- 输入框: 粉量(g)、水量(ml)、水温(°C)、研磨度、注水次数、闷蒸时间、总时长
- 下拉选择: 冲泡方法
- 评分: 5星评分系统
- 口感描述: 多行文本
- 图片上传: 支持拖拽和点击

## 3. Functionality Specification

### 冲泡方法 (6种)

1. **手冲 (Pour Over)**
   - 闷蒸: 30-45秒
   - 第一段注水: 30秒
   - 第二段注水: 30秒
   - 第三段注水: 30秒
   - 总时长: 2:30-3:30

2. **法压壶 (French Press)**
   - 浸泡: 4分钟
   - 压滤: 30秒
   - 总时长: 4:30

3. **爱乐压 (AeroPress)**
   - 预热: 10秒
   - 搅拌: 10秒
   - 压滤: 30秒
   - 总时长: 1:30

4. **聪明杯 (Clever Dripper)**
   - 闷蒸: 45秒
   - 浸泡: 1:30
   - 过滤: 1分钟
   - 总时长: 3:15

5. **冷萃 (Cold Brew)**
   - 冷萃: 12-24小时
   - 过滤
   - 享用

6. **虹吸壶 (Siphon)**
   - 预热: 30秒
   - 上水: 1分钟
   - 萃取: 1:30
   - 移除热源: 30秒
   - 总时长: 3:30

### 推荐参数数据

每种方法包含:
- 粉水比 (1:12 到 1:18)
- 水温 (85°C 到 96°C)
- 研磨度 (细、中粗、粗)
- 研磨量 (15g-30g)
- 水量 (200ml-500ml)
- 各阶段时长

### 计时器功能

- 支持所有6种冲泡方法
- 可自定义各阶段时长
- 音频提示 (可选)
- 震动提示 (移动端)
- 屏幕常亮
- 完成后显示记录表单

### 记录功能

- 自动保存到 localStorage
- 支持图片上传 (base64存储)
- 字段: 日期、方法、粉量、水温、水量、研磨度、口感描述、评分、图片
- 支持编辑和删除
- 支持筛选和搜索

### 数据结构

```javascript
{
  id: string,
  date: string (ISO),
  method: string,
  coffee: {
    name: string,
    roaster: string,
    origin: string,
    roastDate: string
  },
  params: {
    dose: number (g),
    water: number (ml),
    ratio: string,
    temperature: number (°C),
    grindSize: string,
    brewTime: number (秒)
  },
  taste: {
    rating: number (1-5),
    flavor: string,
    aroma: string,
    body: string,
    acidity: string,
    aftertaste: string,
    notes: string
  },
  image: string (base64),
  steps: array
}
```

## 4. Acceptance Criteria

### Visual Checkpoints
- [ ] 页面整体呈现温暖的咖啡色调
- [ ] 导航栏清晰可见，左侧固定
- [ ] 卡片悬停有微妙的上浮效果
- [ ] 计时器页面有醒目的倒计时显示
- [ ] 移动端底部导航可用
- [ ] 所有动画流畅无卡顿

### Functional Checkpoints
- [ ] 可以浏览所有6种冲泡方法
- [ ] 可以查看每种方法的推荐参数
- [ ] 可以从推荐参数一键启动计时器
- [ ] 计时器可以正常开始、暂停、重置
- [ ] 计时完成后可以保存记录
- [ ] 可以手动添加新记录
- [ ] 可以上传图片
- [ ] 可以编辑和删除记录
- [ ] 数据保存在 localStorage 中
- [ ] 刷新页面后数据仍然存在

### User Flows
1. 用户进入首页 → 查看最近记录或选择冲泡方法
2. 用户选择冲泡方法 → 查看推荐参数 → 一键开始计时
3. 计时完成 → 自动弹出记录表单 → 填写保存
4. 用户查看我的记录 → 选择某条记录 → 编辑/删除
