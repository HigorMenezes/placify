import React from "react";

import UserProfileButton from "../../components/UserProfileButton";
import MainLayout from "../../layouts/MainLayout";

import useAlbumPageStyles from "./useAlbumPageStyles";

function AlbumPage(): React.ReactElement {
  const classes = useAlbumPageStyles();

  return (
    <MainLayout>
      <div className={classes.headerContainer}>
        <UserProfileButton />
      </div>
      <div className={classes.sectionContent}>AlbumPage</div>
    </MainLayout>
  );
}

export default AlbumPage;
