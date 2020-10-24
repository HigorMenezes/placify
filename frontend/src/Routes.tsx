import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";

function Routes(): React.ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
