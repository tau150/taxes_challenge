import { createContext } from "react";
import { useState } from "react";

import { AuthUser } from "@/modules/auth/domain/Auth";

interface AuthContext {
  user: AuthUser | null;
  isAuth: boolean;
  logIn: (user: AuthUser) => void;
  logOut: VoidFunction;
}

interface Props {
  children: React.ReactNode;
}

const LOCAL_STORAGE_KEY = "taxDownUser";

export const AuthContext = createContext<AuthContext>({
  user: null,
  isAuth: false,
  logIn: () => {},
  logOut: () => {},
});

const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState(() => {
    const persistedUser = window.localStorage.getItem(LOCAL_STORAGE_KEY);

    return persistedUser !== null ? JSON.parse(persistedUser) : null;
  });

  const logOut = () => {
    setUser(null);
  };

  const logIn = (user: AuthUser) => {
    setUser(user);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({ name: user.name, email: user.email, id: user.id }),
    );
  };

  const isAuth = user !== null;

  return (
    <AuthContext.Provider value={{ user, isAuth, logIn, logOut }}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
