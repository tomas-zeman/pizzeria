export interface ICartItem {
  id: string;
  quantity: number;
}

export interface ICartWithPriceItem extends ICartItem {
  price: number;
  name: string;
}
