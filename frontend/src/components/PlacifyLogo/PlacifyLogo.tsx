import React from "react";
import PlacifyLogoSvg from "../../assets/placify-logo.svg";

interface PlacifyLogoProps {
  size?: number | string;
}

function PlacifyLogo({ size }: PlacifyLogoProps): React.ReactElement {
  return (
    <img src={PlacifyLogoSvg} width={size} height={size} alt="Placify Logo" />
  );
}

PlacifyLogo.defaultProps = {
  size: 50,
};

export default PlacifyLogo;
