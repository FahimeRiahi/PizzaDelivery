import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Homepage/home.component';
import {MyOrderListComponent} from './my-order-list/my-order-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'my-orders', component: MyOrderListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
