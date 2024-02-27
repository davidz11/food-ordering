import { Component, OnInit } from '@angular/core';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { Products } from 'src/app/interfaces/products';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private Cart: CartItemsService,) {}

  productData: Products[] = [];
  newCartPrice: number = 0;
  cartTotalPrice: number = 0;

  ngOnInit(): void {
    this.Cart.cartItems().subscribe((rs) => {
      this.productData = rs;
      this.calculateCartTotalPrice();
    });
  
  }

  addQuantity(cardInfo: Products) {
    const cardPrice: number = cardInfo.price;
    const cardQuantity: number = cardInfo.quantity;

  
    cardInfo.quantity++;
   
    this.calculateCartTotalPrice();
  }

  minusQuantity(cardInfo: Products) {
    const cardPrice: number = cardInfo.price;
    const cardQuantity: number = cardInfo.quantity;

    if (cardInfo.quantity > 1) {
  
      
    cardInfo.quantity--;
    this.calculateCartTotalPrice();
  }


  }

  deleteButton(cardInfoId: number) {
    this.Cart.deleteCartItem(cardInfoId).subscribe(() => {
      this.productData = this.productData.filter(product => product.product.id !== cardInfoId);
      
      this.calculateCartTotalPrice();
      this.Cart.newCartItems.next(-1);

    });
  }

  calculateCartTotalPrice(){
    this.cartTotalPrice = this.productData.reduce((total, product)=>{
      return total + (product.price * product.quantity)
    }, 0)
  }


  orderAlert(): void{
    Swal.fire("you have successfully placed order");
  
  }
}
