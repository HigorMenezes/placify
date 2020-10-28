import React from "react";

import usePlaylistCardStyles from "./usePlaylistCardStyles";

import { Playlist } from "../../types";

interface PlaylistCardProps extends React.HTMLAttributes<HTMLDivElement> {
  playlist: Playlist;
}

function PlaylistCard({
  playlist,
  ...rest
}: PlaylistCardProps): React.ReactElement {
  const classes = usePlaylistCardStyles();

  return (
    <div {...rest} className={classes.root}>
      <img
        className={classes.cardImage}
        src={playlist.images[0].url}
        alt={playlist.name}
        width="100%"
      />
      <h3 className={classes.cardName}>{playlist.name}</h3>
    </div>
  );
}

export default PlaylistCard;
