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
    let params = '?';
    if (name.value) {
      params += 'name=' + name.value;
    }
    if (ingredients.value) {
      params += 'ingredients=' + ingredients.value;
    }


    this.apiService.get('pizzas', params).subscribe((res: any) => {
      this.pizzaList = res.data;

    });
  }

}
