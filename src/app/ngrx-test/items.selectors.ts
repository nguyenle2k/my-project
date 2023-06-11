import { createSelector } from '@ngrx/store';
interface AppState {
  items: any[];
}

export const selectItems = createSelector(
  (state: AppState) => state.items,
  (items) => items
);
