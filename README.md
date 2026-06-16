# 独立站 0.1 模块 — 项目总结

## 项目概述

**项目名称**: company-site（煜豪工艺品有限公司 — 企业官网）  
**版本**: 0.1  
**类型**: Next.js 14 企业官网（SSG/SSR）  
**来源路径**: `D:\workspace\company-site`  
**部署平台**: Netlify  

这是一个面向海外 B2B 客户的多语言企业展示网站，隶属于"获客"（huoke）项目体系，作为其独立站子模块存在。

---

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Next.js 14 (App Router) |
| 语言 | TypeScript 5.5+ |
| 样式 | Tailwind CSS 3.4 + @tailwindcss/typography |
| UI 组件 | Radix UI (Dialog, Navigation Menu, Slot) + Lucide React Icons |
| 国际化 | next-intl 3.0（中/英双语） |
| 邮件服务 | Resend（联系表单通知） |
| 部署 | Netlify CLI |
| CVA | class-variance-authority（按钮变体管理） |

---

## 文件结构

```
company-site/
├── package.json                  # 项目依赖配置
├── next.config.mjs               # Next.js 配置（next-intl 插件）
├── tsconfig.json                 # TypeScript 配置
├── tailwind.config.ts            # Tailwind 主题（品牌色、字体、动画）
├── postcss.config.js             # PostCSS 配置
├── next-env.d.ts                 # Next.js 类型声明
├── messages/
│   ├── zh.json                   # 中文翻译文件
│   └── en.json                   # 英文翻译文件
└── src/
    ├── middleware.ts             # next-intl 中间件（路由国际化）
    ├── app/
    │   ├── globals.css           # 全局样式（Tailwind + 自定义组件类）
    │   ├── api/
    │   │   └── contact/
    │   │       └── route.ts     # 联系表单 API（POST）
    │   └── [locale]/
    │       ├── layout.tsx        # 根布局（Header + Footer + i18n Provider）
    │       ├── page.tsx          # 首页（Hero + 产品 + 工厂 + CTA）
    │       ├── about/
    │       │   └── page.tsx      # 关于我们（公司历程 + 价值观）
    │       ├── products/
    │       │   ├── page.tsx      # 产品列表（分类筛选）
    │       │   └── [slug]/
    │       │       └── page.tsx  # 产品详情（规格 + 特性 + 询价）
    │       ├── factory/
    │       │   └── page.tsx      # 工厂实力（数据 + 设备 + 质量 + 图集）
    │       └── contact/
    │           └── page.tsx      # 联系我们（联系信息 + 表单）
    ├── components/
    │   ├── home/
    │   │   └── Hero.tsx          # 首页 Hero 区域（动画计数 + CTA）
    │   ├── layout/
    │   │   ├── Header.tsx        # 导航栏（桌面/移动端 + 语言切换）
    │   │   └── Footer.tsx        # 页脚（站点导航 + 联系方式）
    │   └── ui/
    │       └── Button.tsx        # 通用按钮组件（4种变体 + 3种尺寸）
    ├── i18n/
    │   ├── request.ts            # next-intl 请求配置
    │   └── routing.ts            # 路由定义（zh/en，默认中文）
    └── lib/
        └── utils.ts              # cn() 工具函数（clsx + tailwind-merge）
```

---

## 页面路由

| 路由 | 页面 | 说明 |
|------|------|------|
| `/` | 首页 | Hero + 数据统计 + 核心产品 + 工厂概览 + CTA |
| `/about` | 关于我们 | 公司介绍 + 使命愿景 + 发展历程（时间线） |
| `/products` | 产品展示 | 8个产品卡片 + 4分类筛选（工业零部件/电子元器件/精密模具/五金制品） |
| `/products/[slug]` | 产品详情 | 产品图 + 描述 + 特性 + 技术规格 + 询价入口 |
| `/factory` | 工厂实力 | 规模数据 + 核心设备 + 质量认证 + 工厂图集 |
| `/contact` | 联系我们 | 联系信息 + 在线表单（提交到 `/api/contact`） |

---

## 核心特性

### 国际化 (i18n)
- 支持 **中文（zh）** 和 **英文（en）** 双语言
- 使用 `next-intl` 实现路由级国际化
- 语言切换器位于 Header 右上角
- `localePrefix: "as-needed"` — 默认语言不显示前缀

### 品牌设计系统
- **品牌色**: 深蓝 (`#1c3a5e` → `#0a1a2e`)，金色 (`#d4a017`)
- **品牌字体**: Inter + 系统后备字体
- **自定义字号**: display-xl (4.5rem), display-lg, display-md
- **动画**: fade-in, slide-up, count-up（滚动触发）
- **组件类**: `.container-page`, `.section-padding`, `.section-title`, `.section-subtitle`

### 动态计数动画
- Hero 区域使用 IntersectionObserver + requestAnimationFrame 实现滚动触发的数字递增动画
- 统计项：成立年份(2005)、出口国家(50+)、产品种类(200+)、工厂面积(50000m²)

### 联系表单
- 客户端表单验证 + 异步提交
- 后端 API (`/api/contact`) 接收并发送邮件通知（通过 Resend）
- 提交成功/失败状态反馈

### 响应式设计
- 完整的移动端适配（Header 汉堡菜单）
- Tailwind 响应式断点：sm → md → lg → xl

---

## 产品数据

| 产品 | 分类 | Slug |
|------|------|------|
| 精密齿轮 | 工业零部件 | precision-gears |
| CNC 加工件 | 工业零部件 | cnc-machined-parts |
| 工业连接器 | 电子元器件 | industrial-connectors |
| PCB 组件 | 电子元器件 | pcb-assembly |
| 注塑模具 | 精密模具 | injection-molds |
| 冲压模具 | 精密模具 | stamping-dies |
| 不锈钢螺栓 | 五金制品 | stainless-bolts |
| 铝合金支架 | 五金制品 | aluminum-brackets |

---

## 环境变量

| 变量 | 说明 |
|------|------|
| `RESEND_API_KEY` | Resend 邮件服务 API Key |
| `CONTACT_EMAIL` | 接收联系表单通知的邮箱 |

---

## 部署

- **平台**: Netlify
- **构建命令**: `npm run build`（即 `next build`）
- **输出目录**: `.next`
- **环境**: Node.js runtime

---

## 与主项目关系

独立站模块是"获客"（huoke）Electron 桌面应用的配套企业官网。
- 主项目（`D:\workspace`）：Electron + Vite + React B2B 获客工具
- 独立站（`D:\workspace\company-site`）：Next.js 企业展示官网
- 两者共享品牌标识和设计语言，独立部署和运行
