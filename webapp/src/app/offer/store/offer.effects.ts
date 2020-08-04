import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { AddManyOffers, LOAD } from './offer.actions';
import { KindService } from '../services/kind.service';
import { OfferService } from '../services/offer.service';
import { IOffer } from '../interfaces/offer.interface';
import { IKind } from '../interfaces/kind.interface';
import { AddManyKinds } from './kind.actions';
import { SetLoader } from '../../shared/store/shared.actions';

@Injectable()
export class OfferEffects {
  constructor(
    private actions$: Actions,
    private kindService: KindService,
    private offerService: OfferService,
  ) {
  }

  @Effect()
  $loadOffers: Observable<any> = this.actions$.pipe(
    ofType(LOAD),
    switchMap(() => (
      of(new SetLoader(true))
    )),
    switchMap(() => {
      const offers$ = this.offerService.getOffers().pipe(take(1));
      const kinds$ = this.kindService.getKinds().pipe(take(1));
      return forkJoin([offers$, kinds$])
        .pipe(
          take(1),
          switchMap(([offers, kinds]: [IOffer[], IKind[]]): Observable<any> => (
            of(
            new AddManyOffers(offers),
            new AddManyKinds(kinds),
            new SetLoader(false)
            )
          )),
          catchError((err: any) => {
            return of(new SetLoader(false));
          }),
        )
    }),
  );
}
