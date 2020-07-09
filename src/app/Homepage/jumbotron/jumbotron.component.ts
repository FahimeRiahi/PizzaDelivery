import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component/base.component';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent extends BaseComponent implements OnInit {
  types = ['Meat', 'Veg'];
  type = '';

  ngOnInit() {
  }
}
