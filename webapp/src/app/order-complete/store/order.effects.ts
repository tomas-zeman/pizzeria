import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';


import { SetLoader } from '../../shared/store/shared.actions';
import { OrderService } from '../services/order.service';
import { LOAD_ORDER, LoadOrderError, LoadOrderSuccess } from './order.actions';

@Injectable()
export class OrderEffects {
  constructor(
    private actions$: Actions,
    private readonly orderService: OrderService,
  ) {
  }

  @Effect()
  $loadOrder: Observable<any> = this.actions$.pipe(
    ofType(LOAD_ORDER),
    switchMap(({ id }) => {
      return this.orderService.getOrder(id).pipe(
        map((data: {id: string; state: string}) => new LoadOrderSuccess({ ...data, loading: false, error: false })),
        catchError(error =>
          of(new LoadOrderError())
        )
      );
    }),
  );
}
