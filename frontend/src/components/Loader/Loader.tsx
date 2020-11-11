import React from "react";

import useLoaderStyles from "./useLoaderStyles";

function Loader(): React.ReactElement {
  const classes = useLoaderStyles();

  return (
    <div className={classes.root}>
      <div className={classes.loader}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loader;
