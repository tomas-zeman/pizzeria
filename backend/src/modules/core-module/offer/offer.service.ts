import { Injectable } from '@nestjs/common';
import { IOffer, KindMock, OfferMock } from './offer.mock';
import { PostItemDto, RemoveItemDto } from './offer.dto';

@Injectable()
export class OfferService {
  constructor(
      private offerMock: OfferMock,
      private kindMock: KindMock,
  ) {}

  public getOffer(): IOffer[] {
    return this.offerMock.getAll();
  }

  public postItem(payload: PostItemDto) {
    this.offerMock.addOne(payload);
    return payload;
  }

  public deleteItem({ id }: RemoveItemDto) {
    this.offerMock.delete(id);
    return id;
  }

  public async getAllKinds() {
    return this.kindMock.getAll();
  }
}
