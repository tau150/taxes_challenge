export interface AuthUser {
  id: string;
  email: string;
  name: string;
}

export function isValidEmail(email: string): boolean {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return regex.test(email);
}

export function isValidPassword(password: string): boolean {
  return password.length >= 6;
}
