import { Route, Switch } from "react-router-dom";

import { ROUTES } from "./routes.types";

import PrivateRoute from "@/Components/PrivateRoute/PrivateRoute";
import Login from "@/pages/Login/Login";
import NotFound from "@/pages/NotFound/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.ROOT}>
        <Login />
      </Route>
      <PrivateRoute exact path={ROUTES.HOME}>
        <h1>HOME</h1>
      </PrivateRoute>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
