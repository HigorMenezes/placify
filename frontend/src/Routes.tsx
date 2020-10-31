import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AlbumPage from "./pages/AlbumPage";

function Routes(): React.ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/placify" exact component={HomePage} />
        <Route path="/placify/albums" component={AlbumPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
