import { STATUS, AuthUser } from "@/modules/auth/domain/Auth";

interface NotFoundResponse {
  status: STATUS.NOT_FOUND;
}

interface SuccessResponse extends AuthUser {
  status: STATUS.SUCCESS;
}

export type LoginResponse = NotFoundResponse | SuccessResponse;

export interface UserLoginParams {
  email: string;
  password: string;
}
