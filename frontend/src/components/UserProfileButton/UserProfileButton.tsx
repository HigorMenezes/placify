import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import placifyApi from "../../services/placifyApi";

import UserProfilePopover from "./UserProfilePopover";

import userAlt from "../../assets/user-alt.svg";

import useUserProfileButtonStyles from "./useUserProfileButtonStyles";

import { Profile } from "../../types";

function UserProfileButton(): React.ReactElement {
  const classes = useUserProfileButtonStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const [userProfile, setUserProfile] = useState<Profile>();

  useEffect(() => {
    placifyApi.get("/users/profile").then(({ data }) => {
      setUserProfile(data);
    });
  }, []);

  function handleClosePopover() {
    setAnchorEl(null);
  }

  if (!userProfile) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <button
        type="button"
        className={classes.root}
        onClick={(e) => {
          setAnchorEl(e.currentTarget);
        }}
      >
        <img
          className={classes.userImage}
          src={userProfile.images?.[0]?.url ?? userAlt}
          width={30}
          height={30}
          alt="user profile"
        />
        <FaAngleDown size={16} />
      </button>
      <UserProfilePopover
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        userProfile={userProfile}
      />
    </>
  );
}

export default React.memo(UserProfileButton);
