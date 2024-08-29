export interface SlideData {
  id: string;
  category: string;
  image: string;
  name: string;
}

export interface SuggestionsData {
  id: string;
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
