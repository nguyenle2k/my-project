import { createReducer, on } from '@ngrx/store';
import { loadItemsSuccess, loadItemsFailure } from './items.actions';

export const initialState: any[] = [];

export const itemsReducer = createReducer(
  initialState,
  on(loadItemsSuccess, (state, { items }) => [...items]),
  on(loadItemsFailure, (state) => state)
);
