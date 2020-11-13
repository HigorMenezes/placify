import React from "react";
import { Link } from "react-router-dom";

import useNavigationStyles from "./useNavigationStyles";

function Navigation(): React.ReactElement {
  const classes = useNavigationStyles();

  return (
    <nav className={classes.root}>
      <Link to="/placify/albums">
        <div className={classes.navigationButtonContainer}>
          <p className={classes.navigationButtonText}>Albums</p>
        </div>
      </Link>
      <Link to="/placify/playlists">
        <div className={classes.navigationButtonContainer}>
          <p className={classes.navigationButtonText}>Playlists</p>
        </div>
      </Link>
    </nav>
  );
}

export default Navigation;
