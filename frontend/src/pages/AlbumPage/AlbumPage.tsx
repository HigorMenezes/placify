import React from "react";

import UserProfileButton from "../../components/UserProfileButton";
import Search from "../../components/Search";

import useAlbumPageStyles from "./useAlbumPageStyles";

function AlbumPage(): React.ReactElement {
  const classes = useAlbumPageStyles();

  return (
    <>
      <div className={classes.headerContainer}>
        <Search />
        <UserProfileButton />
      </div>
      <div className={classes.sectionContent}>AlbumPage</div>
    </>
  );
}

export default AlbumPage;
