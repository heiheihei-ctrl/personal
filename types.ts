
export enum ProjectCategory {
  UI_DESIGN = 'UI设计',
  MINI_PROGRAM = '小程序',
  H5 = 'H5',
  SHOPIFY = 'Shopify',
  WEB = 'Web'
}

export interface Project {
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
