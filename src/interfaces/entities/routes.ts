import { Item } from "./item";

export type AuthRoutes = {
  signIn: undefined;
  signUp: undefined;
};

export type AppRoutes = {
  home: undefined;
  cartshopping: undefined;
  signIn: undefined;
  signUp: undefined;
  detailsitem: {
    item: Item;
  };
  payment: undefined;
  order: undefined;
  profileorderhistory: undefined;
  orderview: undefined;
};
