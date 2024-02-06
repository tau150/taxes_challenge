import { useContext } from "react";

import { AuthContext } from "@/modules/auth/contexts/AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthContext`);
  }

  return context;
};
