import React, { useState, useEffect } from "react";
import placifyApi from "../../services/placifyApi";

import AlbumCard from "../AlbumCard";
import Loader from "../Loader";

import useNewAlbumsListStyles from "./useNewAlbumsListStyles";

import { NewAlbums } from "../../types";

function NewAlbumsList(): React.ReactElement {
  const classes = useNewAlbumsListStyles();
  const [loading, setLoading] = useState<boolean>(true);

  const [newAlbums, setNewAlbums] = useState<NewAlbums>();

  useEffect(() => {
    setLoading(true);
    placifyApi
      .get("/albums/new", { params: { limit: 4 } })
      .then(({ data }) => {
        setNewAlbums(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={classes.root}>
      {(newAlbums?.albums ?? []).map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
}

export default NewAlbumsList;
