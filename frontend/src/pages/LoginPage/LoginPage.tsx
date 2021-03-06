import React from "react";
import { FaSpotify } from "react-icons/fa";

import PlacifyLogo from "../../components/PlacifyLogo";
import PlacifyTitle from "../../components/PlacifyTitle";
import GradientAnchor from "../../components/GradientAnchor";

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
          <p className={classes.signInText}>Welcome to Placify</p>
          <GradientAnchor href="http://localhost:3333/session">
            <FaSpotify size={22} />
            &nbsp; Sign in with spotify
          </GradientAnchor>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
