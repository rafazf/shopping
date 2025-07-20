import {Injectable, signal} from '@angular/core';
import { products } from './products.mock'
import {IProduct} from '../../models/product.interface';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  favoritesProducts = signal<IProduct[]>([]);

  getProducts():Observable<IProduct[]> {
    return of(products);
  }
}
