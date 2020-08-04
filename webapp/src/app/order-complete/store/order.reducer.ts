import { OrderState } from '../interfaces/order.interface';
import {
  LOAD_ORDER,
  LOAD_ORDER_ERROR,
  LOAD_ORDER_SUCCESS,
  OrderActions
} from './order.actions';

const initialState: OrderState = {
  loading: false,
  error: false,
  id: '',
  state: '',
}

export function orderReducer(state: OrderState = initialState, action: OrderActions) {
  switch (action.type) {
    case LOAD_ORDER:
      return { ...state, loading: true };
    case LOAD_ORDER_SUCCESS:
      return { ...action.payload };
    case LOAD_ORDER_ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
}
