import { createAction, props } from '@ngrx/store';
import { Product } from '../../product';

export const loadProductsSuccessAction = createAction(
  '[Product API] Load Product Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailureAction = createAction(
  '[Product API] Load Product Failure',
  props<{ error: string }>()
);

export const updateProductSuccessAction = createAction(
  '[Product API] Update Product Success',
  props<{ product: Product }>()
);

export const updateProductFailureAction = createAction(
  '[Product API] Update Product Fail',
  props<{ error: string }>()
);
