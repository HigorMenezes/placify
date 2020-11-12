import { makeStyles } from "@material-ui/styles";

import { Theme } from "../../styles/theme";

const useAlbumPageStyles = makeStyles<Theme>((theme) => ({
  title: {
    margin: "15px 5px 5px",
    fontSize: 28,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.subTextColor,
  },
  sectionContent: {
    width: "100%",
    margin: "15px 0",
  },
  albumsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    columnGap: "15px",
    rowGap: "25px",
  },
  emptyResult: {},
  fetchMoreContainer: {
    margin: "20px 0px",
    display: "flex",
    justifyContent: "flex-end",
  },
  fetchMoreButton: {
    padding: "5px 20px",
    height: 40,
    borderRadius: 5,
    border: "none",
    cursor: "pointer",
    backgroundColor: theme.PrimaryColor.backgroundColor,

    color: theme.PrimaryColor.contrastColor,
    fontWeight: theme.fontWeight.semiBold,
    fontSize: 16,

    "&:hover": {
      filter: "brightness(1.1)",
    },
  },
}));

export default useAlbumPageStyles;
