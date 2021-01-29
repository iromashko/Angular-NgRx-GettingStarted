import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Product } from '../product';
import {
  getCurrentProductSelector,
  getErrorSelector,
  productsSelector,
  showProductCodeSelector,
  State,
} from '../state';
import * as ProductActions from '../state/actions/product-page.actions';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './product-shell.component.html',
})
export class ProductShellComponent implements OnInit {
  pageTitle = 'Products';

  products$: Observable<Product[]>;

  // Used to highlight the selected product in the list
  selectedProduct$: Observable<Product>;
  displayCode$: Observable<boolean>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(ProductActions.loadProductsAction());
    this.selectedProduct$ = this.store.select(getCurrentProductSelector);
    this.products$ = this.store.select(productsSelector);
    this.errorMessage$ = this.store.select(getErrorSelector);
    this.displayCode$ = this.store.select(showProductCodeSelector);
  }

  checkChanged(): void {
    this.store.dispatch(ProductActions.toggleProductCode());
  }

  newProduct(): void {
    this.store.dispatch(ProductActions.initializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(
      ProductActions.setCurrentProduct({ currentProductId: product.id })
    );
  }
}
