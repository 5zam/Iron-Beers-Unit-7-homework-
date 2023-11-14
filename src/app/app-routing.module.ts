import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Compontents/home-page/home-page.component';
import { ListCoffeesComponent } from './Compontents/list-coffees/list-coffees.component';
import { SingleCoffeeComponent } from './Compontents/single-coffee/single-coffee.component'
import { RandomCoffeeComponent } from './Compontents/random-coffee/random-coffee.component';
import { NewCoffeeComponent } from './Compontents/new-coffee/new-coffee.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'coffees', component: ListCoffeesComponent },
  { path: 'coffees/:coffeeId', component: SingleCoffeeComponent },
  { path: 'random-coffee', component: RandomCoffeeComponent },
  { path: 'new-coffee', component: NewCoffeeComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
