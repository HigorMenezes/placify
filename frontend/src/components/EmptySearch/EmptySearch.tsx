import React from "react";
import EmptySearchSvg from "../../assets/empty.svg";

import useEmptySearchStyles from "./useEmptySearchStyles";

interface EmptySearchProps {
  size?: number | string;
  text: string;
}

function EmptySearch({ size, text }: EmptySearchProps): React.ReactElement {
  const classes = useEmptySearchStyles();

  return (
    <div className={classes.root}>
      <img src={EmptySearchSvg} width={size} height={size} alt="Empty" />
      <p className={classes.text}>{text}</p>
    </div>
  );
}

EmptySearch.defaultProps = {
  size: 300,
};

export default EmptySearch;
