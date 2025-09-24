export type Product = {
  id: number;
  title: string;
  price: number;
  tags: string[];
  rating: number;
  image: string;
  disabled?: boolean;
};
