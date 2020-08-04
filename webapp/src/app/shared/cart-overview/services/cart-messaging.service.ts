import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ICartOverviewState } from '../../../shared/cart-overview/interfaces/cart-overwiev.interface';

@Injectable()
export class CartMessagingService {
  private subject = new Subject<ICartOverviewState>();

  sendMessage(message: ICartOverviewState) {
    this.subject.next(message);
  }

  getMessage(): Observable<ICartOverviewState> {
    return this.subject.asObservable();
  }
}
