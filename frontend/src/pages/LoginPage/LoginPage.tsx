import React from "react";

import PlacifyLogo from "../../components/PlacifyLogo";

import useLoginPageStyles from "./useLoginPageStyles";

function LoginPage(): React.ReactElement {
  const classes = useLoginPageStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.logoContainer}>
          <PlacifyLogo size={100} />
          <h1 className={classes.logoTitle}>Placify</h1>
        </div>
        <div className={classes.signInContainer}>
          <p className={classes.signInText}>Wellcome to Placify</p>
          <button className={classes.signInButton} type="button">
            Sign in with spotify
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
