import { Product } from '../models/product';
export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Headphones',
    price: 59.9,
    tags: ['audio', 'new'],
    rating: 4,
    image: 'https://picsum.photos/seed/phones/400/300',
  },
  {
    id: 2,
    title: 'Keyboard',
    price: 79.0,
    tags: ['keyboard'],
    rating: 3,
    image: 'https://picsum.photos/seed/keys/400/300',
  },
  {
    id: 3,
    title: 'Mouse',
    price: 29.5,
    tags: ['mouse', 'promo'],
    rating: 5,
    image: 'https://picsum.photos/seed/mouse/400/300',
    disabled: true,
  },
];
