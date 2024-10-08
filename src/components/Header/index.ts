export interface SubCategory {
  id: string;
  name: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  subCategories: SubCategory[];
}
