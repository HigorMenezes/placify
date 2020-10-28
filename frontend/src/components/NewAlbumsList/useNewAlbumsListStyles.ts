import { makeStyles } from "@material-ui/styles";

const useNewAlbumsListStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    columnGap: 15,
    height: "100%",
  },
});

export default useNewAlbumsListStyles;
