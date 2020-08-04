import { Action } from '@ngrx/store';

export const SET_LOADER = '[shared] set loader'

export class SetLoader implements Action {
  readonly type = SET_LOADER;
  constructor(
    public state: boolean,
  ) {
  }
}

export type SharedActions = SetLoader;
