import { Component, OnInit } from '@angular/core';
import { CoffeeServiceService } from 'src/app/Services/coffee-service.service';


@Component({
  selector: 'app-list-coffees',
  templateUrl: './list-coffees.component.html',
  styleUrls: ['./list-coffees.component.css']
})
export class ListCoffeesComponent implements OnInit{

  coffees: any[] = [];
  searchQuery: string = ''; //for bouns serach function

  constructor(private CoffeeServiceService: CoffeeServiceService){}

 
  ngOnInit(): void {
    this.fetchCoffees();
    this.CoffeeServiceService.getAllCoffees().subscribe((data) => {
      console.log(data);
      this.coffees = data;
  });
}

fetchCoffees() {
  this.CoffeeServiceService.getAllCoffees().subscribe((data: any[]) => {
    this.coffees = data;
  });
}

searchCoffees() {
  // Call the API to filter coffees based on the search query
  this.CoffeeServiceService.searchCoffees(this.searchQuery).subscribe((data: any[]) => {
    this.coffees = data;
  });
}

}
