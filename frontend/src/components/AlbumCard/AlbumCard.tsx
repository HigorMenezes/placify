import React from "react";

import useAlbumCardStyles from "./useAlbumCardStyles";

import { Album } from "../../types";

interface AlbumCardProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Album;
}

function AlbumCard({ album, ...rest }: AlbumCardProps): React.ReactElement {
  const classes = useAlbumCardStyles();

  return (
    <div {...rest} className={classes.root}>
      <img
        className={classes.cardImage}
        src={album.images[0].url}
        alt={album.name}
        width="100%"
      />
      <h3 className={classes.cardName}>{album.name}</h3>
      <p className={classes.cardArtists}>
        {album.artists.map((artist) => artist.name).join(", ")}
      </p>
    </div>
  );
}

export default AlbumCard;
