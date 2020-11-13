import React from "react";

import Search from "../Search";
import UserProfileButton from "../UserProfileButton";

import useSearchHeaderStyles from "./useSearchHeaderStyles";

interface SearchHeaderProps {
  placeholder: string;
}

function SearchHeader({ placeholder }: SearchHeaderProps): React.ReactElement {
  const classes = useSearchHeaderStyles();

  return (
    <div className={classes.root}>
      <Search placeholder={placeholder} />
      <UserProfileButton />
    </div>
  );
}

export default React.memo(SearchHeader);
