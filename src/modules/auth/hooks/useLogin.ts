import { useMutation } from "@tanstack/react-query";

import type { LoginResponse } from "@/modules/auth/services/HttpAuth.types";

import { login } from "@/modules/auth/services/HttpAuth";

interface Params {
  onSuccess: (data: LoginResponse) => void;
  onError: (error: { status: string; message: string }) => void;
}

export const useLogin = ({ onSuccess, onError }: Params) => {
  return useMutation({
    mutationFn: login,
    onSuccess,
    onError,
  });
};
