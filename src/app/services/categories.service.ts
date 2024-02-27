import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../interfaces/category';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  activeId = new BehaviorSubject<number | null>(null);

  productCategories(){
    return this.http.get<Category[]>('https://restaurant.stepprojects.ge/api/Categories/GetAll')
  }
}
