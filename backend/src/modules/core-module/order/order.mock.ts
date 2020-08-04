import { MockCrudInterface } from 'src/modules/shared/mockCrud.interface';
import { Injectable } from '@nestjs/common';

export interface IOrderItem {
    id: string,
    quantity: number,
}

export interface IOrder {
    id: string;
    items: IOrderItem[];
    state: string;
    name: string;
    surname: string;
    phone: string;
}

@Injectable()
export class OrderMock implements Partial<MockCrudInterface> {
    private orders: IOrder[] = [];

    public addOne(item: IOrder) {
        this.orders = [...this.orders, item];
    }

    public getById(id: string) {
        return this.orders.find((order) => (order.id === id));
    }

    public update(id: string, item: Partial<IOrder>) {
        const itemIndex = this.orders.findIndex((order) => (order.id === id));
        this.orders[itemIndex] = { ...this.orders[itemIndex], ...item };
    }
    public getAll() {
        return [ ...this.orders ];
    }
}
