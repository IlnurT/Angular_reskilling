import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ItemService {

  baseUrl: string = `https://fakestoreapi.com/products`
  constructor( private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

}
