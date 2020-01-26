import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class GroceryListService {

  constructor(private httpClient: HttpService) { }

  getGroceryList(user) {
    return this.httpClient.get(`/GroceryList/${user}`);
  }
}
