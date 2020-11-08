import { makeStyles } from "@material-ui/styles";

import { Theme } from "../../styles/theme";

const useAlbumPageStyles = makeStyles<Theme>((theme) => ({
  headerContainer: {
    width: "100%",
    height: 50,
    margin: "15px 0px",

    display: "flex",
    justifyContent: "space-between",

    "& > *:not(:last-child)": {
      marginRight: 25,
    },
  },
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
}));

export default useAlbumPageStyles;
