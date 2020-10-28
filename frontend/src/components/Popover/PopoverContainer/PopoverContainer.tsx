import React from "react";

import usePopoverContainerStyles from "./usePopoverContainerStyles";

interface PopoverContainerProps {
  children: React.ReactElement;
  onClickOutside: (e: React.MouseEvent) => void;
}

function PopoverContainer({
  children,
  onClickOutside,
}: PopoverContainerProps): React.ReactElement | null {
  const classes = usePopoverContainerStyles();

  return (
    <div className={classes.root} role="presentation" onClick={onClickOutside}>
      {children}
    </div>
  );
}

export default PopoverContainer;
