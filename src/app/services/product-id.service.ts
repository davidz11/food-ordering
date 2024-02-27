import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductIdService {

  constructor(private http: HttpClient) { }

  getProducts(id: number){
    return this.http.get<{ id: number; name: string; products: Products[]}>(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`)
  }

  filterChecker(data: {vegetarian: boolean, nuts: boolean, spiciness: number, categoryId: number}){
    console.log(data);
    
   return this.http.get<Products[]>(`https://restaurant.stepprojects.ge/api/Products/GetFiltered?vegeterian=${data.vegetarian}&nuts=${data.nuts}&spiciness=${data.spiciness}&categoryId=${data.categoryId}`)
  }


}
