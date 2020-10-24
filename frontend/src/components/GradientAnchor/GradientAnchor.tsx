import React, { AnchorHTMLAttributes } from "react";

import useGradientAnchorStyles from "./useGradientAnchorStyles";

function GradientAnchor({
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>): React.ReactElement {
  const classes = useGradientAnchorStyles();

  return (
    <a {...rest} className={classes.root}>
      {children}
    </a>
  );
}

export default GradientAnchor;
