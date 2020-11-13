import React from "react";

import useFetchMoreStyles from "./useFetchMoreStyles";

interface FetchMoreProps {
  onFetchMore: () => void;
}

function FetchMore({ onFetchMore }: FetchMoreProps): React.ReactElement {
  const classes = useFetchMoreStyles();

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

export default FetchMore;
