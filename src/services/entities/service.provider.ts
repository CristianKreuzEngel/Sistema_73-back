import { Service } from './service.entity';
export const ServiceProvider = [
  {
    provide: 'SERVICE_PROVIDER',
    useValue: Service,
  },
];
