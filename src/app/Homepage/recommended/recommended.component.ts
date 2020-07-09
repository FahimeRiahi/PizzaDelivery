import {Component, Input, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component/base.component';
import {FormGroup, Validators} from '@angular/forms';

// const converter = require('google-currency')

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent extends BaseComponent implements OnInit {
  @Input() pizzaType;
  pizzaList: any;
  addToCartForm: FormGroup;

  ngOnInit() {
    this.addToCartForm = this.formBuilder.group({
      quantity: ['', [Validators.required, Validators.min(1), Validators.max(10)]],

    });
    this.apiService.get('pizzas', '').subscribe((res: any) => {
      this.pizzaList = res.data;

    });
  }

  findPizza(name, ingredients) {
    this.ingredientSearchText = ingredients;

    this.apiService.get('pizzas', '?name=' + name.value + '&ingredients=' + ingredients.value).subscribe((res: any) => {
      this.pizzaList = res.data;

    });
  }

}
