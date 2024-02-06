export enum STATUS {
  SUCCESS = "success",
  NOT_FOUND = "not found",
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
}

export const isValidEmail = (email: string): boolean => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return regex.test(email);
};

export const isValidPassword = (password: string): boolean => {
  return password.length >= 6;
};

export const isExistingUser = (status?: STATUS) => {
  return status !== STATUS.NOT_FOUND;
};
