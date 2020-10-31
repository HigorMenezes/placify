import React from "react";
import { Link } from "react-router-dom";

import PlacifyLogo from "../PlacifyLogo";
import PlacifyTitle from "../PlacifyTitle";
import Navigation from "../Navigation";

import useSidebarStyles from "./useSidebarStyles";

function Sidebar(): React.ReactElement {
  const classes = useSidebarStyles();

  return (
    <div className={classes.root}>
      <Link className={classes.logoContainer} to="/placify">
        <PlacifyLogo />
        <PlacifyTitle />
      </Link>
      <div className={classes.navigationContainer}>
        <Navigation />
      </div>
    </div>
  );
}

export default Sidebar;
