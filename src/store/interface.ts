export interface Product {
  _id: string;
  images: Image[];
  name: string;
  price: number;
  rating: number;
}

export interface Image {
  url: string;
  source: string;
}
