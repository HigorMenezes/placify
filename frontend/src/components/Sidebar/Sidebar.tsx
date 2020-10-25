import React from "react";

import PlacifyLogo from "../PlacifyLogo";
import PlacifyTitle from "../PlacifyTitle";

import useSidebarStyles from "./useSidebarStyles";

function Sidebar(): React.ReactElement {
  const classes = useSidebarStyles();

  return (
    <div className={classes.root}>
      <div className={classes.logoContainer}>
        <PlacifyLogo />
        <PlacifyTitle />
      </div>
      <nav className={classes.navigationContainer}>navigation</nav>
    </div>
  );
}

export default Sidebar;
