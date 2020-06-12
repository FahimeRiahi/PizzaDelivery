import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
// Services
import {InMemoryDataService} from './services/in-memory-data-service.service';
// Components
import {AppComponent} from './app.component';
import {HeaderComponent} from './Homepage/header/header.component';
import {JumbotronComponent} from './Homepage/jumbotron/jumbotron.component';
import {RecommendedComponent} from './Homepage/recommended/recommended.component';
import {CardComponent} from './cards/Pizza-list/card.component';
import {HowItWorksComponent} from './Homepage/how-it-works/how-it-works.component';
import {HowItWorksCardComponent} from './cards/how-it-works/card.component';
import {PopularResturantsComponent} from './Homepage/popular-resturants/popular-resturants.component';
import {DownloadAppComponent} from './Homepage/download-app/download-app.component';
import {TestimoniesComponent} from './Homepage/testimonies/testimonies.component';
import {TestimoniesCardComponent} from './cards/testimonies-card/testimonies-card.component';
import {HomeComponent} from './Homepage/home.component';
import {FooterComponent} from './footer/footer.component';
import {BaseComponent} from './base-component/base.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumbotronComponent,
    RecommendedComponent,
    CardComponent,
    HowItWorksComponent,
    HowItWorksCardComponent,
    PopularResturantsComponent,
    DownloadAppComponent,
    TestimoniesComponent,
    TestimoniesCardComponent,
    HomeComponent,
    FooterComponent,
    BaseComponent
  ],
  imports: [BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatListModule,
    MatGridListModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}
    ), MatIconModule, MatMenuModule, MatCardModule, MatToolbarModule, MatBadgeModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
