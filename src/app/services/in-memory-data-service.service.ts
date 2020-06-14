import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Address, Order} from './models';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pizzas = [
      {
        id: 11,
        name: 'ALL MEAT',
        description: 'Pepperoni, ham, Italian sausage, bacon, our original sauce and signature three cheeses',
        init: 'v',
        pizza: 'Veg',
        image: './assets/1.png',
        price: 18.9,
        base: 'Thin crust',
        type: 'Cheese burst'
      },
      {
        id: 12,
        name: 'Deluxe',
        description: 'Pepperoni, Italian sausage, mushrooms, green peppers, onions, our original sauce and signature three cheeses',
        init: 'v',
        pizza: 'Veg',
        image: '././assets/2.png',
        price: 25,
        base: 'Multigrain',
        type: 'Cheese burst'
      },
      {
        id: 13,
        name: 'Garden',
        description: 'Mushrooms, black olives, onions, sliced tomatoes, our original sauce and signature three cheeses, plus feta',
        init: 'n',
        pizza: 'Non Veg',
        image: './assets/3.png',
        price: 22,
        base: 'Regular base',
        type: 'Cheese burst'
      },
      {
        id: 14,
        name: 'HAWAIIAN CHICKEN',
        description: 'Ham, grilled chicken, bacon, pineapple, our original sauce and signature three cheeses',
        init: 'v',
        pizza: 'Veg',
        image: './assets/4.png',
        price: 23,
        base: 'Flat bread',
        type: 'Cheese burst'
      },
      {
        id: 15,
        name: 'PEPPERONI MAGNIFICO',
        description: 'Pepperoni, our signature Old World Pepperoni®, romesan seasoning, our original sauce and signature three cheeses',
        init: 'v',
        pizza: 'Veg',
        image: './assets/5.png',
        price: 23.5,
        base: 'Thin crust',
        type: 'Cheese burst'
      },
      {
        id: 16,
        name: 'WHITE CHEEZY',
        description: 'Bacon, onions, sliced tomatoes, garlic parmesan sauce and our signature three cheeses, plus feta',
        init: 'n',
        pizza: 'Non Veg',
        image: './assets/6.png',
        price: 23,
        base: 'Flat bread',
        type: 'Cheese burst'
      },
      {
        id: 17,
        name: 'ITALIANO',
        description: 'Ham, salami, cheese, banana peppers, tomatoes, onions and sub dressing',
        init: 'v',
        pizza: 'Veg',
        image: './assets/7.png',
        price: 19,
        base: 'Thin crust',
        type: 'No Cheese'
      },
      {
        id: 18,
        name: 'STEAK & CHEESE',
        description: 'Steak, mushrooms, mayo and our signature three cheeses',
        init: 'n',
        pizza: 'Non Veg',
        image: './assets/8.png',
        price: 27,
        base: 'Multigrain',
        type: 'Cheese burst'
      },
      {
        id: 19,
        name: 'Magma',
        description: 'Steak, mushrooms, mayo and our signature three cheeses',
        init: 'v',
        pizza: 'Veg',
        image: './assets/1.png',
        price: 23,
        base: 'Thin crust',
        type: 'Cheese burst'
      },
      {
        id: 20,
        name: 'THE BIG PHILLY CHEESE STEAK',
        description: 'Huge pie cut into 8 extra-large slices topped with tender steak, mushrooms,' +
          'red onion and capsicum on a creamy cheese sauce base',
        init: 'v',
        pizza: 'Veg',
        image: './assets/2.png',
        price: 25,
        base: 'Flat bread',
        type: 'Cheese Topping'
      },
      {
        id: 21,
        name: 'THE BIG THREE MEATS',
        description: 'Huge pie cut into 8 extra-large slices.' +
          ' Authentic soft and foldable New York style dough topped with pepperoni, ground beef & Italian sausage',
        init: 'v',
        pizza: 'Veg',
        image: './assets/1.png',
        price: 24,
        base: 'Thin crust',
        type: 'Cheese burst'
      },
      {
        id: 22,
        name: 'THE BIG CHEESE',
        description: 'Huge pie cut into 8 extra-large slices. Authentic soft and foldable New York style dough topped with  mozzarella',
        init: 'v',
        pizza: 'Veg',
        image: '././assets/2.png',
        price: 22,
        base: 'Multigrain',
        type: 'Cheese burst'
      },
      {
        id: 23,
        name: 'THE BIG PEPPERONI, SAUSAGE & MUSHROOM',
        description: 'Huge pie cut into 8 extra-large slices. Authentic soft and foldable New York style dough topped ' +
          'with pepperoni,pork & fennel sausage, mushrooms and mozzarella.',
        init: 'n',
        pizza: 'Non Veg',
        image: './assets/3.png',
        price: 29,
        base: 'Regular base',
        type: 'Cheese burst'
      },
      {
        id: 24,
        name: 'THE BIG PEPPERONI\n',
        description: 'Huge pie cut into 8 extra-large slices.' +
          ' Authentic soft and foldable New York style dough topped with tasty pepperoni & mozzarella',
        init: 'v',
        pizza: 'Veg',
        image: './assets/4.png',
        price: 28,
        base: 'Flat bread',
        type: 'Cheese burst'
      },
      {
        id: 25,
        name: 'CHICKEN PARMA\n',
        description: '22 crumbed chicken bites with crispy rasher bacon, creamy mozzarella cheese & rich tomato sauce',
        init: 'n',
        pizza: 'Non Veg',
        image: './assets/5.png',
        price: 26,
        base: 'Thin crust',
        type: 'Cheese burst'
      },
      {
        id: 26,
        name: 'RubberMan',
        description: 'Pepperoni, Italian sausage, tomato, capsicum, olives, mozzarella & oregano on a tomato & garlic sauce base',
        init: 'v',
        pizza: 'Veg',
        image: './assets/6.png',
        price: 32,
        base: 'Flat bread',
        type: 'Cheese burst'
      },
      {
        id: 27,
        name: 'SUPREME',
        description: 'Pepperoni, rasher bacon, capsicum, ground beef, Italian sausage, mushroom, pineapple, topped with oregano & spring onion',
        init: 'v',
        pizza: 'Veg',
        image: './assets/7.png',
        price: 34,
        base: 'Regular base',
        type: 'Cheese burst'
      },
      {
        id: 28,
        name: 'TACO FIESTA',
        description: 'Ground beef, capsicum, diced tomato & red onion on a cheese sauce base, topped with a creamy taco sauce.',
        init: 'n',
        pizza: 'Veg',
        image: './assets/8.png',
        price: 31,
        base: 'Multigrain',
        type: 'Cheese burst'
      },
      {
        id: 29,
        name: 'BBQ STEAK & BACON\n',
        description: 'Tender steak, crispy rasher bacon and red onion topped with BBQ sauce.',
        init: 'v',
        pizza: 'Veg',
        image: './assets/1.png',
        price: 32,
        base: 'Thin crust',
        type: 'Cheese burst'
      },
      {
        id: 30,
        name: 'CHICKEN, BACON & AIOLI',
        description: 'Tender chicken, crispy rasher bacon, spinach and red onion, ' +
          'topped with a creamy aioli sauce and served on a pizza sauce base with garlic sauce.',
        init: 'v',
        pizza: 'Veg',
        image: './assets/2.png',
        price: 31,
        base: 'Multigrain',
        type: 'Cheese Topping'
      }

    ];
    const orders: Array<Order> = [];
    const addresses: Array<Address> = [];
    return {pizzas, orders, addresses};
  }
}
