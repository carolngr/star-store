import { User } from "@interfaces/entities/user";
import { api } from "../../axiosApi";

export interface ILoginProps {
  email: string;
  password: string;
}

export interface ILoginReponse {
  token: string;
}

export interface IRegisterProps {
  name: string;
  email: string;
  password: string;
}
export interface IUpdateRegisterProps {
  name: string;
  email: string;
}

export interface IRegisterResponse {
  token: string;
}

export const login = (body: ILoginProps) => {
  return api.post<ILoginReponse>("/auth/login", body).then((res) => res.data);
};

export const findCurrentUserData = () => {
  return api.get<User>("/auth/me").then((res) => res.data);
};

export const register = (body: IRegisterProps) => {
  return api
    .post<IRegisterResponse>("/auth/register", body)
    .then((res) => res.data);
};

export const updateRegister = (body: IUpdateRegisterProps) => {
  return api
    .put<IRegisterResponse>("/auth/update-register", body)
    .then((res) => res.data);
};
