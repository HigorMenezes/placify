import React from "react";
import { FaSearch } from "react-icons/fa";

import useSearchStyles from "./useSearchStyles";

function Search(): React.ReactElement {
  const classes = useSearchStyles();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("submit");
  }

  return (
    <form className={classes.root} noValidate onSubmit={handleSubmit}>
      <label className={classes.searchContainer} htmlFor="search">
        <input className={classes.searchInput} name="search" />
        <button className={classes.searchButton} type="submit">
          <FaSearch size={25} />
        </button>
      </label>
    </form>
  );
}

export default Search;
