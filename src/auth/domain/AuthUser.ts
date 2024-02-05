export interface AuthUser {
  email: string;
  password: string;
}

export const isValidEmail = (email: string): boolean => {
  console.log("%c Line:7 🍭 email", "color:#fca650", email);
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return regex.test(email);
};

export const isValidPassword = (password: string): boolean => {
  return password.length >= 6;
};
