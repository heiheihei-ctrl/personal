import { BlogCategory, BlogPost } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'shopify-tailwind-responsive',
    title: 'Shopify CLI + TailwindCSS：如何打造高性能响应式独立站',
    excerpt: '从 POSE footwear、蓝盒子日本站等实际项目出发，分享 Shopify 主题定制中 TailwindCSS 的工程化实践与移动端适配思路。',
    category: BlogCategory.SHOPIFY,
    tags: ['Shopify CLI', 'TailwindCSS', '响应式设计', 'Liquid'],
    date: '2026-05-10',
    readTime: 8,
    coverGradient: 'from-blue-600 to-indigo-700',
    coverIcon: '🛍️',
    content: `在接手 POSE footwear 与蓝盒子日本独立站等项目后，我逐渐摸索出一套 Shopify CLI + TailwindCSS 的开发流程。这篇文章记录其中的关键经验，供有类似需求的开发者参考。

## 为什么选择 Shopify CLI + TailwindCSS

Shopify CLI 提供了本地主题开发、热更新与一键部署能力，大幅缩短了从设计稿到上线的周期。TailwindCSS 则以原子化类名的方式，让响应式布局的编写更加直观高效——尤其在需要同时兼顾 PC 与移动端体验的电商场景中，优势非常明显。

传统 Shopify 主题往往依赖大量自定义 CSS 文件，维护成本较高。引入 TailwindCSS 后，我们可以：

• 在 Liquid 模板中直接使用 utility class，减少样式文件的切换成本
• 通过 sm / md / lg 断点快速实现多端适配
• 利用 JIT 模式控制最终 CSS 体积，避免主题加载变慢

## 项目结构建议

一个清晰的主题目录结构，是团队协作的基础。我通常这样组织：

• sections/ — 可配置的页面区块（Hero、产品列表、品牌故事等）
• snippets/ — 可复用的 UI 片段（产品卡片、导航项）
• assets/ — 编译后的 CSS/JS 与静态资源
• templates/ — 页面级模板

TailwindCSS 的入口文件放在 assets/ 下，通过 Shopify CLI 的 watch 模式监听变更并自动编译。这样 Liquid 与样式可以并行开发，互不阻塞。

## 响应式设计的三个关键点

**1. 移动优先（Mobile First）**

从最小屏幕开始写样式，再逐步增强到大屏。例如导航栏在移动端折叠为汉堡菜单，在 md 断点以上展开为横向导航——这与 POSE 官网的实际交互一致。

**2. 图片与媒体的处理**

电商站点图片众多，响应式不仅是布局，还包括：

• 使用 srcset 或 Shopify 的 image_url 滤镜加载合适尺寸
• 产品卡片在移动端单列、平板双列、桌面三列
• 视频 Banner 在移动端降低高度，避免首屏被占满

**3. 触控友好的交互区域**

按钮、链接的可点击区域至少 44×44px，购物车、心愿单等高频操作在移动端要易于触达。这些细节直接影响转化率。

## Liquid 与 TailwindCSS 的配合

在 section 的 schema 中暴露可配置项（标题、背景色、产品集合等），Liquid 负责数据绑定，TailwindCSS 负责视觉呈现。例如：

一个「新品推荐」section，通过 schema 让运营选择 collection，Liquid 循环输出产品，每个产品卡片用统一的 Tailwind 类名控制间距与圆角——改一处样式，全站生效。

## 日本站点的本地化考量

蓝盒子日本独立站项目中，除了响应式布局，还需要注意：

• 日语文案的排版与换行习惯
• 货币与价格格式（日元）
• 字体选择（Noto Sans JP 等）在不同设备上的加载策略

TailwindCSS 的 typography 插件可以辅助长文排版，但日文站点的 line-height 和 letter-spacing 往往需要单独微调。

## 性能优化 checklist

• 启用 TailwindCSS 的 purge/content 配置，只保留用到的类
• 延迟加载首屏以下的图片
• 合并并压缩 CSS，控制 theme.css 体积
• 避免在 Liquid 中内联大段 style

## 小结

Shopify CLI + TailwindCSS 的组合，让独立站开发既保留了 Shopify 生态的电商能力，又拥有了现代前端工程的开发体验。响应式不是「缩小版 PC 页面」，而是从信息架构、交互到性能的全链路适配。

如果你也在做类似的 Shopify 项目，欢迎通过「关于我」页面与我交流。`
  },
  {
    id: 'mini-program-performance',
    title: '小程序性能优化：从懒加载到体验细节',
    excerpt: '结合互动营销 H5 与多个 UniApp 小程序项目，聊聊图片懒加载、防抖节流与低端机适配的实战技巧。',
    category: BlogCategory.FRONTEND,
    tags: ['UniApp', '性能优化', '小程序', 'H5'],
    date: '2026-04-02',
    readTime: 6,
    coverGradient: 'from-indigo-500 to-purple-600',
    coverIcon: '⚡',
    content: `性能优化往往不在「大重构」里，而在大量细节累积中。本文结合我参与的 H5 营销活动与小程序项目，分享几个立竿见影的优化手段。

## 图片懒加载

列表页、瀑布流是图片懒加载的主战场。Intersection Observer 是首选方案——进入视口再加载，离开视口可选择释放资源。对于 UniApp，可以封装统一的 lazy-image 组件，避免每个页面重复实现。

## 防抖与节流

搜索框输入、滚动监听、窗口 resize 等高频事件，必须做防抖或节流。否则在低端 Android 机上很容易出现卡顿甚至白屏。

## 分包与按需加载

小程序主包体积有限制。将非首屏页面放入分包，配合 preloadRule 预加载用户可能访问的分包，能在体验与体积之间取得平衡。

## 结语

性能优化没有银弹，但每一个小改进都会反映在用户的停留时长与转化数据上。持续测量、持续迭代，才是正道。`
  },
  {
    id: 'portfolio-tech-stack',
    title: '用 React + TailwindCSS 搭建个人作品集网站',
    excerpt: '记录这个作品集站点本身的技术选型：Vite、React Router、响应式布局与项目数据驱动的设计思路。',
    category: BlogCategory.NOTES,
    tags: ['React', 'TailwindCSS', 'Vite', '个人站点'],
    date: '2026-03-15',
    readTime: 5,
    coverGradient: 'from-slate-700 to-blue-800',
    coverIcon: '✨',
    content: `这个作品集站点本身，也是一次前端工程实践。选择 Vite + React + TailwindCSS，目标是快速迭代、轻量部署、视觉统一。

## 数据驱动

所有项目信息集中在 constants.tsx 中维护，类型定义在 types.ts，页面组件只负责展示与路由。新增一个 Shopify 项目或一篇博客，只需扩展数据文件，无需改动页面结构。

## 路由与页面

HashRouter 保证静态托管兼容性；首页作品列表、项目详情、关于我、博客列表与文章详情，各自独立成页，导航与 Footer 全局复用。

## 视觉风格

延续浅蓝渐变 + 圆角卡片 + 深色 Footer 的设计语言，与作品卡片、博客卡片保持一致的 hover 动效与间距体系，整站气质统一。

## 后续计划

博客板块已上线，后续将继续补充更多技术文章，并将 Markdown 渲染、代码高亮等能力逐步完善。`
  }
];
