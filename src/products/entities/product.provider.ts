import { Product } from './product.entity';
export const ProductProvider = [
  {
    provide: 'PRODUCTS_REPOSITORY',
    useValue: Product,
  },
];
