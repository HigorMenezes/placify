import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import PopoverContainer from "./PopoverContainer";

import useWindowResize from "../../hooks/useWindowResize";

import usePopoverStyles from "./usePopoverStyles";

interface Position {
  left: number;
  top: number;
}

interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  anchorEl: HTMLButtonElement | null;
  anchorOrigin?: {
    vertical?: "top" | "center" | "bottom";
    horizontal?: "left" | "center" | "right";
  };
  transformOrigin?: {
    vertical?: "top" | "center" | "bottom";
    horizontal?: "left" | "center" | "right";
  };
  offset?: {
    x?: number;
    y?: number;
  };
  children: React.ReactElement | React.ReactElement[];
  onClose: () => void;
}

const multiplicationFactor = {
  top: 0,
  left: 0,
  center: 1 / 2,
  bottom: 1,
  right: 1,
};

function Popover({
  anchorEl,
  anchorOrigin,
  transformOrigin,
  offset,
  children,
  onClose,
  ...rest
}: PopoverProps): React.ReactElement | null {
  const [position, setPosition] = useState<Position>({ left: 0, top: 0 });
  const popoverContent = useRef<HTMLDivElement | null>(null);
  const { width, height } = useWindowResize();
  const classes = usePopoverStyles({ left: position.left, top: position.top });

  useEffect(() => {
    if (anchorEl && popoverContent.current) {
      const {
        x: anchorX,
        y: anchorY,
        width: anchorWidth,
        height: anchorHeight,
      } = anchorEl.getBoundingClientRect();
      const {
        width: popoverWidth,
        height: popoverHeight,
      } = popoverContent.current.getBoundingClientRect();

      const left =
        anchorX +
        (offset?.x ?? 0) +
        multiplicationFactor[anchorOrigin?.horizontal ?? "left"] * anchorWidth -
        multiplicationFactor[transformOrigin?.horizontal ?? "left"] *
          popoverWidth;

      const top =
        anchorY +
        (offset?.y ?? 0) +
        multiplicationFactor[anchorOrigin?.vertical ?? "top"] * anchorHeight -
        multiplicationFactor[transformOrigin?.vertical ?? "top"] *
          popoverHeight;

      setPosition({ left, top });
    }
  }, [anchorEl, anchorOrigin, transformOrigin, offset, width, height]);

  function handleClickOutside(e: React.MouseEvent) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  const PopoverElement = (
    <PopoverContainer onClickOutside={handleClickOutside}>
      <div
        {...rest}
        ref={popoverContent}
        tabIndex={-1}
        className={classes.content}
      >
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
  anchorOrigin: {
    vertical: "top",
    horizontal: "left",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "left",
  },
  offset: {
    x: 0,
    y: 0,
  },
};

export default Popover;
