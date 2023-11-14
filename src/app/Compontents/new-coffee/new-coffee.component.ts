import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoffeeServiceService } from 'src/app/Services/coffee-service.service';

@Component({
  selector: 'app-new-coffee',
  templateUrl: './new-coffee.component.html',
  styleUrls: ['./new-coffee.component.css']
})
export class NewCoffeeComponent implements OnInit{
 
  coffeeForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private CoffeeServiceService: CoffeeServiceService) {
    this.coffeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      tagline: ['', Validators.required],
      description: ['', Validators.required],
      first_roasted: ['', Validators.required],
      roaster_tips: ['', Validators.required],
      strength_level: [1, Validators.required], // Default to 1, as it's a number
      contributed_by: ['', Validators.required],
    });
  }
  ngOnInit(): void {
  }
  onSubmit() {
    if (this.coffeeForm.valid) {
      const formData = this.coffeeForm.value;
      this.CoffeeServiceService.createNewCoffee(formData).subscribe(
        response => {
          console.log('New coffee created successfully!', response);
        },
        error => {
          console.error('Error creating new coffee', error);
        }
      );
    }
  }
  
}
