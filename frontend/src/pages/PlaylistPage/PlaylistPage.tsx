import React, { useEffect, useState, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";

import PlaylistCard from "../../components/PlaylistCard";
import EmptySearch from "../../components/EmptySearch";
import Loader from "../../components/Loader";

import Header from "./Header";
import FetchMore from "./FetchMore";

import usePlaylistPageStyles from "./usePlaylistPageStyles";

import placifyApi from "../../services/placifyApi";

import { FeaturedPlaylists } from "../../types";

const LIMIT = 8;

function PlaylistPage(): React.ReactElement {
  const classes = usePlaylistPageStyles();
  const location = useLocation();
  const [
    playlistSearch,
    setPlaylistSearch,
  ] = useState<FeaturedPlaylists | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const offset = useRef<number>(0);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const qParam = searchParams.get("q");
    if (qParam) {
      setLoading(true);
      placifyApi
        .get("/search/playlists", {
          params: { limit: LIMIT, q: qParam },
        })
        .then(({ data }) => {
          offset.current += LIMIT;
          setPlaylistSearch(data);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setPlaylistSearch(null);
    }
  }, [location]);

  const handleFetchMore = useCallback(() => {
    const searchParams = new URLSearchParams(location.search);
    const qParam = searchParams.get("q");
    if (qParam) {
      setLoading(true);
      placifyApi
        .get("/search/playlists", {
          params: { limit: LIMIT, offset: offset.current, q: qParam },
        })
        .then(({ data }) => {
          offset.current += LIMIT;
          setPlaylistSearch((prevPlaylistSearch) => {
            return {
              ...data,
              playlists: [
                ...(prevPlaylistSearch?.playlists ?? []),
                ...(data?.playlists ?? []),
              ],
            };
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [location]);

  return (
    <>
      <Header />
      <div className={classes.sectionContent}>
        <h2 className={classes.title}>Playlists</h2>
        {playlistSearch ? (
          <div className={classes.playlistsContainer}>
            {playlistSearch.playlists.map((playlist) => (
              <PlaylistCard playlist={playlist} />
            ))}
          </div>
        ) : null}
        {!playlistSearch && !loading ? (
          <EmptySearch text="Search for playlists" />
        ) : null}
      </div>
      {loading ? <Loader /> : null}
      {playlistSearch?.next && !loading ? (
        <FetchMore onFetchMore={handleFetchMore} />
      ) : null}
    </>
  );
}

export default PlaylistPage;
