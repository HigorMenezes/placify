import React from "react";

import usePlacifyTitleStyles from "./usePlacifyTitleStyles";

function PlacifyTitle(): React.ReactElement {
  const classes = usePlacifyTitleStyles();

  return <h1 className={classes.root}>Placify</h1>;
}

export default PlacifyTitle;
