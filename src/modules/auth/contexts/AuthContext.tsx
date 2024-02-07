import { createContext } from "react";
import { useState } from "react";

import { AuthUser } from "@/modules/auth/domain/Auth";

interface AuthContext {
  user: AuthUser | null;
  isAuth: boolean;
  setUser: (user: AuthUser | null) => void;
  logOut: VoidFunction;
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  isAuth: false,
  setUser: () => {},
  logOut: () => {},
});

interface Props {
  children: React.ReactNode;
}

const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const logOut = () => {
    setUser(null);
  };

  const isAuth = user !== null;

  return (
    <AuthContext.Provider value={{ user, isAuth, setUser, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
