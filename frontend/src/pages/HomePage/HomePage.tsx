import React from "react";

import UserProfileButton from "../../components/UserProfileButton";
import NewAlbumsList from "../../components/NewAlbumsList";

import MainLayout from "../../layouts/MainLayout";

import useHomePageStyles from "./useHomePageStyles";

function HomePage(): React.ReactElement {
  const classes = useHomePageStyles();

  return (
    <MainLayout>
      <div className={classes.headerContainer}>
        <UserProfileButton />
      </div>

      <div className={classes.newAlbumsContainer}>
        <h2 className={classes.newAlbumsContainerTitle}>New Albums</h2>
        <NewAlbumsList />
      </div>
    </MainLayout>
  );
}

export default HomePage;
