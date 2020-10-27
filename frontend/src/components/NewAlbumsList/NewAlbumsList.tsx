import React, { useState, useEffect } from "react";
import placifyApi from "../../services/placifyApi";

import useNewAlbumsListStyles from "./useNewAlbumsListStyles";

import { NewAlbums } from "../../types";
import AlbumCard from "../AlbumCard";

function NewAlbumsList(): React.ReactElement {
  const classes = useNewAlbumsListStyles();

  const [newAlbums, setNewAlbums] = useState<NewAlbums>();

  useEffect(() => {
    placifyApi.get("/albums/new", { params: { limit: 4 } }).then(({ data }) => {
      setNewAlbums(data);
    });
  }, []);

  if (!newAlbums) {
    return <p>Loading...</p>;
  }

  return (
    <div className={classes.root}>
      {newAlbums.albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
}

export default NewAlbumsList;
