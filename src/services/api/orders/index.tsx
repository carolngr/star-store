import { Order } from "@interfaces/entities/order";
import { api } from "../../axiosApi";
interface Address {
  city: string;
  country: string;
  postal_code: string;
  state: string;
  street: string;
}

interface Card {
  cvv: string;
  main_card: boolean;
  number: string;
  title: string;
  valid_date: string;
}

interface Item {
  item_id: string;
  quantity: number;
  price: number;
}

export interface ICreateOrderProps {
  status: "pending" | "completed" | "cancelled";
  shipping_value: number;
  address: Address;
  card: Card;
  items: Item[];
}

export const createOrder = (body: ICreateOrderProps) => {
  return api.post<Order>("/orders", body).then((res) => res.data);
};

export const findAllOrders = () => {
  return api.get<Order[]>("/orders").then((res) => res.data);
};
