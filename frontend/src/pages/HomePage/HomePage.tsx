import React from "react";

import UserProfileButton from "../../components/UserProfileButton";
import NewAlbumsList from "../../components/NewAlbumsList";
import FeaturedPlaylistsList from "../../components/FeaturedPlaylistsList";

import useHomePageStyles from "./useHomePageStyles";

function HomePage(): React.ReactElement {
  const classes = useHomePageStyles();

  return (
    <>
      <div className={classes.headerContainer}>
        <UserProfileButton />
      </div>
      <div className={classes.sectionContent}>
        <h2 className={classes.title}>New Albums</h2>
        <NewAlbumsList />
      </div>
      <div className={classes.sectionContent}>
        <h2 className={classes.title}>Featured Playlists</h2>
        <FeaturedPlaylistsList />
      </div>
    </>
  );
}

export default HomePage;
