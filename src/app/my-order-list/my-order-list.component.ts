import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../base-component/base.component';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-my-order-list',
  templateUrl: './my-order-list.component.html',
  styleUrls: ['./my-order-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MyOrderListComponent extends BaseComponent implements OnInit {
  dataSource: any;
  columnsToDisplay = ['description', 'totalPrice', 'createdAt', 'address.name', 'address.phone', 'address.address'];
  expandedColumnsToDisplay = ['name', 'count'];
  expandedElement: any;
  showOrders = false;

  ngOnInit() {
    this.loadMyOrders();
  }

  loadMyOrders() {
    this.apiService.get('orders', '').subscribe((res: any) => {
      if (res.data.length > 0) {
        this.showOrders = true;
      } else {
        this.showOrders = false;
      }
      this.dataSource = res.data;
      //   .map((x, i) => ({
      //   id: x.id,
      //   pizzas: ({pizza: x.pizzas.split(',').map((n, index) => ({name: n, count: x.counts.split(',')[index]}))}),
      //   description: x.description,
      //   totalPrice: x.totalPrice,
      //   address: this.service.getAddress(x.addressId).then(a => {
      //     this.dataSource[i].address = a;
      //   }),
      //   orderDate: x.orderDate
      // }));
    });
  }
}


