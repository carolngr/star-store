import { CredCart } from "@interfaces/entities/credCart";
import { api } from "../../axiosApi";

export type ICardResponse = {
  id: string;
  title: string;
  number: string;
  cvv: number;
  main_card: boolean;
  valid_date: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
};

export const createCart = (body: CredCart) => {
  return api.post<ICardResponse>("/cards", body).then((res) => res.data);
};

export const getCarts = () => {
  return api.get<ICardResponse[]>("/cards").then((res) => res.data);
};
