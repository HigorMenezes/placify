import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import UserProfileButton from "../../components/UserProfileButton";
import Search from "../../components/Search";
import AlbumCard from "../../components/AlbumCard";
import EmptySearch from "../../components/EmptySearch";

import useAlbumPageStyles from "./useAlbumPageStyles";

import placifyApi from "../../services/placifyApi";

import { NewAlbums } from "../../types";

function AlbumPage(): React.ReactElement {
  const classes = useAlbumPageStyles();
  const location = useLocation();
  const [albumSearch, setSearch] = useState<NewAlbums | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const q = searchParams.get("q");
    if (q) {
      placifyApi
        .get("/search/albums", {
          params: { limit: 20, q },
        })
        .then(({ data }) => {
          setSearch(data);
        });
    } else {
      setSearch(null);
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
    </>
  );
}

export default AlbumPage;
