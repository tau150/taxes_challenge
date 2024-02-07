import { useMutation } from "@tanstack/react-query";

import type { Tax } from "@/modules/tax/domain/Tax";

import { postForm } from "@/modules/tax/services/HttpTax";

interface Params {
  onSuccess: (data: Tax) => void;
  onError: VoidFunction;
}

export const usePostTaxForm = ({ onSuccess, onError }: Params) => {
  return useMutation({
    mutationFn: postForm,
    onSuccess,
    onError,
  });
};
