import { Item } from "@interfaces/entities/item";
import { IViaCEP } from "@interfaces/entities/viaCep";

export type Product = Item & {
  amount: number;
};

export type State = {
  selectedProducts: Product[];
  address?: IViaCEP;
  count: number;
};

export type Actions = {
  increment: (product: Product) => void;
  decrement: (product: Product) => void;
  appendProduct: (product: Product) => boolean;
  appendAddress: (address: IViaCEP) => void;
  removeProductCart: (product: Product) => void;
  clearCart: () => void;
  calcPayment: () => {
    subTotalValue: number;
    freteValue: number;
    totalValue: number;
  };
};
