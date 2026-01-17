
export enum ProjectCategory {
  UI_DESIGN = 'UI设计',
  MINI_PROGRAM = '小程序',
  APP = 'APP',
  H5 = 'H5',
  SHOPIFY = 'Shopify',
  BLOCKCHAIN = '区块链'
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
