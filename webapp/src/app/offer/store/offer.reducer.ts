import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { IOffer } from '../interfaces/offer.interface';
import { ADD, ADD_MANY, OfferActions, UPDATE } from 'src/app/offer/store/offer.actions';

const defaultState = {
  ids: [],
  entities: []
}

export const offerAdapter = createEntityAdapter<IOffer>(
);

export interface OfferState extends EntityState<IOffer> {
}

export const initialState: OfferState = offerAdapter.getInitialState(defaultState);

export function offerReducer(state: OfferState = initialState, action: OfferActions) {
  console.log('sction in offer reducer', action)
  switch (action.type) {
    case ADD:
      return offerAdapter.addOne(action.offer, state);
    case ADD_MANY:
      return offerAdapter.addMany(action.offers, state);
    case UPDATE:
      return offerAdapter.updateOne({
        id: action.id,
        changes: action.change,
      }, state);
    default:
      return state;
  }
}
