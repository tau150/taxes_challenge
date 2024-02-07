import { useQuery } from "@tanstack/react-query";

import { find } from "@/modules/tax/services/HttpTax";

export const QUERY_KEY = "tax";

export const useGetTax = (id: string) => {
  return useQuery({
    queryFn: () => find(id),
    queryKey: [QUERY_KEY, id],
  });
};
