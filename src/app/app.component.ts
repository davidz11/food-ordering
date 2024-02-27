import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'food-ordering';
  constructor(private router: Router) {}

  menuPage(pageName: string) {
    this.router.navigate(['app-menu']);
  }
}
