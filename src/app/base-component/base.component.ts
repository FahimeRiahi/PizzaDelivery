import {ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PizzaService} from '../services/pizza.service';

export {FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-base-component', template: ''
})
export class BaseComponent {
  protected cartList: any[] = [];

  constructor(protected router: Router,
              protected service: PizzaService,
              // protected toast: ToastService,
              protected activeRoute: ActivatedRoute,
              protected cdref: ChangeDetectorRef,
              // protected ngxSmartModalService: NgxSmartModalService,
              protected formBuilder: FormBuilder,
              // protected confirmationDialogService: ConfirmationDialogService
  ) {
  }

  addToCart(pizza, input) {
    const pizzaCount = parseInt(input.value, 10);
    if (pizzaCount > 0) {
      const pizzaExist = this.cartList.find(x => x.pizza.id === pizza.id);
      if (pizzaExist) {
        const index = this.cartList.indexOf(pizzaExist);
        this.cartList[index].count = pizzaCount;
      } else {
        this.cartList.push({pizza: pizza, count: pizzaCount});
      }
      localStorage.setItem('cartList', JSON.stringify(this.cartList));


    } else {
      alert('choose count');
    }
  }

  convertCurrency(value) {
    return value * 1.13;
  }
}
