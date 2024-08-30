export interface Product {
  _id: string;
  description: string;
  feedbacks: Feedbacks[];
  feedbacksCount: number;
  images: Image[];
  name: string;
  price: number;
  rating: number;
  status: number;
  subCategory: string;
  characteristics: Chars[];
  brand: string;
}
export interface Feedbacks {
  _id: string;
  product: string;
  advantages: string;
  rate: number;
}

export interface Image {
  url: string;
  source: string;
}

export interface Chars {
  title: string;
  items: Items[];
}

export interface Items {
  name: string;
  value: string;
}
