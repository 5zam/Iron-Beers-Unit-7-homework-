import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule , FormsModule } from '@angular/forms';
import { HomePageComponent } from './Compontents/home-page/home-page.component';
import { ListCoffeesComponent } from './Compontents/list-coffees/list-coffees.component';
import { HeaderHomeComponent } from './Compontents/header-home/header-home.component';
import { CoffeeServiceService } from './Services/coffee-service.service';
import {SingleCoffeeComponent} from './Compontents/single-coffee/single-coffee.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListCoffeesComponent,
    HeaderHomeComponent,
    SingleCoffeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [CoffeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
