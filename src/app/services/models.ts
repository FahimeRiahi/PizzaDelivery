export class Order {
  id: number;
  pizzas: string;
  addressId: number;
  counts: string;
  username: string;
  orderDate: Date;
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
