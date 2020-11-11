import React, { useState, useEffect } from "react";
import placifyApi from "../../services/placifyApi";

import PlaylistCard from "../PlaylistCard";
import Loader from "../Loader";

import useFeaturedPlaylistsListStyles from "./useFeaturedPlaylistsListStyles";

import { FeaturedPlaylists } from "../../types";

function FeaturedPlaylistsList(): React.ReactElement {
  const classes = useFeaturedPlaylistsListStyles();
  const [loading, setLoading] = useState<boolean>(true);

  const [featuredPlaylists, setFeaturedPlaylists] = useState<
    FeaturedPlaylists
  >();

  useEffect(() => {
    setLoading(true);
    placifyApi
      .get("/playlists/featured", { params: { limit: 5 } })
      .then(({ data }) => {
        setFeaturedPlaylists(data);
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
      {(featuredPlaylists?.playlists ?? []).map((playlist) => (
        <PlaylistCard key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
}

export default FeaturedPlaylistsList;
