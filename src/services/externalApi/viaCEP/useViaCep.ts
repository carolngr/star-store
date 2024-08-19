import { useMutation } from "@tanstack/react-query";
import { findAddressByCep } from ".";

export const useFindAddressByCEP = () =>
  useMutation({
    mutationKey: ["find_address_by_cep"],
    mutationFn: (cep: string) => findAddressByCep(cep),
  });
