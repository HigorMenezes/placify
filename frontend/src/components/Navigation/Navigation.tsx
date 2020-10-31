import React from "react";
import { Link } from "react-router-dom";

import useNavigationStyles from "./useNavigationStyles";

function Navigation(): React.ReactElement {
  const classes = useNavigationStyles();

  return (
    <nav className={classes.root}>
      <Link to="/placify/albums">Albums</Link>
    </nav>
  );
}

export default Navigation;
