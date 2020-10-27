import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import placifyApi from "../../services/placifyApi";

import MainLayout from "../../layouts/MainLayout";

import userAlt from "../../assets/user-alt.svg";

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

export interface Profile {
  id: string;
  name: string;
  email: string;
  followers: number;
  spotifyUrl: string;
  images?: Image[];
}

function HomePage(): React.ReactElement {
  const classes = useHomePageStyles();
  const [newAlbums, setNewAlbums] = useState<NewAlbums>();
  const [userProfile, setUserProfile] = useState<Profile>();

  useEffect(() => {
    placifyApi.get("/albums/new", { params: { limit: 4 } }).then(({ data }) => {
      setNewAlbums(data);
    });
  }, []);

  useEffect(() => {
    placifyApi.get("/users/profile").then(({ data }) => {
      setUserProfile(data);
    });
  }, []);

  if (!newAlbums || !userProfile) {
    return <p>loading...</p>;
  }

  return (
    <MainLayout>
      <div className={classes.headerContainer}>
        <div className={classes.userContainer}>
          <img
            className={classes.userImage}
            src={userProfile.images?.[0]?.url ?? userAlt}
            width={25}
            height={25}
            alt="user profile"
          />
          <p className={classes.userName}>{userProfile.name}</p>
          <FaAngleDown size={16} />
        </div>
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
