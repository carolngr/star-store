export type Product = {
  id: number;
  title: string;
  price: number;
  zipcode: string;
  seller: string;
  thumbnailHd: string;
  date: string;
  amount: number;
};

export type State = {
  selectedProducts: Product[];
  count: number;
};

export type Actions = {
  increment: (product: Product) => void;
  decrement: (product: Product) => void;
  appendProduct: (product: Product) => void;
  removeProductCart: (product: Product) => void;
  clearCart: () => void;
  calcPayment: () => {
    subTotalValue: number;
    freteValue: number;
    totalValue: number;
  };
};
