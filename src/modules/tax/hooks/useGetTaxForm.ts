import { useQuery } from "@tanstack/react-query";

import { getFormById } from "../services/HttpTax";

const QUERY_KEY = "taxesForm";

export const useGetTaxForm = (id: string) => {
  return useQuery({
    queryFn: () => getFormById(id),
    queryKey: [QUERY_KEY, id],
  });
};
