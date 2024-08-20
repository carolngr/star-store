import { useMutation, useQuery } from "@tanstack/react-query";
import { ICreateOrderProps, createOrder, findAllOrders } from ".";

export const useCreateOrder = () =>
  useMutation({
    mutationKey: ["create-order"],
    mutationFn: (body: ICreateOrderProps) => createOrder(body),
  });

export const useFindAllOrders = () =>
  useQuery({
    queryKey: ["find-all-register-login"],
    queryFn: () => findAllOrders(),
  });
