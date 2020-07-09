import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTreeModule} from '@angular/material/tree';
import {MatDialogModule} from '@angular/material/dialog';


// Services
import {InMemoryDataService} from './services/in-memory-data-service.service';
// Components
import {AppComponent} from './app.component';
import {HeaderComponent} from './Homepage/header/header.component';
import {JumbotronComponent} from './Homepage/jumbotron/jumbotron.component';
import {RecommendedComponent} from './Homepage/recommended/recommended.component';
import {HomeComponent} from './Homepage/home.component';
import {FooterComponent} from './footer/footer.component';
import {BaseComponent, DialogDataComponent} from './base-component/base.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MyOrderListComponent} from './my-order-list/my-order-list.component';
import {MatTableModule} from '@angular/material/table';
import {ToasterModule, ToasterService} from 'angular2-toaster';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumbotronComponent,
    RecommendedComponent,
    HomeComponent,
    FooterComponent,
    BaseComponent,
    MyOrderListComponent,
    DialogDataComponent
  ],
  imports: [BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatListModule,
    MatGridListModule,
    MatTreeModule,
    MatDialogModule,
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    ToasterModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatBadgeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule],
  providers: [ToasterService],
  bootstrap: [AppComponent],
  entryComponents: [DialogDataComponent],

})
export class AppModule {
}
