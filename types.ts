
export enum ProjectCategory {
  UI_DESIGN = 'UI设计',
  MINI_PROGRAM = '小程序',
  APP = 'APP',
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
}
