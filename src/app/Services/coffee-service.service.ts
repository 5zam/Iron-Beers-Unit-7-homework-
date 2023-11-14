import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeServiceService {


  private apiUrl = 'https://ih-coffees-api-42e1df06199a.herokuapp.com/coffees';

  constructor(private http: HttpClient) {}

  
  // Fetch all coffees
  getAllCoffees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Fetch a single coffee by ID
  getCoffeeById(coffeeId: string): Observable<any> {
    const coffeeUrl = `${this.apiUrl}/${coffeeId}`;
    return this.http.get<any>(coffeeUrl);
  }

  // Fetch a random coffee
  getRandomCoffee(): Observable<any> {
    const randomCoffeeUrl = `${this.apiUrl}/random`;
    return this.http.get<any>(randomCoffeeUrl);
  }
  
  // Create a new coffee
//  createCoffee(newCoffee: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl, newCoffee);
  
//  }
 createNewCoffee(data: any): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/new`, data);
}
  // Search for coffees based on a query string
  searchCoffees(query: string): Observable<any[]> {
    const searchUrl = `${this.apiUrl}/search?q=${query}`;
    return this.http.get<any[]>(searchUrl);
  }
}
