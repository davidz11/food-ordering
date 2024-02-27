import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service'
import { Category } from 'src/app/interfaces/category';
import { NgForm } from '@angular/forms';
import { ProductIdService } from 'src/app/services/product-id.service';
import { CartItemsService } from 'src/app/services/cart-items.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

constructor(public menuService: CategoriesService, private ProduceService: ProductIdService, private CartItemsService: CartItemsService){

}


menuData: Category[] = [];



clickHandler(id: number){
  this.menuService.activeId.next(id);
}

ngOnInit(): void {
  this.menuService.productCategories().subscribe((mn) =>{
    this.menuData = mn;
    this.menuService.activeId.next(mn[0].id);
   
    
    
  } )



}

filterCkeck(formValue: NgForm){

}

}


