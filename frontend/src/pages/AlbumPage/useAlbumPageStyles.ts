import { makeStyles } from "@material-ui/styles";

const useAlbumPageStyles = makeStyles({
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
  sectionContent: {
    width: "100%",
    margin: "15px 0",
  },
  albumsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    columnGap: "15px",
    rowGap: "15px",
  },
  emptyResult: {},
});

export default useAlbumPageStyles;
