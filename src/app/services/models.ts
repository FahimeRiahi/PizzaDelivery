import {Pizza} from './pizza';

export class Order {
  pizzas: [{ pizza: Pizza, count: number }];
  address: Address;
  description: string;
  totalPrice: number;
}

export class Address {
  id: number;
  name: string;
  surname: string;
  address: string;
  phoneNumber: string;
}
