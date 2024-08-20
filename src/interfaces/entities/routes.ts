import { Item } from "./item";
import { Order } from "./order";

export type AuthRoutes = {
  signIn: undefined;
  signUp: undefined;
  profile: undefined;
  profileOrderHistory: undefined;
  editProfile: undefined;
  orderCompleted: {
    order: Order;
  };
};

export type AppRoutes = AuthRoutes & {
  home: undefined;
  cartshopping: undefined;
  auth: undefined;
  detailsitem: {
    item: Item;
  };
  payment: undefined;
  order: undefined;
};
