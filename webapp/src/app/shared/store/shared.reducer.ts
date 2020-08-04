import { SharedActions, SET_LOADER } from './shared.actions';
import { SharedState } from '../interfaces/shared-state.interface';

const initialState: SharedState = {
  loading: false,
}

export function sharedStateReducer(state: SharedState = initialState, action: SharedActions) {
  switch (action.type) {
    case SET_LOADER:
      const updatedState = { ...state };
      updatedState.loading = action.state;
      return updatedState;
    default:
      return state;
  }
}
