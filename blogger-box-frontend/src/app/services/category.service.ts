import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Category } from '../data/category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get<Category[]>(`${environment.apiUrl}v1/categories`);
  }
}
