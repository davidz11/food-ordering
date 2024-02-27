import { Component, OnInit } from '@angular/core';
import{CategoriesService} from '..//..//services//categories.service'
import { ProductIdService } from 'src/app/services/product-id.service';
import { Products } from 'src/app/interfaces/products';
import{CartItemsService} from 'src/app/services/cart-items.service'
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit{
constructor(public CategoriesService: CategoriesService, private ProduceService: ProductIdService, private CartItemsService: CartItemsService){

}

productList: Products[] = []
cartQuantityData: Products[] = [];

ngOnInit(): void {
  this.CategoriesService.activeId.subscribe((id) => {

    if(id){

      this.ProduceService.getProducts(id as number).subscribe((rs) => {
        this.productList = rs.products;
        
        
      });
    }

  });
 
}

cartData(id: number, price: number){


  const existingProduct = this.CartItemsService.cartItems1.find(
    (item: Products) => item.product.id === id
  );




if(existingProduct){
this.CartItemsService.cartProductQuantity( {
  productId: id,
  price: existingProduct.price,
quantity: existingProduct.quantity + 1

}).subscribe((rs) =>{
  existingProduct.quantity += 1;
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "vfd",
    showConfirmButton: false,
    timer: 1500
  });

})


}else{
  const data ={
    productId: id,
    quantity:1,
    price,
    
    }
  this.CartItemsService.cartFoodList(data)?.subscribe((rs) =>{
    this.CartItemsService.newCartItems.next(1);
    this.CartItemsService.cartItems().subscribe((re) =>{
   
     this.CartItemsService.cartItems1 = re;
   })
   
   
   
     Swal.fire({
       position: "top-end",
       icon: "success",
       title: "Your work has been saved",
       showConfirmButton: false,
       timer: 1500
     });
     

     
   })
     

   
}










  

}


filter(formValue: NgForm){

  
  
  if(this.CategoriesService.activeId.value){
    this.ProduceService.filterChecker({
      vegetarian: formValue.value.vegetarian,
      nuts: formValue.value.nuts,
      spiciness: formValue.value.spiciness,
     
      categoryId: this.CategoriesService.activeId.value,
    }).subscribe((response) =>{
      this.productList = response;
      
    })
  }
  

  }


}
