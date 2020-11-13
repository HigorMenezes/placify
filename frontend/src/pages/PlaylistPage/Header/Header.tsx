import React from "react";

import Search from "../../../components/Search";
import UserProfileButton from "../../../components/UserProfileButton";

import useHeaderStyles from "./useHeaderStyles";

function Header(): React.ReactElement {
  const classes = useHeaderStyles();

  return (
    <div className={classes.root}>
      <Search placeholder="Search for albums" />
      <UserProfileButton />
    </div>
  );
}

export default Header;
