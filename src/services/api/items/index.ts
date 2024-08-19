import { Item } from "src/interfaces/entities/item";
import { api } from "../../axiosApi";

export const getItems = () => {
  return api.get<Item[]>("/items").then((res) => res.data);
};
