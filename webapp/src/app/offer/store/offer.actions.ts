import { Action } from '@ngrx/store';
import { IOffer } from '../interfaces/offer.interface';

export const LOAD = '[offer] load'
export const ADD = '[offer] add'
export const UPDATE = '[offer] update'
export const ADD_MANY = '[offer] add many'

export class LoadOffers implements Action {
  readonly type = LOAD;
  constructor() {
  }
}

export class AddOffer implements Action {
  readonly type = ADD;
  constructor(
    public offer: IOffer,
  ) {}
}

export class AddManyOffers implements Action {
  readonly type = ADD_MANY;
  constructor(
    public offers: IOffer[],
  ) {
  }
}

export class UpdateOffers implements Action {
  readonly type = UPDATE;
  constructor(
    public id: string,
    public change: Partial<IOffer>,
  ) {}
}

export type OfferActions = LoadOffers | AddOffer | AddManyOffers | UpdateOffers;
