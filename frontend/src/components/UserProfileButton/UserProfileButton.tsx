import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import placifyApi from "../../services/placifyApi";

import userAlt from "../../assets/user-alt.svg";

import useUserProfileButtonStyles from "./useUserProfileButtonStyles";

import { Profile } from "../../types";

function UserProfileButton(): React.ReactElement {
  const classes = useUserProfileButtonStyles();
  const [userProfile, setUserProfile] = useState<Profile>();

  useEffect(() => {
    placifyApi.get("/users/profile").then(({ data }) => {
      setUserProfile(data);
    });
  }, []);

  if (!userProfile) {
    return <p>Loading...</p>;
  }

  return (
    <button type="button" className={classes.root}>
      <img
        className={classes.userImage}
        src={userProfile.images?.[0]?.url ?? userAlt}
        width={30}
        height={30}
        alt="user profile"
      />
      <p className={classes.userName}>{userProfile.name}</p>
      <FaAngleDown size={16} />
    </button>
  );
}

export default UserProfileButton;
