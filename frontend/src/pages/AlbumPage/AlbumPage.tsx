import React, { useEffect, useState, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";

import UserProfileButton from "../../components/UserProfileButton";
import Search from "../../components/Search";
import AlbumCard from "../../components/AlbumCard";
import EmptySearch from "../../components/EmptySearch";

import useAlbumPageStyles from "./useAlbumPageStyles";

import placifyApi from "../../services/placifyApi";

import { NewAlbums } from "../../types";

const LIMIT = 8;

function AlbumPage(): React.ReactElement {
  const classes = useAlbumPageStyles();
  const location = useLocation();
  const [albumSearch, setAlbumSearch] = useState<NewAlbums | null>(null);
  const offset = useRef<number>(0);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const qParam = searchParams.get("q");
    if (qParam) {
      placifyApi
        .get("/search/albums", {
          params: { limit: LIMIT, q: qParam },
        })
        .then(({ data }) => {
          offset.current += LIMIT;
          setAlbumSearch(data);
        });
    } else {
      setAlbumSearch(null);
    }
  }, [location]);

  const handleFetchMore = useCallback(() => {
    const searchParams = new URLSearchParams(location.search);
    const qParam = searchParams.get("q");
    if (qParam) {
      placifyApi
        .get("/search/albums", {
          params: { limit: LIMIT, offset: offset.current, q: qParam },
        })
        .then(({ data }) => {
          offset.current += LIMIT;
          setAlbumSearch((prevAlbumSearch) => {
            return {
              ...data,
              albums: [
                ...(prevAlbumSearch?.albums ?? []),
                ...(data?.albums ?? []),
              ],
            };
          });
        });
    }
  }, [location]);

  return (
    <>
      <div className={classes.headerContainer}>
        <Search placeholder="Search for albums" />
        <UserProfileButton />
      </div>
      <div className={classes.sectionContent}>
        <h2 className={classes.title}>Albums</h2>
        {albumSearch ? (
          <div className={classes.albumsContainer}>
            {albumSearch.albums.map((album) => (
              <AlbumCard album={album} />
            ))}
          </div>
        ) : (
          <div className={classes.emptyResult}>
            <EmptySearch text="Search for albums" />
          </div>
        )}
      </div>
      <div className={classes.fetchMoreContainer}>
        <button
          className={classes.fetchMoreButton}
          type="button"
          onClick={handleFetchMore}
        >
          Fetch more albums
        </button>
      </div>
    </>
  );
}

export default AlbumPage;
