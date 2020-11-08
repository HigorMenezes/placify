import { makeStyles } from "@material-ui/styles";

import { Theme } from "../../styles/theme";

const useSearchStyles = makeStyles<Theme>((theme) => ({
  root: {
    width: "100%",
    height: 50,
  },
  searchContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,.05)",
    border: "1px solid rgba(0,0,0,.1)",
    borderRadius: 25,
    overflow: "hidden",
  },
  searchInput: {
    border: "none",
    backgroundColor: "transparent",
    width: "100%",
    outline: "none",

    color: theme.textColor,
    fontSize: 16,
    padding: "5px 10px 5px 25px",

    transition: "background-color .1s",

    "&:hover,&:active,&:focus": {
      backgroundColor: "rgba(0,0,0,.07)",
    },
  },
  searchButton: {
    border: "none",
    backgroundColor: "transparent",
    minWidth: 50,
    height: 50,
    padding: 0,
    outline: "none",

    transition: "background-color .1s",

    color: theme.subTextColor,

    "&:hover,&:active,&:focus": {
      backgroundColor: "rgba(0,0,0,.07)",
      color: theme.textColor,
    },

    "&:hover": {
      cursor: "pointer",
    },
  },
  searchIcon: {
    color: "inherit",
  },
}));

export default useSearchStyles;
