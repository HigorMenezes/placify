import React, { useEffect, useState, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";

import AlbumCard from "../../components/AlbumCard";
import EmptySearch from "../../components/EmptySearch";
import Loader from "../../components/Loader";

import SearchHeader from "../../components/SearchHeader";
import FetchMoreButton from "../../components/FetchMoreButton";

import useAlbumPageStyles from "./useAlbumPageStyles";

import placifyApi from "../../services/placifyApi";

import { NewAlbums } from "../../types";

const LIMIT = 8;

function AlbumPage(): React.ReactElement {
  const classes = useAlbumPageStyles();
  const location = useLocation();
  const [albumSearch, setAlbumSearch] = useState<NewAlbums | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const offset = useRef<number>(0);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const qParam = searchParams.get("q");
    if (qParam) {
      setLoading(true);
      placifyApi
        .get("/search/albums", {
          params: { limit: LIMIT, q: qParam },
        })
        .then(({ data }) => {
          offset.current += LIMIT;
          setAlbumSearch(data);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setAlbumSearch(null);
    }
  }, [location]);

  const handleFetchMore = useCallback(() => {
    const searchParams = new URLSearchParams(location.search);
    const qParam = searchParams.get("q");
    if (qParam) {
      setLoading(true);
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
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [location]);

  return (
    <>
      <SearchHeader placeholder="Search for albums" />
      <div className={classes.sectionContent}>
        <h2 className={classes.title}>Albums</h2>
        {albumSearch ? (
          <div className={classes.albumsContainer}>
            {albumSearch.albums.map((album) => (
              <AlbumCard album={album} />
            ))}
          </div>
        ) : null}
        {!albumSearch && !loading ? (
          <EmptySearch text="Search for albums" />
        ) : null}
      </div>
      {loading ? <Loader /> : null}
      {albumSearch?.next && !loading ? (
        <FetchMoreButton onFetchMore={handleFetchMore} />
      ) : null}
    </>
  );
}

export default AlbumPage;
