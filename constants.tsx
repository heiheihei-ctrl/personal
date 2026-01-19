
import { Project, ProjectCategory } from './types';

// 航小鹭小程序图片导入
import hxl1 from './assets/xcx/hxl/微信图片_20251204150054_336_6.jpg';
import hxl2 from './assets/xcx/hxl/微信图片_20251204150056_337_6.jpg';
import hxl3 from './assets/xcx/hxl/微信图片_20251204150058_338_6.jpg';
import hxl4 from './assets/xcx/hxl/微信图片_20251204150100_339_6.jpg';
import hxl5 from './assets/xcx/hxl/微信图片_20251204150101_340_6.jpg';
import hxl6 from './assets/xcx/hxl/微信图片_20251204150102_341_6.jpg';
import hxl7 from './assets/xcx/hxl/微信图片_20251204150133_342_6.jpg';

// 香后事小程序图片导入
import xhs1 from './assets/xcx/xhs/微信图片_20250929000013_109_6.jpg';
import xhs2 from './assets/xcx/xhs/微信图片_20250929000014_110_6.jpg';
import xhs3 from './assets/xcx/xhs/微信图片_20250929000015_111_6.jpg';
import xhs4 from './assets/xcx/xhs/微信图片_20250929000016_112_6.jpg';
import xhs5 from './assets/xcx/xhs/微信图片_20250929000018_113_6.jpg';
import xhs6 from './assets/xcx/xhs/微信图片_20250929000019_114_6.jpg';
// 高考志愿通小程序图片导入
import gkzyt1 from './assets/xcx/gkzyt/1.png';
import gkzyt2 from './assets/xcx/gkzyt/2.png';
// 还不知道吃什么小程序图片导入
import hbzdcsm1 from './assets/xcx/hbzdcsm/微信图片_20251219094349_380_6.png';
import hbzdcsm2 from './assets/xcx/hbzdcsm/微信图片_20251219094349_381_6.png';
import hbzdcsm3 from './assets/xcx/hbzdcsm/微信图片_20251219094349_382_6.png';

// Shopify 图片导入
import carve1 from './assets/shopify/carve/1.png';
import carve2 from './assets/shopify/carve/2.png';
import carve3 from './assets/shopify/carve/3.png';
import armorLite1 from './assets/shopify/armorLite/1.png';
import armorLite2 from './assets/shopify/armorLite/2.png';
import armorLite3 from './assets/shopify/armorLite/3.png';
import armorLite4 from './assets/shopify/armorLite/4.png';
import armorLite5 from './assets/shopify/armorLite/5.png';

// H5 图片导入
import ffl1 from './assets/h5/ffl/微信图片_20251118173708_249_6.jpg';
import ffl2 from './assets/h5/ffl/微信图片_20251118173709_250_6.jpg';
import migong1 from './assets/h5/migong/微信图片_20251118173711_252_6.jpg';
import yxt1 from './assets/h5/yxt/微信图片_20250429225031_495_7.jpg';
import yxt2 from './assets/h5/yxt/微信图片_20250429225032_494_7.jpg';
import yxt3 from './assets/h5/yxt/微信图片_20250429225033_493_7.jpg';
import yxt4 from './assets/h5/yxt/微信图片_20250429225035_492_7.jpg';
import yxt5 from './assets/h5/yxt/微信图片_20250429225036_491_7.jpg';
import yxt6 from './assets/h5/yxt/微信图片_20250429225037_490_7.jpg';
import yxt7 from './assets/h5/yxt/微信图片_20250429225039_489_7.jpg';
import yxt8 from './assets/h5/yxt/微信图片_20250429225040_488_7.jpg';
import yxt9 from './assets/h5/yxt/微信图片_20250429225041_487_7.jpg';
import yxt10 from './assets/h5/yxt/微信图片_20250429225042_486_7.jpg';
import yxt11 from './assets/h5/yxt/微信图片_20250429225044_485_7.jpg';
import yxt12 from './assets/h5/yxt/微信图片_20250429225045_484_7.jpg';
import yxt13 from './assets/h5/yxt/微信图片_20250429225324_483_7.jpg';
import gongcha1 from './assets/h5/gongcha/1.png';
import gongcha2 from './assets/h5/gongcha/2.png';
import gongchaVideo1 from './assets/h5/gongcha/1696946262687.mp4';
import gongchaVideo2 from './assets/h5/gongcha/1696950113062.mp4';

export const PROJECTS: Project[] = [
  {
    id: 'carve-site',
    title: '"Carve" 跨境电商独立站',
    description: '🛍️ 基于 Shopify 深度定制的电商独立站，为跨境品牌提供专业级解决方案。\n\n✨ 技术亮点：\n• 使用 React 构建高性能前端界面，确保流畅的用户体验\n• Node.js 后端完美集成 Shopify API & GraphQL\n• 实现产品拉取、库存查询、订单创建等全流程自动化\n• 完美适配移动端，响应式设计保证各设备体验一致\n\n🎯 业务价值：为品牌商家提供从展示到交易的完整闭环，提升转化率与用户满意度。',
    category: ProjectCategory.SHOPIFY,
    images: [carve1, carve2, carve3],
    link: 'http://47.254.67.102:9090/',
    tags: ['React', 'Node.js', 'Shopify API', 'GraphQL', 'TailwindCSS']
  },
  {
    id: 'armorlite-site',
    title: '"ArmorLite" Shopify 电商网站',
    description: '🛡️ 专业的防护产品电商独立站，基于 Shopify CLI 开发，高度还原设计稿的精品项目。\n\n✨ 技术亮点：\n• 使用 Shopify CLI 进行本地开发与调试，提升开发效率\n• 基于 Shopify 主题系统深度定制，实现精准还原设计稿\n• 响应式设计完美适配各设备，确保移动端与桌面端体验一致\n• 优化产品展示流程，提升用户购物体验与转化率\n\n🎨 设计还原：严格按照设计稿进行开发，从布局到交互细节，高度还原设计师的视觉呈现。\n\n🎯 业务价值：为防护产品品牌提供专业的电商平台，展示产品特性与优势，助力品牌在线销售。',
    category: ProjectCategory.SHOPIFY,
    images: [armorLite1, armorLite2, armorLite3, armorLite4, armorLite5],
    link: '#',
    tags: ['Shopify CLI', 'Liquid', '响应式设计', '设计还原', '电商']
  },
  {
    id: 'hx-deer',
    title: '"航小鹭" 知识付费小程序',
    description: '📚 一款精细化权限管理的知识付费小程序，为教育机构提供完整的数字化解决方案。\n\n🔐 核心功能：\n• 三级用户权限体系（普通/VIP/教师），实现精细化管理\n• 资料权限智能管控，保障内容价值\n• 在线充值支付系统，支持多种支付方式\n• 资料商城模块，打造知识生态闭环\n\n💻 技术架构：前端基于 UniApp + TailwindCSS 实现跨端适配；后端采用 JWT 认证与自定义注解拦截，确保安全性。',
    category: ProjectCategory.MINI_PROGRAM,
    images: [hxl1, hxl2, hxl3, hxl4, hxl5, hxl6, hxl7],
    link: '#',
    tags: ['Vite', 'UniApp', 'TailwindCSS', '若依', '支付集成']
  },
  {
    id: 'xh-affair',
    title: '"香后事" 殡葬预约小程序',
    description: '🏛️ 专业的公墓选址与预约 O2O 服务平台，为传统行业注入数字化活力。\n\n📍 核心能力：\n• 在线查看墓区位置，3D 可视化展示墓穴分布\n• 智能选穴预约系统，实时更新可用状态\n• 订单全生命周期管理，流程清晰透明\n• 攻克单穴/双穴复杂逻辑，实现精准状态同步\n\n⚡ 技术突破：解决了传统业务中复杂的墓穴类型判断与状态管理难题，大幅提升业务流程效率。',
    category: ProjectCategory.MINI_PROGRAM,
    images: [xhs1, xhs2, xhs3, xhs4, xhs5, xhs6],
    link: '#',
    tags: ['Vite', 'UniApp', 'uView-Plus', '业务逻辑优化']
  },
  {
    id: 'h5-campaign',
    title: '互动营销活动 H5',
    description: '🎪 高性能互动营销 H5 页面，打造极致的用户体验。\n\n🎬 技术亮点：\n• 集成 Lottie 动画引擎，实现流畅丰富的动效\n• 图片懒加载与防抖节流优化，性能表现优异\n• 完美适配低端移动设备，保证流畅运行\n\n🎮 互动玩法：\n• "分分乐"：趣味互动游戏，提升用户参与度\n• "迷宫"：创意挑战模式，增强品牌记忆\n\n📈 营销价值：通过有趣的互动形式，显著提升用户转化率与品牌传播效果。',
    category: ProjectCategory.H5,
    images: [ffl1, ffl2, migong1],
    link: '#',
    tags: ['Lottie', '性能优化', 'GSAP']
  },
  {
    id: 'yxt',
    title: '"易学通" 刷题考试系统 H5',
    description: '📖 一套完整的在线学习与考试系统 H5 应用，为教育机构提供智能化的刷题和考试解决方案。\n\n🎯 核心功能：\n• 海量题库管理系统，支持多种题型分类与标签\n• 智能刷题模式，自动记录错题与学习进度\n• 在线考试系统，支持计时、自动提交与成绩统计\n• 学习数据分析，可视化展示学习报告与知识薄弱点\n\n💻 技术实现：独立完成全栈开发，从前端界面到后端逻辑，从数据库设计到系统部署，全程把控项目质量。\n\n✨ 项目亮点：注重用户体验优化，确保在不同设备上流畅运行，为学员提供高效便捷的学习体验。',
    category: ProjectCategory.H5,
    images: [yxt1, yxt2, yxt3, yxt4, yxt5, yxt6, yxt7, yxt8, yxt9, yxt10, yxt11, yxt12, yxt13],
    link: '#',
    tags: ['全栈开发', '题库系统', '在线考试', '数据可视化']
  },
  {
    id: 'gongcha',
    title: '"贡茶" 在线点单网站',
    description: '🧋 贡茶奶茶店在线点单网站，为顾客提供便捷的在线下单服务。\n\n🛒 核心功能：\n• 精美的商品展示界面，清晰展示奶茶品类与价格\n• 购物车管理，支持商品添加、删除与数量修改\n• 订单提交系统，完整的下单流程体验\n• 响应式设计，完美适配 PC 端与移动端\n\n💻 技术实现：负责前端开发工作，使用现代化前端技术栈，打造流畅的用户交互体验。\n• 集成 Lottie 动画引擎，实现流畅丰富的动效，提升视觉体验\n\n🎨 设计亮点：注重界面美观性与易用性，让顾客轻松浏览商品并完成下单操作，提升品牌形象与用户体验。',
    category: ProjectCategory.H5,
    images: [gongcha1, gongcha2, gongchaVideo2, gongchaVideo1],
    link: '#',
    tags: ['前端开发', '购物车', '响应式设计', '用户体验', 'Lottie']
  },
  {
    id: 'gkzyt',
    title: '"高考志愿通" 志愿填报小程序',
    description: '🎓 专为高考学子打造的志愿填报辅助小程序，帮助学生科学合理地选择心仪院校。\n\n📊 核心功能：\n• 院校信息查询，快速检索目标院校详情\n• 历年分数线查询，了解录取趋势与难度\n• 智能志愿推荐，基于分数与兴趣匹配适合院校\n• 志愿方案管理，支持多套方案对比与调整\n\n💻 技术实现：负责前端开发工作，使用 UniApp 框架实现跨端适配，确保在微信小程序中流畅运行。\n\n✨ 项目价值：为高考学子提供专业、便捷的志愿填报工具，帮助他们做出更明智的选择，助力实现大学梦想。',
    category: ProjectCategory.MINI_PROGRAM,
    images: [gkzyt1, gkzyt2],
    link: '#',
    tags: ['前端开发', 'UniApp', '数据展示', '用户体验']
  },
  {
    id: 'hbzdcsm',
    title: '"还不知道吃什么" 生活助手小程序',
    description: '🍜 专为当代年轻人解决选择困难症和月光族问题而设计的生活助手小程序，提供有趣的决策工具和理财辅助功能。\n\n🎲 核心功能：\n• 3D小球趣味互动，通过有趣的互动效果随机抽取美食内容展示结果，帮助用户快速做出选择\n• 记账功能，记录日常收支，帮助用户管理财务，养成良好消费习惯\n• 卡路里计算功能，记录食物热量，辅助用户健康饮食管理\n• 智能决策系统，解决用户"今天吃什么"的纠结问题\n\n💡 项目价值：针对当代年轻人的纠结症和月光族问题提供综合解决方案，通过趣味化的互动形式和实用的功能工具，帮助用户做出更好的生活决策。\n\n✨ 设计亮点：3D小球互动效果增强用户体验趣味性，让决策过程变得轻松愉快。',
    category: ProjectCategory.MINI_PROGRAM,
    images: [hbzdcsm3, hbzdcsm2, hbzdcsm1],
    link: '#',
    tags: ['UniApp', '3D互动', '记账系统', '卡路里计算', '用户体验']
  }
];
