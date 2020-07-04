import {AfterViewInit, Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {BaseComponent} from '../../base-component/base.component';
import {MatMenu} from '@angular/material/menu';
import {Observable, Subject, Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import {Validators} from "@angular/forms";

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent extends BaseComponent implements OnInit, AfterViewInit {

  fillAddress = false;
  @ViewChild('menu', {static: false}) searchMenu!: MatMenu;
  totalCartPrice: any;

  ngOnInit() {
    this.initialAddressForm();
  }

  clearOrder() {
    this.cartList = [{pizza: undefined, count: undefined}];
    this.initialAddressForm();
  }

  ngAfterViewInit() {
    // Inject our custom logic of menu close
    (this.searchMenu as any).closed = this.searchMenu.close = this.configureMenuClose(this.searchMenu.close);
  }

  private configureMenuClose(old: MatMenu['close']): MatMenu['close'] {
    const upd = new EventEmitter();
    feed(upd.pipe(
      filter(event => {
        if (event === 'click') {
          // Ignore clicks inside the menu
          return false;
        }
        return true;
      }),
    ), old);
    return upd;
  }

  public initialAddressForm() {
    this.addressFormGroup = this.formBuilder.group({
      id: '',
      address: ['', [Validators.required, Validators.minLength(5)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: [''],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^(\d)(?!\1+$)\d{10}$/)]],
    });
  }


  loadCartList() {
    this.cartList = JSON.parse(localStorage.getItem('cartList'));
  }

  totalSum(items, field) {
    let sum = 0;
    if (field === 'count') {
      items.forEach(function (value) {
        sum = sum + value.count;
      });
    } else if (field === 'price') {
      items.forEach(function (value) {
        sum = sum + (value.pizza.price * value.count);
      });
      this.totalCartPrice = sum;
    }
    return sum;

  }

}

function feed<T>(from: Observable<T>, to: Subject<T>): Subscription {
  return from.subscribe(
    data => to.next(data),
    err => to.error(err),
    () => to.complete(),
  );
}
