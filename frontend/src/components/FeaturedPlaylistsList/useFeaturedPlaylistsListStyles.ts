import { makeStyles } from "@material-ui/styles";

const useFeaturedPlaylistsListStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    columnGap: 15,
    height: "100%",
  },
});

export default useFeaturedPlaylistsListStyles;
