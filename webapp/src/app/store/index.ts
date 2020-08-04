import { ActionReducerMap } from '@ngrx/store';
import { offerReducer, OfferState } from '../offer/store/offer.reducer';
import { kindReducer, KindState } from '../offer/store/kind.reducer';
import { cartReducer, CartState } from '../cart/store/cart.reducer';
import { SharedState } from '../shared/interfaces/shared-state.interface';
import { sharedStateReducer } from '../shared/store/shared.reducer';
import { orderReducer } from 'src/app/order-complete/store/order.reducer';
import { OrderState } from 'src/app/order-complete/interfaces/order.interface';

interface AppState {
  offer: OfferState;
  kind: KindState;
  cart: CartState;
  shared: SharedState;
  order: OrderState;
}

export const reducers: ActionReducerMap<AppState> = {
  offer: offerReducer,
  kind: kindReducer,
  cart: cartReducer,
  shared: sharedStateReducer,
  order: orderReducer,
};
