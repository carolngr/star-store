import { Item } from "src/interfaces/entities/item";
import { api } from "../../axiosApi";

export interface ILoginProps {
  email: string;
  password: string;
}

export interface ILoginReponse {
  token: string;
}

export const login = (body: ILoginProps) => {
  return api.post<ILoginReponse>("/auth/login", body).then((res) => res.data);
};
