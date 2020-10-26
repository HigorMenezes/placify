import React, { useState, useEffect } from "react";
import placifyApi from "../../services/placifyApi";

import MainLayout from "../../layouts/MainLayout";

import useHomePageStyles from "./useHomePageStyles";

interface Artist {
  id: string;
  name: string;
  spotifyUrl: string;
}

interface Image {
  height?: number;
  url: string;
  width?: number;
}

interface Album {
  artists: Artist[];
  id: string;
  images: Image[];
  name: string;
  releaseDate: string;
  spotifyUrl: string;
  totalTracks: number;
}
interface NewAlbums {
  albums: Album[];
  limit: number;
  next: boolean;
  offset: number;
  previous: boolean;
  total: number;
}

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
      <div className={classes.welcomeContainer}>
        <p className={classes.welcomeText}>Welcome Higor!</p>
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
