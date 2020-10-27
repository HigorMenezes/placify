import { makeStyles } from "@material-ui/styles";

import { Theme } from "../../styles/theme";

const useHomePageStyles = makeStyles<Theme>((theme) => ({
  headerContainer: {
    width: "100%",
    height: 50,
    margin: "15px 0px",

    display: "flex",
    justifyContent: "flex-end",
  },
  newAlbumsContainer: {
    width: "100%",
  },
  newAlbumsContainerTitle: {
    margin: "10px 5px",
    fontSize: 28,
    fontWeight: theme.fontWeight.bold,
    color: theme.textColor,
  },
  newAlbumContent: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    columnGap: 15,
    height: "100%",
  },
}));

export default useHomePageStyles;
