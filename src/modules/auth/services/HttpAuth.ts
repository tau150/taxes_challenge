import db from "../../../../server/db.json";

import type { UserLoginParams, LoginResponse } from "./HttpAuth.types";

import { STATUS } from "@/modules/auth/domain/Auth";

export const login = async (user: UserLoginParams): Promise<LoginResponse> => {
  const loggedUser = db.users.find(
    (dbUser) => dbUser.email === user.email && dbUser.password === user.password,
  );

  return new Promise((resolve) => {
    setTimeout(() => {
      if (loggedUser) {
        resolve({
          email: loggedUser.email,
          id: loggedUser.id,
          name: loggedUser.name,
          status: STATUS.SUCCESS,
        });
      } else {
        resolve({
          status: STATUS.NOT_FOUND,
        });
      }
    }, 1000);
  });
};
