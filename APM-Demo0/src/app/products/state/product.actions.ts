import { createAction, props } from '@ngrx/store';
import { Product } from '../product';

export const toggleProductCode = createAction('[Product] Toggle Product Code');

export const setCurrentProduct = createAction(
  '[Product] Set Current Product',
  props<{ currentProductId: number }>()
);

export const clearCurrentProduct = createAction(
  '[Product] Clear Current Product'
);

export const initializeCurrentProduct = createAction(
  '[Product] Initialize Current Product'
);

export const loadProductsAction = createAction('[Product] Load Product');

export const loadProductsSuccessAction = createAction(
  '[Product] Load Product Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailureAction = createAction(
  '[Product] Load Product Failure',
  props<{ error: string }>()
);

export const updateProductAction = createAction(
  '[Product] Update Product',
  props<{ product: Product }>()
);

export const updateProductSuccessAction = createAction(
  '[Product] Update Product Success',
  props<{ product: Product }>()
);

export const updateProductFailureAction = createAction(
  '[Product] Update Product Fail',
  props<{ error: string }>()
);
