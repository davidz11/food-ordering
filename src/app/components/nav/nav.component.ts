import { Component, OnInit } from '@angular/core';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { CartComponent } from '../cart/cart.component';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  constructor(private CartItemsService: CartItemsService){}
  cartItem: any = [];
  
  cartItemLength = 0;
  
  ngOnInit(): void {
    this.CartItemsService.cartItems().subscribe((response) =>{
  
  this.cartItemLength = response.length;
  
    });

    this.CartItemsService.newCartItems.subscribe((rs) =>{
      this.cartItemLength += rs;
      
    });
}
}
