import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AlbumPage from "./pages/AlbumPage";

function Routes(): React.ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <MainLayout>
          <Route path="/placify" exact component={HomePage} />
          <Route path="/placify/albums" component={AlbumPage} />
        </MainLayout>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
