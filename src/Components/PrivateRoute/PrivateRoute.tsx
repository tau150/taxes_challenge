import { Route, Redirect } from "react-router-dom";

import PrivateLayout from "@/Layouts/PrivateLayout";
import { useAuth } from "@/modules/auth/hooks/useAuth";

interface Props {
  children: React.ReactNode;
  path: string;
  exact?: boolean;
}

const PrivateRoute = ({ children, exact, path }: Props) => {
  const { isAuth } = useAuth();

  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        return isAuth ? <PrivateLayout>{children}</PrivateLayout> : <Redirect to="/" />;
      }}
    />
  );
};

export default PrivateRoute;
