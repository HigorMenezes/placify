import React from "react";

import useFetchMoreButtonStyles from "./useFetchMoreButtonStyles";

interface FetchMoreButtonProps {
  onFetchMore: () => void;
}

function FetchMoreButton({
  onFetchMore,
}: FetchMoreButtonProps): React.ReactElement {
  const classes = useFetchMoreButtonStyles();

  return (
    <div className={classes.root}>
      <button
        className={classes.fetchMoreButton}
        type="button"
        onClick={onFetchMore}
      >
        Fetch more albums
      </button>
    </div>
  );
}

export default FetchMoreButton;
