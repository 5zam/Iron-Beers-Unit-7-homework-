import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoffeeServiceService } from 'src/app/Services/coffee-service.service';

@Component({
  selector: 'app-single-coffee',
  templateUrl: './single-coffee.component.html',
  styleUrls: ['./single-coffee.component.css']
})
export class SingleCoffeeComponent implements OnInit{


  coffee: any = {};
  constructor(private route: ActivatedRoute, private CoffeeServiceService: CoffeeServiceService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const coffeeId = params.get('coffeeId');
      if (coffeeId) {
        this.fetchCoffeeDetails(coffeeId);
      }
    });
  }

  fetchCoffeeDetails(coffeeId: string) {
  if (!coffeeId) {
    console.error('Coffee ID is undefined.');
    return;
  }

  this.CoffeeServiceService.getCoffeeById(coffeeId).subscribe(
    (data: any) => {
      this.coffee = data;
    },
    (error) => {
      console.error('Error fetching coffee details:', error);
    }
  );
}
   }


