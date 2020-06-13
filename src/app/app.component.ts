import {Component, OnInit} from '@angular/core';
import {ToasterConfig} from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  config: ToasterConfig = new ToasterConfig({
    animation: 'fade',
    positionClass: 'toast-bottom-left',
    mouseoverTimerStop: true
  });

  title = 'Pizza Delivery';

  ngOnInit(): void {
    localStorage.clear();

  }


}
