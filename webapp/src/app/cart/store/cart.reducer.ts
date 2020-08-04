import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ICartItem } from '../interfaces/cart.interface';
import { ADD, CartAction, DELETE, DELETE_ALL, REMOVE, UPDATE } from './cart.actions';

export const cartAdapter = createEntityAdapter<ICartItem>(
);

export interface CartState extends EntityState<ICartItem> {
}

const defaultState = {
  ids: [],
  entities: {},
};

export const initialState: CartState = cartAdapter.getInitialState(defaultState);

export function cartReducer(state: CartState = initialState, action: CartAction) {
  console.log('ACTION IN CART', state, action)

  switch (action.type) {
    case ADD:
      const addPayload = { ...action.cartItem };
      if ([ ...state.ids ].includes(action.cartItem.id)) {
        let originalQuantity = state.entities[action.cartItem.id].quantity;
        addPayload.quantity = ++originalQuantity;
        console.log('xxx', addPayload);
      }

      return cartAdapter.upsertOne(addPayload, state);

    case REMOVE:
      const removePayload = { ...action.cartItem };
      let originalQuantity = state.entities[action.cartItem.id].quantity;

      if (originalQuantity === 1) {
        return cartAdapter.removeOne(removePayload.id, state);
      }

      removePayload.quantity = --originalQuantity;
      return cartAdapter.upsertOne(removePayload, state);

    case UPDATE:
      return cartAdapter.updateOne({
        id: action.change.id,
        changes: action.change,
      }, state);

    case DELETE:
      return cartAdapter.removeOne(action.id, state);

    case DELETE_ALL:
      return cartAdapter.removeAll(state);

    default:
      return state;
  }
}
