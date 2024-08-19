import { useQuery } from "@tanstack/react-query";
import { getItems } from ".";

export const useGetItems = () =>
  useQuery({
    queryKey: ["items_list"],
    queryFn: () => getItems(),
  });
