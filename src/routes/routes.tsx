import { Route, Switch } from "react-router-dom";

import { ROUTES } from "./routes.types";

import PrivateRoute from "@/Components/PrivateRoute/PrivateRoute";
import Login from "@/modules/auth/pages/Login/Login";
import NotFound from "@/pages/NotFound/NotFound";
import Taxes from "@/modules/tax/pages/Taxes/Taxes";
import TaxSubmission from "@/modules/tax/pages/TaxSubmission/TaxSubmission";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.ROOT}>
        <Login />
      </Route>
      <PrivateRoute exact path={ROUTES.TAXES}>
        <Taxes />
      </PrivateRoute>
      <PrivateRoute exact path={ROUTES.TAX_SUBMISSION}>
        <TaxSubmission />
      </PrivateRoute>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
