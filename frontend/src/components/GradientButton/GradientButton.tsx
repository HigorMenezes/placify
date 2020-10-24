import React, { ButtonHTMLAttributes } from "react";

import useGradientButtonStyles from "./useGradientButtonStyles";

function GradientButton({
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>): React.ReactElement {
  const classes = useGradientButtonStyles();

  return (
    <button {...rest} className={classes.root} type="button">
      {children}
    </button>
  );
}

export default GradientButton;
