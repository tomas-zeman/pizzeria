import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrderState } from '../interfaces/order.interface';

export const selectOrderState = createFeatureSelector<OrderState>('order');

export const selectCategorisedOffers = createSelector(
  selectOrderState,
  (order: OrderState) => (order),
);

