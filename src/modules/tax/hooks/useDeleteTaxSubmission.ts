import { useMutation } from "@tanstack/react-query";

import { deleteSubmission } from "@/modules/tax/services/HttpTax";

interface Params {
  onSuccess: VoidFunction;
  onError: VoidFunction;
}

export const useDeleteTaxSubmission = ({ onSuccess, onError }: Params) => {
  return useMutation({
    mutationFn: deleteSubmission,
    onSuccess,
    onError,
  });
};
