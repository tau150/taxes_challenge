import { Route } from "react-router-dom";

import { ROUTES } from "./routes.types";

import Login from "@/pages/Login/Login";
import NotFound from "@/pages/NotFound/NotFound";

const Routes = () => {
  return (
    <>
      <Route exact path={ROUTES.ROOT}>
        <Login />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </>
  );
};

export default Routes;
