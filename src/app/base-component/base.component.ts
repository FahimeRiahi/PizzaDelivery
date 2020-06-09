import {ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {PizzaService} from '../services/pizza.service';

@Component({
  selector: 'app-base-component', template: ''
})
export class BaseComponent {
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
}
