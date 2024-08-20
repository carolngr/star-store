import { useQuery } from "@tanstack/react-query";
import { getItems } from ".";

export const useGetItems = () =>
  useQuery({
    queryKey: ["items_list_data"],
    queryFn: () => getItems(),
    staleTime: 100 * 100 * 100,
    refetchOnMount: false,
  });
