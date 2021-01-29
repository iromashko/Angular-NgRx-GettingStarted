import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Product } from '../product';
import { ProductService } from '../product.service';
import {
  currentProductSelector,
  productsSelector,
  showProductCodeSelector,
  State,
} from '../state/product.reducer';
import * as ProductActions from '../../products/state/product.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode: boolean;

  products$: Observable<Product[]>;

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;

  constructor(
    private productService: ProductService,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    //TODO: Unsubscribe
    this.store
      .select(currentProductSelector)
      .subscribe((currentProduct) => (this.selectedProduct = currentProduct));

    this.products$ = this.store.select(productsSelector);

    this.store.dispatch(ProductActions.loadProductsAction());

    //TODO: Unsubscribe
    this.store
      .select(showProductCodeSelector)
      .subscribe((showProductCode) => (this.displayCode = showProductCode));
  }

  checkChanged(): void {
    this.store.dispatch(ProductActions.toggleProductCode());
  }

  newProduct(): void {
    this.store.dispatch(ProductActions.initializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(ProductActions.setCurrentProduct({ product }));
  }
}
