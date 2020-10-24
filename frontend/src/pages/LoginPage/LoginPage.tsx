import React from "react";

import PlacifyLogo from "../../components/PlacifyLogo";
import PlacifyTitle from "../../components/PlacifyTitle";
import GradientButton from "../../components/GradientButton";

import useLoginPageStyles from "./useLoginPageStyles";

function LoginPage(): React.ReactElement {
  const classes = useLoginPageStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.logoContainer}>
          <PlacifyLogo size={100} />
          <PlacifyTitle />
        </div>
        <div className={classes.signInContainer}>
          <p className={classes.signInText}>Wellcome to Placify</p>
          <GradientButton>Sign in with spotify</GradientButton>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
