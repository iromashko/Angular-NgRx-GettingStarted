import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as AppState from '../../../app/state/app.state';
import { ProductState } from './product.reducer';
export interface State extends AppState.State {
  products: ProductState;
}

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const showProductCodeSelector = createSelector(
  getProductFeatureState,
  (state) => state.showProductCode
);
export const getCurrentProductIdSelector = createSelector(
  getProductFeatureState,
  (state) => state.currentProductId
);
export const productsSelector = createSelector(
  getProductFeatureState,
  (state) => state.products
);

export const getCurrentProductSelector = createSelector(
  getProductFeatureState,
  getCurrentProductIdSelector,
  (state, currentProductId) => {
    if (currentProductId === 0) {
      return {
        id: 0,
        productName: '',
        productCode: 'New',
        description: '',
        starRating: 0,
      };
    } else {
      return currentProductId
        ? state.products.find((p) => p.id === currentProductId)
        : null;
    }
  }
);

export const getErrorSelector = createSelector(
  getProductFeatureState,
  (state) => state.error
);
