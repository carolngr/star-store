import { IViaCEP } from "@interfaces/entities/viaCep";
import axios from "axios";

export const findAddressByCep = (cep: string) => {
  return axios
    .get<IViaCEP>(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.data);
};
