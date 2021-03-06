import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import useSearchStyles from "./useSearchStyles";

interface SearchProps {
  placeholder?: string;
}

function Search({ placeholder }: SearchProps): React.ReactElement {
  const classes = useSearchStyles();
  const history = useHistory();
  const location = useLocation();
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const qParam = urlParams.get("q");

    if (qParam) {
      setSearchInput(qParam);
    }
  }, [location.search]);

  function handleChangeSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const newSearchValue = event.target.value;
    setSearchInput(newSearchValue);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const searchParams = new URLSearchParams();
    searchParams.append("q", searchInput ?? "");

    history.push({ search: `?${searchParams.toString()}` });
  }

  return (
    <form className={classes.root} noValidate onSubmit={handleSubmit}>
      <label className={classes.searchContainer} htmlFor="search">
        <input
          className={classes.searchInput}
          name="search"
          value={searchInput}
          onChange={handleChangeSearch}
          placeholder={placeholder}
        />
        <button className={classes.searchButton} type="submit">
          <FaSearch size={25} />
        </button>
      </label>
    </form>
  );
}

Search.defaultProps = {
  placeholder: "",
};

export default React.memo(Search);
