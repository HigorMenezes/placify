import React from "react";

import useLoginPageStyles from "./useLoginPageStyles";

function LoginPage(): React.ReactElement {
  const classes = useLoginPageStyles({ textColor: "#666666" });

  return <div className={classes.root}>login screen</div>;
}

export default LoginPage;
