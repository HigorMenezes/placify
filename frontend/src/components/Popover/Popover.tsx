import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import PopoverContainer from "./PopoverContainer";

import usePopoverStyles from "./usePopoverStyles";

interface Position {
  left: number;
  top: number;
}

interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  anchorEl: HTMLButtonElement | null;
  children: React.ReactElement;
  onClose: () => void;
}

function Popover({
  anchorEl,
  children,
  onClose,
  ...rest
}: PopoverProps): React.ReactElement | null {
  const [position, setPosition] = useState<Position>({ left: 0, top: 0 });
  const classes = usePopoverStyles({ left: position.left, top: position.top });

  useEffect(() => {
    if (anchorEl) {
      const { left, top, height } = anchorEl.getBoundingClientRect();

      setPosition({ left, top: top + height });
    }
  }, [anchorEl]);

  function handleClickOutside(e: React.MouseEvent) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  const PopoverElement = (
    <PopoverContainer onClickOutside={handleClickOutside}>
      <div {...rest} tabIndex={-1} className={classes.content}>
        {children}
      </div>
    </PopoverContainer>
  );

  return anchorEl
    ? ReactDOM.createPortal(
        PopoverElement,
        document.getElementsByTagName("body")[0],
      )
    : null;
}

Popover.defaultProps = {
  anchorEl: null,
};

export default Popover;
