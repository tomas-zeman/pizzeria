import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ADD_MANY, KindActions } from '../store/kind.actions';
import { IKind } from '../interfaces/kind.interface';
import { offerAdapter, OfferState } from 'src/app/offer/store/offer.reducer';

const defaultState = {
  ids: [],
  entities: [],
}

export const kindAdapter = createEntityAdapter<IKind>(
);

export interface KindState extends EntityState<IKind> {
}

export const initialState: KindState = kindAdapter.getInitialState(defaultState);


export function kindReducer(state: KindState = initialState, action: KindActions) {
  console.log('sction in kind reducer', action)
  switch (action.type) {
    case ADD_MANY:
      return kindAdapter.addMany(action.kinds, state);
    default:
      return state;
  }
}
