import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class CartItemsService {
  updateCartItemQuantity(id: number, updatedQuantity: number, updatedPrice: number) {
    throw new Error('Method not implemented.');
  }
  updateCartProduct(updatedProduct: { quantity: number; price: number; newPrice: number; product: Products; categoryId: number; name: string; id: number; image: string; nuts: boolean; spiciness: number; vegetarian: boolean; }) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }


  
  newCartItems = new Subject<number>();
  cartItems1: Products[] = [];


  cartFoodList(FoodData: { productId: number, quantity: number, price: number }) {
    return this.http.post('https://restaurant.stepprojects.ge/api/Baskets/AddToBasket', FoodData);
  }

  deleteCartItem(productId: number) {
    return this.http.delete(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${productId}`);
  }

  cartItems() {
    return this.http.get<Products[]>('https://restaurant.stepprojects.ge/api/Baskets/GetAll');
  }

  cartProductQuantity( data: {productId: number, price: number, quantity: number} ){
    return this.http.put<number>('https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket', data);
  }
}
