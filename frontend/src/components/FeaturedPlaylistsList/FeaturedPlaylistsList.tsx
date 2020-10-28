import React, { useState, useEffect } from "react";
import placifyApi from "../../services/placifyApi";

import useFeaturedPlaylistsListStyles from "./useFeaturedPlaylistsListStyles";

import { FeaturedPlaylists } from "../../types";
import PlaylistCard from "../PlaylistCard";

function FeaturedPlaylistsList(): React.ReactElement {
  const classes = useFeaturedPlaylistsListStyles();

  const [featuredPlaylists, setFeaturedPlaylists] = useState<
    FeaturedPlaylists
  >();

  useEffect(() => {
    placifyApi
      .get("/playlists/featured", { params: { limit: 5 } })
      .then(({ data }) => {
        setFeaturedPlaylists(data);
      });
  }, []);

  if (!featuredPlaylists) {
    return <p>Loading...</p>;
  }

  return (
    <div className={classes.root}>
      {featuredPlaylists.playlists.map((playlist) => (
        <PlaylistCard key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
}

export default FeaturedPlaylistsList;
