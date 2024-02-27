import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import{ CartComponent} from './components/cart/cart.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'app-menu', component: MenuComponent},
  {path: 'app-cart', component: CartComponent},
  {path: 'app-homepage', component: HomepageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
