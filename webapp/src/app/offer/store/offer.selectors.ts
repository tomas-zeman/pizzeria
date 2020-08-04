import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OfferState } from './offer.reducer';
import { KindState } from './kind.reducer';
import { IOffer } from '../interfaces/offer.interface';
import { IKind } from '../interfaces/kind.interface';
import { offerAdapter } from './offer.reducer';
import { kindAdapter } from './kind.reducer';

export const selectOfferState = createFeatureSelector<OfferState>('offer');
export const selectKindState = createFeatureSelector<KindState>('kind');

export const selectCategorisedOffers = createSelector(
  selectOfferState,
  selectKindState,
  (offers: OfferState, kinds: KindState) => {
    if (
      offers && offers.ids && offers.ids.length > 0 &&
      kinds && kinds.ids && kinds.ids.length > 0
    ) {
      return Object.values(kinds.entities)
        .reduce(
          (prev: any[], cur: IKind) =>
            ( [ ...prev, { ...cur, items: Object.values(offers.entities).filter((offer: IOffer) => (offer.kindId === cur.id))  } ] ),
          []
        );
    }

    return [];
  }
);

export const selectOffers = createSelector(
  selectOfferState,
  (offers: OfferState) => {
    return offers.entities;
  }
)

