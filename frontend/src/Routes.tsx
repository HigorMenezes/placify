import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AlbumPage from "./pages/AlbumPage";
import PlaylistPage from "./pages/PlaylistPage";

function Routes(): React.ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <MainLayout>
          <Route path="/placify" exact component={HomePage} />
          <Route path="/placify/albums" component={AlbumPage} />
          <Route path="/placify/playlists" component={PlaylistPage} />
        </MainLayout>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
