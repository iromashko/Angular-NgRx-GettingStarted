import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { ProductService } from '../product.service';
import { ProductPageActions, ProductAPIActions } from './actions';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductPageActions.loadProductsAction),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((products) =>
            ProductAPIActions.loadProductsSuccessAction({ products })
          ),
          catchError((error) =>
            of(ProductAPIActions.loadProductsFailureAction({ error }))
          )
        )
      )
    );
  });

  updateProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductPageActions.updateProductAction),
      concatMap((action) =>
        this.productService.updateProduct(action.product).pipe(
          map((product) =>
            ProductAPIActions.updateProductSuccessAction({ product })
          ),
          catchError((error) =>
            of(ProductAPIActions.updateProductFailureAction({ error }))
          )
        )
      )
    );
  });
}
