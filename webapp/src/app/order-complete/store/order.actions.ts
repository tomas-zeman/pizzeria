import { Action } from '@ngrx/store';
import { OrderState } from 'src/app/order-complete/interfaces/order.interface';

export const LOAD_ORDER = '[order] load';
export const LOAD_ORDER_SUCCESS = '[order] load success';
export const LOAD_ORDER_ERROR = '[order] load error';

export class LoadOrder implements Action {
  readonly type = LOAD_ORDER;
  constructor(
    public id: string,
  ) {
  }
}

export class LoadOrderSuccess implements Action {
  readonly type = LOAD_ORDER_SUCCESS;
  constructor(
    public payload: OrderState,
  ) {
  }
}

export class LoadOrderError implements Action {
  readonly type = LOAD_ORDER_ERROR;
  constructor(
  ) {
  }
}

export type OrderActions = LoadOrder | LoadOrderSuccess | LoadOrderError;
