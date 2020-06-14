import {ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PizzaService} from '../services/pizza.service';
import {Order} from '../services/models';
import {ToastService} from '../services/toast.service';

export {FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-base-component', template: ''
})
export class BaseComponent {
  cartList: any[] = [];
  deliveryAmount: any;
  addressFormGroup: FormGroup;
  newAddress: any;
  newOrder = new Order();

  constructor(protected router: Router,
              protected service: PizzaService,
              protected toast: ToastService,
              protected activeRoute: ActivatedRoute,
              protected cdref: ChangeDetectorRef,
              protected formBuilder: FormBuilder,
              // protected confirmationDialogService: ConfirmationDialogService
  ) {
    localStorage.setItem('userId', JSON.stringify(Math.round(Math.random() * 100)));
  }

  addToCart(pizza, input) {
    const pizzaCount = parseInt(input.value, 10);
    const myOrder = JSON.parse(localStorage.getItem('myOrder'));
    const myCartList = JSON.parse(localStorage.getItem('cartList'));
    this.newOrder = (myOrder === null || myOrder.counts === '') ? this.newOrder : myOrder;
    this.cartList = (myCartList === null) ? this.cartList : myCartList;

    this.newOrder.pizzas = this.newOrder.pizzas ? this.newOrder.pizzas.concat(',' + pizza.name) : pizza.name.toString();
    this.newOrder.counts = this.newOrder.counts ? this.newOrder.counts.concat(',' + pizzaCount) : pizzaCount.toString();
    if (pizzaCount > 0) {
      const pizzaExist = this.cartList.find(x => x.pizza.id === pizza.id);
      if (pizzaExist) {
        const index = this.cartList.indexOf(pizzaExist);
        this.cartList[index].count = pizzaCount;
        this.toast.success(`${pizza.name} count updated in your cart`);

      } else {
        this.cartList.push({pizza: pizza, count: pizzaCount});
        this.toast.success(`${pizza.name} added to your cart`);

      }
      localStorage.setItem('cartList', JSON.stringify(this.cartList));
      localStorage.setItem('myOrder', JSON.stringify(this.newOrder));


    } else {
      this.toast.info('Select Count');
    }
  }

  removeFromCart(index, item) {
    this.cartList.splice(index, 1);
    this.newOrder = JSON.parse(localStorage.getItem('myOrder'));
    const pizzas = this.newOrder.pizzas.split(',');
    const counts = this.newOrder.counts.split(',');
    pizzas.splice(index, 1);
    counts.splice(index, 1);
    this.newOrder.pizzas = pizzas.join(',');
    this.newOrder.counts = counts.join(',');
    localStorage.setItem('cartList', JSON.stringify(this.cartList));
    localStorage.setItem('myOrder', JSON.stringify(this.newOrder));

  }

  convertCurrency(value) {
    return value * 1.13;
  }

  saveAddress() {
    this.newOrder = JSON.parse(localStorage.getItem('myOrder'));
    if (this.addressFormGroup.valid) {
      this.newAddress = this.addressFormGroup.value;
      this.newAddress.id = Math.round(Math.random() * 10);
      this.service.createAddress(this.newAddress).subscribe((res: any) => {
        this.newOrder.addressId = this.newAddress.id;
        localStorage.setItem('myOrder', JSON.stringify(this.newOrder));
        this.toast.success('Address saved successfully');
      })
      this.deliveryAmount = Math.round(Math.random() * 70 + 30);
    } else {
    }

  }

  submitOrder(description: string = '', totalPrice) {
    debugger;
    this.newOrder = JSON.parse(localStorage.getItem('myOrder'));
    if (this.newOrder.addressId) {
      this.newOrder.id = Math.round(Math.random() * 100);
      this.newOrder.orderDate = new Date();
      this.newOrder.username = JSON.parse(localStorage.getItem('username'));
      this.newOrder.description = description;
      this.newOrder.totalPrice = totalPrice;
      this.service.createOrder(this.newOrder).subscribe((res: any) => {
        this.toast.success('Order Completed Successfully');
        this.router.navigate(['/my-orders']);
        localStorage.removeItem('myOrder');
        localStorage.removeItem('cartList');
      });
    } else {
      this.toast.info('Fill your complete address to deliver.');
    }
  }
}
