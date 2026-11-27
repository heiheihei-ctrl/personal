import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { Project } from './types';
import { EN_PROJECTS } from './en';

export type Language = 'zh' | 'en';

const zh = {
  meta: {
    title: 'YY Studio — Shopify / WordPress 全栈开发',
    description:
      '钱盈熠（YY）— 全栈开发工程师，专注 Shopify 独立站、WordPress / WooCommerce 建站、Bug 修复与 AI Agent 工作流。',
  },
  nav: {
    work: '作品集',
    about: '关于我',
    switchLabel: '切换语言',
  },
  categories: {
    all: '全部',
    'Vibe Coding': 'Vibe Coding',
    '小程序': '小程序',
    Web: 'Web',
    H5: 'H5',
    Shopify: 'Shopify',
    'UI设计': 'UI 设计',
    AI: 'AI',
  } as Record<string, string>,
  home: {
    greeting: '👋 你好，我是 YY（钱盈熠）',
    h1a: '连接代码与设计，',
    h1b: '打造数字化极致体验',
    heroLines: [
      '💻 专注 Shopify / WordPress 电商建站与全栈开发，从主题定制到接口集成',
      '🚀 三年开发实战，独立交付 20+ 线上项目',
      '✨ 用技术驱动业务增长，让你的店铺更快、更好用、更好卖',
    ],
    empty: '😊 该分类下暂无作品，更多项目正在整理。',
  },
  card: {
    problem: '问题',
    responsibility: '职责',
    tech: '技术',
    result: '结果',
    view: '查看详情',
  },
  detail: {
    back: '返回列表',
    overview: '📋 项目介绍',
    process: '实现过程',
    stack: '🛠️ 核心技术',
    visit: '访问线上地址',
    private: '🔒 该项目目前仅供内网 / 演示访问',
    contactNote: '💬 想了解技术细节？欢迎通过「关于我」页面的联系方式沟通。',
    moreTitle: '✨ 浏览更多精彩作品',
    moreCta: '回到作品合集',
    notFound: '😔 未找到该作品',
    backHome: '返回首页列表',
  },
  about: {
    name: '钱盈熠',
    role: '全栈开发工程师',
    certsTitle: '技能证书',
    certs: ['计算机程序设计员 三级', '网络与信息安全管理员 三级'],
    summaryTitle: '自我评价',
    summary: [
      {
        pre: '💡 我是一名拥有三年实战经验的全栈开发工程师，具备从需求分析、技术选型到部署上线的全流程能力。',
        highlight: '',
        post: '',
      },
      {
        pre: '📚 我善于从各种资源中汲取知识，在工作之余积极探索 ',
        highlight: '大模型应用、Prompt 工程、AI Agent、RAG',
        post: ' 等 AI 应用相关技术。',
      },
      {
        pre: '🚀 我始终保持对新技术的好奇心，并乐于接受高挑战性的项目，追求代码质量与交互体验的完美平衡。',
        highlight: '',
        post: '',
      },
    ],
    experienceTitle: '工作经历',
    jobs: [
      {
        company: '天宫子午（深圳）科技有限公司',
        period: '2026.06 - 至今',
        role: '全栈开发工程师',
        site: 'https://tgtai.com/',
        bullets: [
          '负责公司核心项目 tgtai.com 的日常维护与功能迭代，保障网站稳定运行及体验优化',
          '独立完成前端交互优化、页面性能调优及响应式适配，提升多终端兼容性',
          '根据业务需求参与功能模块设计与开发，完成从需求分析到上线部署的全流程',
          '持续跟进网站安全与运维，处理线上问题，确保系统高可用',
        ],
      },
      {
        company: '杭州一颗糯米网络科技有限公司',
        period: '2025.06 - 2026.05',
        role: '全栈开发工程师',
        site: '',
        bullets: [
          '主导 Shopify、WordPress 及自建站项目的全栈开发与定制',
          '独立设计技术方案，完成系统架构搭建，负责从零到一的完整交付',
          '负责项目从开发环境到生产环境部署上线的全流程自动化管理',
        ],
      },
      {
        company: '深圳市三合软件有限公司',
        period: '2023.06 - 2025.05',
        role: '前端开发工程师',
        site: '',
        bullets: [
          '负责公司核心项目的前端及部分后端接口开发，参与需求评审与系统设计',
          '根据业务需求承担模块化开发任务，按计划高质量完成交付目标',
          '协助测试人员完成复杂业务逻辑下的系统测试，保障线上版本稳定性',
        ],
      },
    ],
    awardsTitle: '荣誉奖项',
    awards: [
      { title: '第六届“传智杯”全国大学生 Web 前端挑战赛', award: '全国一等奖', date: '2024.04' },
      { title: '第五届“传智杯”全国大学生 Web 前端挑战赛', award: '全国优秀奖', date: '2023.05' },
      { title: '湖南省职业院校技能大赛“移动应用开发”', award: '三等奖', date: '2023.03' },
      { title: '湖南省第一届职业技能大赛“网站设计与开发”', award: '第四名', date: '2022.07' },
      { title: '2021-2022 学年度', award: '国家奖学金', date: '2022' },
    ],
    skillsTitle: '技术图谱',
    skills: [
      {
        title: '💻 前端核心 (Frontend Stack)',
        text: '熟悉 HTML5/CSS3 (Flex, Grid)，深耕 Vue 2/3 及 React 生态。熟练应用 Tailwind CSS、TypeScript。擅长使用 Lottie 实现动效及前端性能优化（懒加载、节流防抖）。',
        highlight: 'Tailwind CSS',
      },
      {
        title: '⚙️ 后端与跨端 (Backend & Hybrid)',
        text: '具备 PHP (Laravel) 及 Java (SpringBoot, MyBatis-Plus) 开发经验。熟悉 UniApp 跨端开发及 Shopify 独立站生态。',
        highlight: '',
      },
      {
        title: '🔧 工程化与网络 (Engineering & Network)',
        text: '熟悉 Git 版本控制，了解计算机网络原理（HTTP, TCP/IP, HTTPS）及浏览器缓存机制、跨域解决方案。',
        highlight: '',
      },
    ],
    educationTitle: '教育经历',
    education: [
      { school: '🎓 国家开放大学', major: '计算机网络技术' },
      { school: '🎓 郴州技师学院 (预备技师班)', major: '计算机网络技术' },
    ],
  },
  footer: {
    tagline: 'Driven by curiosity, powered by code. 致力于创造有温度的数字产品。',
    quickLinks: '快速链接',
    work: '作品合集',
    about: '关于我',
    social: '社交网络',
    wechatTip: '扫码添加微信',
    rights: 'ALL RIGHTS RESERVED.',
    built: 'Designed & Built with',
    by: 'by YY',
  },
};

const en: typeof zh = {
  meta: {
    title: 'YY Studio — Shopify & WordPress Developer',
    description:
      'Yingyi Qian (YY) — full-stack developer focused on Shopify storefronts, WordPress / WooCommerce builds, bug fixes and AI agent workflows.',
  },
  nav: {
    work: 'Work',
    about: 'About',
    switchLabel: 'Switch language',
  },
  categories: {
    all: 'All',
    'Vibe Coding': 'Vibe Coding',
    '小程序': 'Mini Program',
    Web: 'Web',
    H5: 'H5',
    Shopify: 'Shopify',
    'UI设计': 'UI Design',
    AI: 'AI',
  },
  home: {
    greeting: '👋 Hi, I’m YY (Yingyi Qian)',
    h1a: 'Where code meets design',
    h1b: 'digital experiences that convert',
    heroLines: [
      '💻 Shopify & WordPress e-commerce specialist — storefronts, custom themes and API integrations',
      '🚀 3 years of hands-on delivery across 20+ live projects',
      '✨ Faster stores, cleaner UX and measurable conversion gains',
    ],
    empty: '😊 No projects in this category yet — more are on the way.',
  },
  card: {
    problem: 'Problem',
    responsibility: 'Role',
    tech: 'Stack',
    result: 'Result',
    view: 'View case',
  },
  detail: {
    back: 'Back to work',
    overview: '📋 Overview',
    process: 'What I built',
    stack: '🛠️ Core stack',
    visit: 'Visit live site',
    private: '🔒 Private / demo access only',
    contactNote: '💬 Want the technical details? Reach me through the contact section on the About page.',
    moreTitle: '✨ Explore more work',
    moreCta: 'Back to all work',
    notFound: '😔 Project not found',
    backHome: 'Back to home',
  },
  about: {
    name: 'Yingyi Qian',
    role: 'Full-stack Developer',
    certsTitle: 'Certifications',
    certs: ['Computer Programmer, Level 3', 'Network & Information Security Administrator, Level 3'],
    summaryTitle: 'About me',
    summary: [
      {
        pre: '💡 I’m a full-stack developer with 3 years of hands-on experience, comfortable owning a project from requirement analysis and technical decisions through deployment.',
        highlight: '',
        post: '',
      },
      {
        pre: '📚 I learn continuously and spend my spare time exploring ',
        highlight: 'LLM applications, prompt engineering, AI agents and RAG',
        post: '.',
      },
      {
        pre: '🚀 I stay curious about new technology, enjoy high-challenge projects and aim for the right balance between code quality and interaction design.',
        highlight: '',
        post: '',
      },
    ],
    experienceTitle: 'Experience',
    jobs: [
      {
        company: 'Tiangong Ziwu (Shenzhen) Technology',
        period: 'Jun 2026 – Present',
        role: 'Full-stack Developer',
        site: 'https://tgtai.com/',
        bullets: [
          'Maintain and iterate tgtai.com, the company’s core product, keeping the site stable and the experience smooth',
          'Own front-end interaction improvements, page performance tuning and responsive adaptation across devices',
          'Design and build feature modules from requirement analysis through deployment',
          'Handle security, operations and production issues to keep the system highly available',
        ],
      },
      {
        company: 'Hangzhou Yikel Nuomi Network Technology',
        period: 'Jun 2025 – May 2026',
        role: 'Full-stack Developer',
        site: '',
        bullets: [
          'Led full-stack development and customization for Shopify, WordPress and custom-built sites',
          'Designed technical solutions and system architecture, owning delivery from zero to one',
          'Managed deployment automation from development through production',
        ],
      },
      {
        company: 'Shenzhen Sanhe Software',
        period: 'Jun 2023 – May 2025',
        role: 'Front-end Developer',
        site: '',
        bullets: [
          'Built the front end and part of the back-end APIs for core projects, joining requirement reviews and system design',
          'Delivered modular features on schedule with a high quality bar',
          'Supported QA on complex business logic and kept releases stable',
        ],
      },
    ],
    awardsTitle: 'Awards',
    awards: [
      { title: '6th “Chuanzhi Cup” National College Web Front-end Challenge', award: 'National First Prize', date: 'Apr 2024' },
      { title: '5th “Chuanzhi Cup” National College Web Front-end Challenge', award: 'National Merit Award', date: 'May 2023' },
      { title: 'Hunan Vocational College Skills Competition — Mobile App Development', award: 'Third Prize', date: 'Mar 2023' },
      { title: '1st Hunan Vocational Skills Competition — Website Design & Development', award: '4th Place', date: 'Jul 2022' },
      { title: '2021–2022 Academic Year', award: 'National Scholarship', date: '2022' },
    ],
    skillsTitle: 'Technical stack',
    skills: [
      {
        title: '💻 Frontend',
        text: 'Strong in HTML5/CSS3 (Flex, Grid), the Vue 2/3 and React ecosystems, Tailwind CSS and TypeScript. Experienced with Lottie motion and front-end performance work such as lazy loading, debounce and throttle.',
        highlight: 'Tailwind CSS',
      },
      {
        title: '⚙️ Backend & cross-platform',
        text: 'PHP (Laravel) and Java (Spring Boot, MyBatis-Plus) experience. Comfortable with UniApp cross-platform development and the Shopify storefront ecosystem.',
        highlight: '',
      },
      {
        title: '🔧 Engineering & networking',
        text: 'Git version control, HTTP/TCP/IP/HTTPS fundamentals, browser caching and cross-origin solutions.',
        highlight: '',
      },
    ],
    educationTitle: 'Education',
    education: [
      { school: '🎓 Open University of China', major: 'Computer Network Technology' },
      { school: '🎓 Chenzhou Technician College (Preparatory Technician)', major: 'Computer Network Technology' },
    ],
  },
  footer: {
    tagline: 'Driven by curiosity, powered by code. Building digital products with care.',
    quickLinks: 'Quick links',
    work: 'Work',
    about: 'About',
    social: 'Social',
    wechatTip: 'Scan to add me on WeChat',
    rights: 'ALL RIGHTS RESERVED.',
    built: 'Designed & Built with',
    by: 'by YY',
  },
};

export const messages: Record<Language, typeof zh> = { zh, en };

function readInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'zh';
  const fromQuery = new URLSearchParams(window.location.search).get('lang');
  if (fromQuery === 'zh' || fromQuery === 'en') {
    window.localStorage.setItem('yy-lang', fromQuery);
    return fromQuery;
  }
  const stored = window.localStorage.getItem('yy-lang');
  if (stored === 'zh' || stored === 'en') return stored;
  return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

interface I18nValue {
  lang: Language;
  m: typeof zh;
  setLang: (lang: Language) => void;
  toggle: () => void;
}

const I18nContext = createContext<I18nValue | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(readInitialLanguage);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    window.localStorage.setItem('yy-lang', next);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', next);
    window.history.replaceState({}, '', url);
  }, []);

  const toggle = useCallback(() => {
    setLang(lang === 'zh' ? 'en' : 'zh');
  }, [lang, setLang]);

  const m = messages[lang];

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = m.meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', m.meta.description);
  }, [lang, m]);

  const value = useMemo(() => ({ lang, m, setLang, toggle }), [lang, m, setLang, toggle]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export function useI18n(): I18nValue {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used inside LanguageProvider');
  return context;
}

/** Returns the project with English content when the UI is in English. */
export function localizeProject(project: Project, lang: Language): Project {
  if (lang === 'zh') return project;
  const translated = EN_PROJECTS[project.id];
  return translated ? { ...project, ...translated } : project;
}

export function useLocalizedProject(project: Project): Project {
  const { lang } = useI18n();
  return localizeProject(project, lang);
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function formatDate(date: string, lang: Language): string {
  const [year, month, day] = date.split('-').map(Number);
  if (lang === 'en') return `${MONTHS[month - 1]} ${day}, ${year}`;
  return `${year}年${month}月${day}日`;
}

export function useFormatDate(): (date: string) => string {
  const { lang } = useI18n();
  return (date: string) => formatDate(date, lang);
}
