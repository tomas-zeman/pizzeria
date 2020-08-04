import { Action } from '@ngrx/store';
import { IKind } from '../interfaces/kind.interface';

export const ADD_MANY = '[kind] add many'

export class AddManyKinds implements Action {
  readonly type = ADD_MANY;
  constructor(
    public kinds: IKind[],
  ) {
  }
}

export type KindActions = AddManyKinds;
