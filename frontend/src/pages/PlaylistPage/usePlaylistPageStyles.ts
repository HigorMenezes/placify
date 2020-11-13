import { makeStyles } from "@material-ui/styles";

import { Theme } from "../../styles/theme";

const usePlaylistPageStyles = makeStyles<Theme>((theme) => ({
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
}));

export default usePlaylistPageStyles;
