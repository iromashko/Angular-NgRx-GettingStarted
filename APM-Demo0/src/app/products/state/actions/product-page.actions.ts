import { createAction, props } from '@ngrx/store';
import { Product } from '../../product';

export const toggleProductCode = createAction('[Product Page] Toggle Product Code');

export const setCurrentProduct = createAction(
  '[Product Page] Set Current Product',
  props<{ currentProductId: number }>()
);

export const clearCurrentProduct = createAction(
  '[Product Page] Clear Current Product'
);

export const initializeCurrentProduct = createAction(
  '[Product Page] Initialize Current Product'
);

export const loadProductsAction = createAction('[Product Page] Load Product');

export const updateProductAction = createAction(
  '[Product Page] Update Product',
  props<{ product: Product }>()
);
