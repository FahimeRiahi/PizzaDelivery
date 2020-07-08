import {Component, Input, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component/base.component';
import {FormGroup, Validators} from '@angular/forms';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
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
  treeControl = new NestedTreeControl<any>(node => node.ingredients);

  ngOnInit() {
    this.addToCartForm = this.formBuilder.group({
      quantity: ['', [Validators.required, Validators.min(1), Validators.max(10)]],

    });
    this.apiService.get('pizzas', '').subscribe((res: any) => {
      this.pizzaList = res.data;

    });
  }
  hasChild = (_: number, node: any) => !!node.ingredients && node.ingredients.length > 0;

  findPizza(name , ingredients) {
    this.apiService.get('pizzas', '?name=' + name.value + '&ingredients=' + ingredients.value).subscribe((res: any) => {
      this.pizzaList = res.data;

    });
  }

}
