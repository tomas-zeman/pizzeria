import { Injectable } from '@nestjs/common';
import { PlaceOrderDto, UpdateOrderDto } from 'src/modules/core-module/order/order.dto';
import { IOrder, OrderMock } from 'src/modules/core-module/order/order.mock';

@Injectable()
export class OrderService {
    constructor(
        private orderMock: OrderMock,
    ) {}
    public getOrder(id: string): IOrder {
        return this.orderMock.getById(id);
    }

    public placeOrder(payload: PlaceOrderDto) {
        this.orderMock.addOne(payload);
        return payload;
    }

    public updateOrder(payload: UpdateOrderDto) {
        const payload_ = payload;
        const { id, ...rest } = payload_;
        this.orderMock.update(id, payload_);
        return payload;
    }

    public listOrders() {
        return this.orderMock.getAll();
    }
}
