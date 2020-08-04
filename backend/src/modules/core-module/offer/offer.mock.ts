import { MockCrudInterface } from 'src/modules/shared/mockCrud.interface';
import { Injectable } from '@nestjs/common';

export interface IOffer {
    id: string;
    kindId: string;
    name: string;
    price: number;
    description: string;
}

export interface IKind {
    id: string,
    kind: string,
}

@Injectable()
export class OfferMock implements Partial<MockCrudInterface> {
    private offers: IOffer[] = [
        {
            id: 'f90fb66c-3308-467d-b40f-a062d72ed337',
            kindId: 'k1',
            price: 19,
            description: 'pizza Hawaii',
            name: 'Pizza Hawaii'
        },
        {
            id: 'f90fb66c-3308-467d-b40f-a062d72ed338',
            kindId: 'k1',
            price: 19,
            description: 'pizza Polo',
            name: 'Pizza Hawaii'
        },        {
            id: 'f90fb66c-3308-467d-b40f-a062d72ed339',
            kindId: 'k1',
            price: 19,
            description: 'Cappriciiosa',
            name: 'Cappriciosa'
        },
        {
            id: 'f90fb66c-3308-467d-b40f-a062d72ed310',
            kindId: 'k1',
            price: 19,
            description: 'Diavola',
            name: 'Diavola',
        },

        {
            id: 'f90fb66c-3308-467d-b40f-a062d72ed311',
            kindId: 'k2',
            price: 19,
            description: 'Vegetariana',
            name: 'Vegetariana'
        },
        {
            id: 'f90fb66c-3308-467d-b40f-a062d72ed312',
            kindId: 'k2',
            price: 19,
            description: 'Tono',
            name: 'Tono'
        },
        {
            id: 'f90fb66c-3308-467d-b40f-a062d72ed313',
            kindId: 'k2',
            price: 19,
            description: 'Quatro formagi',
            name: 'Quatro formagi'
        },
        {
            id: 'f90fb66c-3308-467d-b40f-a062d72ed314',
            kindId: 'k2',
            price: 19,
            description: 'Quatro Staggioni',
            name: 'Quatro Staggioni',
        },

        {
            id: 'f90fb66c-3308-467d-b40f-a062d72ed315',
            kindId: 'k3',
            price: 19,
            description: 'Parma',
            name: 'Parma'
        },
        {
            id: 'f90fb66c-3308-467d-b40f-a062d72ed316',
            kindId: 'k3',
            price: 19,
            description: 'Piccante',
            name: 'Piccante',
        },

    ];

    public addOne(item: IOffer) {
        this.offers = [...this.offers, item];
    }

    public getAll() {
        return [ ...this.offers ];
    }

    public delete(id: string) {
        this.offers = this.offers.filter((order) => (order.id !== id))
    }
}

@Injectable()
export class KindMock {
    private kinds: IKind[] = [
        {
            id: 'k1',
            kind: 'pizza Napoletana',
        },
        {
            id: 'k2',
            kind: 'New York style pizza',
        },
        {
            id: 'k3',
            kind: 'Stuffed crust pizza',
        },
    ];

    public getAll() {
        return [ ...this.kinds ];
    }
}
