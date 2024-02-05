import fetcher from "@/utils/fetcher";

interface LoginResponse {
  status: boolean;
  email: string;
  id?: string;
}

interface UserLoginParams {
  email: string;
  password: string;
}

export const login = (user: UserLoginParams): Promise<LoginResponse> =>
  fetcher("/login", { body: user });
