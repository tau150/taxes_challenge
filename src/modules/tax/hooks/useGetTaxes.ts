import { useQuery } from "@tanstack/react-query";

import { getAll } from "../services/HttpTax";

const QUERY_KEY = "taxes";

export const useGetTaxes = () => {
  return useQuery({
    queryFn: getAll,
    queryKey: [QUERY_KEY],
  });
};
