import { useQuery } from "@tanstack/react-query";
import { getCarts } from ".";

export const useCarts = () =>
  useQuery({
    queryKey: ["list-carts"],
    queryFn: () => getCarts(),
  });
