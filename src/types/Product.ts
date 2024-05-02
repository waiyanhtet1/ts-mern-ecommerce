export type Product = {
  name: string;
  slug: string;
  image: string;
  category: string;
  brand: string;
  price: number;
  countInStock: number;
  descriptioin: string;
  rating: number;
  numReviews: number;
};

export type ProductState = {
  products: Product[];
  loading: boolean;
  error: string;
};
