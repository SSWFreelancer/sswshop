export interface ProductData {
  id: number;
  feedbacksCount: number;
  images: Image[];
  name: string;
  price: number;
  rating: number;
  status: number;
  subCategory: string;
}
export interface Image {
  url: string;
  source: string;
}
