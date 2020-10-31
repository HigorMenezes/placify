import React from "react";

import PlacifyLogo from "../PlacifyLogo";
import PlacifyTitle from "../PlacifyTitle";
import Navigation from "../Navigation";

import useSidebarStyles from "./useSidebarStyles";

function Sidebar(): React.ReactElement {
  const classes = useSidebarStyles();

  return (
    <div className={classes.root}>
      <div className={classes.logoContainer}>
        <PlacifyLogo />
        <PlacifyTitle />
      </div>
      <div className={classes.navigationContainer}>
        <Navigation />
      </div>
    </div>
  );
}

export default Sidebar;
