import { Route, Redirect } from "react-router-dom";

import { useAuth } from "@/hooks/useAuth";

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
        return isAuth ? children : <Redirect to="/" />;
      }}
    />
  );
};

export default PrivateRoute;
