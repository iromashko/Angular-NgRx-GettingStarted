import { createAction, createReducer, on } from '@ngrx/store';

export const userReducer = createReducer(
  {
    maskUserName: false,
  },
  on(createAction('[User] Toggle Mask User Name'), (state) => {
    console.log(!state.maskUserName);
    return {
      ...state,
      maskUserName: !state.maskUserName,
    };
  })
);
