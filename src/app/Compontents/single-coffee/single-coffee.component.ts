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

  // ngOnInit() {
  //   this.route.paramMap.subscribe(params => {
  //     const coffeeId = params.get('coffeeId');
  //     if (coffeeId) {
  //       this.fetchCoffeeDetails(coffeeId);
  //     }
  //   });
  // }

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




  // ngOnInit(): void {
  //   // Get the 'coffeeId' parameter from the route
  //   const coffeeId = this.route.snapshot.paramMap.get('coffeeId');

  //   if (coffeeId) {
  //     this.CoffeeServiceService.getCoffeeById(coffeeId).subscribe(
  //       (data: any) => {
  //         this.coffee = data;
  //       },
  //       (error) => {
  //         console.error('Error fetching coffee by ID:', error);
  //         // Handle the error here (e.g., show an error message to the user)
  //       }
  //     );
  //   } else {
  //     console.error('Invalid coffeeId:', coffeeId);
  //     // Handle the case where coffeeId is not valid
  //   }
  // }
    // // Get the 'coffeeId' parameter from the route
    // const coffeeId = this.route.snapshot.paramMap.get('coffeeId');
 
    // // Fetch the specific coffee by 'coffeeId' from the service
    // this.CoffeeServiceService.getCoffeeById(coffeeId).subscribe((data: any) => {
    //   this.coffee = data;
    // });
   }


