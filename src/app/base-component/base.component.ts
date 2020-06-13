import {ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PizzaService} from '../services/pizza.service';
import {Order} from '../services/models';

export {FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-base-component', template: ''
})
export class BaseComponent {
  protected cartList: any[] = [];
  deliveryAmount: any;
  addressFormGroup: FormGroup;
  newAddress: any;
  newOrder = new Order();

  constructor(protected router: Router,
              protected service: PizzaService,
              // protected toast: ToastService,
              protected activeRoute: ActivatedRoute,
              protected cdref: ChangeDetectorRef,
              // protected ngxSmartModalService: NgxSmartModalService,
              protected formBuilder: FormBuilder,
              // protected confirmationDialogService: ConfirmationDialogService
  ) {
    localStorage.setItem('userId', JSON.stringify(Math.round(Math.random() * 100)));
  }

  addToCart(pizza, input) {
    const pizzaCount = parseInt(input.value, 10);
    this.newOrder.pizzas = this.newOrder.pizzas ? this.newOrder.pizzas.concat(',' + pizza.name) : pizza.name.toString();
    this.newOrder.counts = this.newOrder.counts ? this.newOrder.counts.concat(',' + pizzaCount) : pizzaCount.toString();
    if (pizzaCount > 0) {
      const pizzaExist = this.cartList.find(x => x.pizza.id === pizza.id);
      if (pizzaExist) {
        const index = this.cartList.indexOf(pizzaExist);
        this.cartList[index].count = pizzaCount;
      } else {
        this.cartList.push({pizza: pizza, count: pizzaCount});
      }
      localStorage.setItem('cartList', JSON.stringify(this.cartList));
      localStorage.setItem('myOrder', JSON.stringify(this.newOrder));


    } else {
      alert('choose count');
    }
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

      })
      this.deliveryAmount = Math.round(Math.random() * 70 + 30);
    } else {
    }

  }

  submitOrder(description: string = '') {
    this.newOrder = JSON.parse(localStorage.getItem('myOrder'));
    if (this.newOrder.addressId) {
      this.newOrder.id = Math.round(Math.random() * 100);
      this.newOrder.orderDate = new Date();
      this.newOrder.username = JSON.parse(localStorage.getItem('username'));
      this.newOrder.description = description;
      this.service.createOrder(this.newOrder).subscribe((res: any) => {

      });
    } else {
      alert('fill address');
    }
  }
}
