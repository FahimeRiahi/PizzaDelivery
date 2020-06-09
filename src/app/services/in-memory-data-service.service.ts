import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pizzas = [
      {
        id: 11,
        name: 'Mr. Nice',
        init: 'v',
        pizza: 'Veg',
        image: './assets/1.png',
        priceInDollar: 200,
        priceInEuro: 180,
        base: 'Thin crust',
        type: 'Cheese burst'
      },
      {
        id: 12,
        name: 'Narco',
        init: 'v',
        pizza: 'Veg',
        image: '././assets/2.png',
        priceInDollar: 300,
        priceInEuro: 250,
        base: 'Multigrain',
        type: 'Cheese burst'
      },
      {
        id: 13,
        name: 'Bombasto',
        init: 'n',
        pizza: 'Non Veg',
        image: './assets/3.png',
        priceInDollar: 200,
        priceInEuro: 180,
        base: 'Regular base',
        type: 'Cheese burst'
      },
      {
        id: 14,
        name: 'Celeritas',
        init: 'v',
        pizza: 'Veg',
        image: './assets/4.png',
        priceInDollar: 250,
        priceInEuro: 230,
        base: 'Flat bread',
        type: 'Cheese burst'
      },
      {
        id: 15,
        name: 'Magneta',
        init: 'v',
        pizza: 'Veg',
        image: './assets/5.png',
        priceInDollar: 200,
        priceInEuro: 180,
        base: 'Thin crust',
        type: 'Cheese burst'
      },
      {
        id: 16,
        name: 'RubberMan',
        init: 'n',
        pizza: 'Non Veg',
        image: './assets/6.png',
        priceInDollar: 350,
        priceInEuro: 230,
        base: 'Flat bread',
        type: 'Cheese burst'
      },
      {
        id: 17,
        name: 'Dynama',
        init: 'v',
        pizza: 'Veg',
        image: './assets/7.png',
        priceInDollar: 150,
        priceInEuro: 130,
        base: 'Thin crust',
        type: 'No Cheese'
      },
      {
        id: 18,
        name: 'Dr IQ',
        init: 'n',
        pizza: 'Non Veg',
        image: './assets/8.png',
        priceInDollar: 400,
        priceInEuro: 350,
        base: 'Multigrain',
        type: 'Cheese burst'
      },
      {
        id: 19,
        name: 'Magma',
        init: 'v',
        pizza: 'Veg',
        image: './assets/1.png',
        priceInDollar: 250,
        priceInEuro: 230,
        base: 'Thin crust',
        type: 'Cheese burst'
      },
      {
        id: 20,
        name: 'Tornado',
        init: 'v',
        pizza: 'Veg',
        image: './assets/2.png',
        priceInDollar: 200,
        priceInEuro: 180,
        base: 'Flat bread',
        type: 'Cheese Topping'
      },
      {
        id: 21,
        name: 'Mr. Nice',
        init: 'v',
        pizza: 'Veg',
        image: './assets/1.png',
        priceInDollar: 200,
        priceInEuro: 180,
        base: 'Thin crust',
        type: 'Cheese burst'
      },
      {
        id: 22,
        name: 'Narco',
        init: 'v',
        pizza: 'Veg',
        image: '././assets/2.png',
        priceInDollar: 300,
        priceInEuro: 280,
        base: 'Multigrain',
        type: 'Cheese burst'
      },
      {
        id: 23,
        name: 'Bombasto',
        init: 'n',
        pizza: 'Non Veg',
        image: './assets/3.png',
        priceInDollar: 400,
        priceInEuro: 380,
        base: 'Regular base',
        type: 'Cheese burst'
      },
      {
        id: 24,
        name: 'Celeritas',
        init: 'v',
        pizza: 'Veg',
        image: './assets/4.png',
        priceInDollar: 300,
        priceInEuro: 280,
        base: 'Flat bread',
        type: 'Cheese burst'
      },
      {
        id: 25,
        name: 'Magneta',
        init: 'n',
        pizza: 'Non Veg',
        image: './assets/5.png',
        priceInDollar: 500,
        priceInEuro: 480,
        base: 'Thin crust',
        type: 'Cheese burst'
      },
      {
        id: 26,
        name: 'RubberMan',
        init: 'v',
        pizza: 'Veg',
        image: './assets/6.png',
        priceInDollar: 350,
        priceInEuro: 320,
        base: 'Flat bread',
        type: 'Cheese burst'
      },
      {
        id: 27,
        name: 'Dynama',
        init: 'v',
        pizza: 'Veg',
        image: './assets/7.png',
        priceInDollar: 250,
        priceInEuro: 230,
        base: 'Regular base',
        type: 'Cheese burst'
      },
      {
        id: 28,
        name: 'Dr IQ',
        init: 'n',
        pizza: 'Veg',
        image: './assets/8.png',
        priceInDollar: 400,
        priceInEuro: 380,
        base: 'Multigrain',
        type: 'Cheese burst'
      },
      {
        id: 29,
        name: 'Magma',
        init: 'v',
        pizza: 'Veg',
        image: './assets/1.png',
        priceInDollar: 250,
        priceInEuro: 230,
        base: 'Thin crust',
        type: 'Cheese burst'
      },
      {
        id: 30,
        name: 'Tornado',
        init: 'v',
        pizza: 'Veg',
        image: './assets/2.png',
        priceInDollar: 600,
        priceInEuro: 580,
        base: 'Multigrain',
        type: 'Cheese Topping'
      }

    ];
    return {pizzas};
  }
}
