import { Customer } from './customer.entity';

export const CustomerProvider = [
  {
    provide: 'CUSTOMER_PROVIDER',
    useValue: Customer,
  },
];
