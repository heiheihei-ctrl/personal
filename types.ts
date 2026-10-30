
export enum ProjectCategory {
  MINI_PROGRAM = '小程序',
  WEB = 'Web',
  H5 = 'H5',
  SHOPIFY = 'Shopify',
  UI_DESIGN = 'UI设计'
}

export interface Project {
  summary: {
    problem: string;
    responsibility: string;
    techStack: string[];
    result: string;
  };
  implementation: string[];
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  images: string[];
  link: string;
  tags: string[];
  date: string;
}

export function formatProjectDate(date: string): string {
  const [year, month, day] = date.split('-').map(Number);
  return `${year}年${month}月${day}日`;
}

export enum BlogCategory {
  FRONTEND = '前端开发',
  SHOPIFY = 'Shopify',
  NOTES = '技术笔记'
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  tags: string[];
  date: string;
  readTime: number;
  coverGradient: string;
  coverIcon: string;
}
