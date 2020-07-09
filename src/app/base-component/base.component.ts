import {AfterViewInit, ChangeDetectorRef, Component, Inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PizzaService} from '../services/pizza.service';
import {Order} from '../services/models';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {ToastService} from '../services/toast.service';
import {ApiService} from '../services/api.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';


export {FormGroup, Validators} from '@angular/forms';
export {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-base-component', template: ''
})
export class BaseComponent {
  ingredients: IngredientNode[];
  cartList: any[] = [];
  deliveryAmount: any;
  addressFormGroup: FormGroup;
  newOrder = new Order();
  ingredientSearchText: any;
  isAllergic: boolean;

  constructor(protected router: Router,
              protected service: PizzaService,
              protected apiService: ApiService,
              protected toast: ToastService,
              protected activeRoute: ActivatedRoute,
              protected cdref: ChangeDetectorRef,
              protected formBuilder: FormBuilder,
              public dialog: MatDialog,
              // protected confirmationDialogService: ConfirmationDialogService
  ) {
    localStorage.setItem('userId', JSON.stringify(Math.round(Math.random() * 100)));
  }


  addToCart(pizza, input) {
    const pizzaCount = parseInt(input.value, 10);
    if (pizzaCount > 0) {
      const pizzaExist = this.cartList.find(x => x.pizza._id === pizza._id);
      if (pizzaExist) {
        const index = this.cartList.indexOf(pizzaExist);
        this.cartList[index].count = pizzaCount;
        this.toast.success(`${pizza.name} count updated in your cart`);

      } else {
        this.cartList.push({pizza: pizza, count: pizzaCount});
        this.toast.success(`${pizza.name} added to your cart`);

      }
      localStorage.setItem('cartList', JSON.stringify(this.cartList));
      // localStorage.setItem('myOrder', JSON.stringify(this.newOrder));


    } else {
      this.toast.info('Select Count');
    }
  }

  removeFromCart(index, item) {
    this.cartList.splice(index, 1);
    // this.newOrder = JSON.parse(localStorage.getItem('myOrder'));
    // const pizzas = this.newOrder.pizzas.split(',');
    // const counts = this.newOrder.counts.split(',');
    // pizzas.splice(index, 1);
    // counts.splice(index, 1);
    // this.newOrder.pizzas = pizzas.join(',');
    // this.newOrder.counts = counts.join(',');
    localStorage.setItem('cartList', JSON.stringify(this.cartList));
    // localStorage.setItem('myOrder', JSON.stringify(this.newOrder));

  }

  convertCurrency(value) {
    return value * 1.13;
  }

  saveAddress() {
    if (this.addressFormGroup.valid) {
      this.deliveryAmount = Math.round(Math.random() * 10 + 3);
    }
  }

  submitOrder(description: string = '', totalPrice) {
    if (this.addressFormGroup.valid) {
      this.newOrder.description = description;
      this.newOrder.totalPrice = totalPrice;
      this.newOrder.address = this.addressFormGroup.value;
      this.newOrder.pizzas = this.cartList as any;
      this.apiService.post('order', this.newOrder).subscribe((res: any) => {
        this.toast.success('Order Completed Successfully');
        this.router.navigate(['/my-orders']);
        localStorage.removeItem('myOrder');
        localStorage.removeItem('cartList');
      });
    } else {
      this.toast.info('Fill your complete address to deliver.');
    }
  }

  openDialog(ingredients: any) {
    this.ingredients = ingredients;
    const dialogRef = this.dialog.open(DialogDataComponent, {
      data: {ingredients: this.ingredients, searchValue: this.ingredientSearchText}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isAllergic = result;
    });
  }

}

interface IngredientNode {
  name: string;
  ingredients?: IngredientNode[];
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
  styleUrls: ['./dialog-data.component.css']
})

export class DialogDataComponent implements AfterViewInit {
  ingredients: IngredientNode[];
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  private transformer = (node: IngredientNode, level: number) => {
    return {
      expandable: !!node.ingredients && node.ingredients.length > 0,
      name: node.name,
      level: level,
    };
  }
  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, node => node.expandable, node => node.ingredients);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  searchValue: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    this.dataSource.data = data.ingredients;
    this.searchValue = data.searchValue;

  }


  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngAfterViewInit(): void {
    if (this.searchValue) {
      for (let i = 0; i < this.treeControl.dataNodes.length; i++) {
        if (this.treeControl.dataNodes[i].name.toString().toLowerCase().match(this.searchValue.value.toString().toLowerCase())) {
          for (let j = 0; j < this.treeControl.dataNodes[i].level; j++) {
            this.treeControl.expand(this.treeControl.dataNodes[i - (j + 1)]);
          }
        }
      }
    }

  }


}

