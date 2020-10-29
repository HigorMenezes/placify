import React from "react";
import { FaHeart } from "react-icons/fa";
import Popover from "../../Popover";

import useUserProfilePopoverStyles from "./useUserProfilePopoverStyles";

import { Profile } from "../../../types";

interface UserProfilePopoverProps {
  anchorEl: HTMLButtonElement | null;
  onClose: () => void;
  userProfile: Profile;
}

function UserProfilePopover({
  anchorEl,
  onClose,
  userProfile,
}: UserProfilePopoverProps): React.ReactElement {
  const classes = useUserProfilePopoverStyles();

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "right",
        vertical: "bottom",
      }}
      transformOrigin={{
        horizontal: "right",
        vertical: "top",
      }}
      onClose={onClose}
    >
      <div className={classes.root}>
        <p className={classes.name}>{userProfile.name}</p>
        <small className={classes.email}>{userProfile.email}</small>
        <div className={classes.followersContainer}>
          <p className={classes.followersQuantity}>{userProfile.followers}</p>
          <FaHeart className={classes.followersIcon} size={20} />
        </div>
      </div>
    </Popover>
  );
}

export default UserProfilePopover;