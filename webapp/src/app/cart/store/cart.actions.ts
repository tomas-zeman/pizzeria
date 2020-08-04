import { Action } from '@ngrx/store';
import { ICartItem } from '../interfaces/cart.interface';

export const ADD = '[cart] add';
export const UPDATE = '[cart] update';
export const REMOVE = '[cart] remove';
export const DELETE = '[cart] delete';
export const DELETE_ALL = '[cart] delete all';

export class AddToCart implements Action {
  readonly type = ADD;
  constructor(
    public cartItem: ICartItem,
  ) {}
}

export class UpdateInCart implements Action {
  readonly type = UPDATE;
  constructor(
    public id: string,
    public change: Partial<ICartItem>,
  ) {}
}

export class RemoveInCart implements Action {
  readonly type = REMOVE;
  constructor(
    public cartItem: ICartItem,
  ) {}
}

export class DeleteInCart implements Action {
  readonly type = DELETE;
  constructor(
    public id: string,
  ) {}
}

export class DeleteAllInCart implements Action {
  readonly type = DELETE_ALL;
  constructor(
  ) {}
}

export type CartAction = AddToCart | UpdateInCart | RemoveInCart | DeleteInCart | DeleteAllInCart;
