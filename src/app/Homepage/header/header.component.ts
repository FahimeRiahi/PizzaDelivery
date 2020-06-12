import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component/base.component';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent extends BaseComponent implements OnInit {


  ngOnInit() {
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
        sum = sum + value.pizza.price;
      });
    }
    return sum;

  }

}
