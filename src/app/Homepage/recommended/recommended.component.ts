import {Component, Input, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component/base.component';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent extends BaseComponent implements OnInit {
  @Input() pizzaType;

  pizzaList: any;

  ngOnInit() {
    this.service.searchPizza(this.pizzaType).subscribe((res: any) => {
      this.pizzaList = res;

    });
  }

  findPizza(searchTerm) {
    this.service.searchPizza(searchTerm.value).subscribe((res: any) => {
      this.pizzaList = res;

    });
  }

  addToCart(id) {
    console.log(id);
  }
}
