import { Component, OnInit } from '@angular/core';
import { CoffeeServiceService } from 'src/app/Services/coffee-service.service';


@Component({
  selector: 'app-random-coffee',
  templateUrl: './random-coffee.component.html',
  styleUrls: ['./random-coffee.component.css']
})
export class RandomCoffeeComponent implements OnInit{


  randomCoffee: any = {};

  constructor(private CoffeeServiceService: CoffeeServiceService) {}

  ngOnInit(): void {
    // Fetch a random coffee from the service
    this.CoffeeServiceService.getRandomCoffee().subscribe((data: any) => {
      this.randomCoffee = data;
    });
  }

}
