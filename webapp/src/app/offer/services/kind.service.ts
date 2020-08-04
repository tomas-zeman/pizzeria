import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class KindService {
  constructor(private http: HttpClient) {
  }

  public getKinds() {
    return this.http.get('/api/offer/kinds');
  }
}
