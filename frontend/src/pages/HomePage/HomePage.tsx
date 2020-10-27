import React, { useState, useEffect } from "react";
import placifyApi from "../../services/placifyApi";

import UserProfileButton from "../../components/UserProfileButton";

import MainLayout from "../../layouts/MainLayout";

import useHomePageStyles from "./useHomePageStyles";

import { NewAlbums } from "../../types";

function HomePage(): React.ReactElement {
  const classes = useHomePageStyles();
  const [newAlbums, setNewAlbums] = useState<NewAlbums>();

  useEffect(() => {
    placifyApi.get("/albums/new", { params: { limit: 4 } }).then(({ data }) => {
      setNewAlbums(data);
    });
  }, []);

  if (!newAlbums) {
    return <p>loading...</p>;
  }

  return (
    <MainLayout>
      <div className={classes.headerContainer}>
        <UserProfileButton />
      </div>

      <div className={classes.newAlbumsContainer}>
        <h2 className={classes.newAlbumsContainerTitle}>New Albums</h2>
        <div className={classes.newAlbumContent}>
          {newAlbums.albums.map((album) => (
            <div key={album.id} className={classes.newAlbumContentItem}>
              <img
                className={classes.newAlbumContentItemImage}
                src={album.images[0].url}
                alt={album.name}
                width="100%"
              />
              <h3 className={classes.newAlbumContentItemName}>{album.name}</h3>
              <p className={classes.newAlbumContentItemArtist}>
                {album.artists.map((artist) => artist.name).join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default HomePage;
