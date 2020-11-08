import { makeStyles } from "@material-ui/styles";

import { Theme } from "../../styles/theme";

const useAlbumCardStyles = makeStyles<Theme>((theme) => ({
  root: {},
  cardImage: {
    borderRadius: 15,
  },
  cardName: {
    margin: "0 5px",
    fontSize: 16,
    fontWeight: theme.fontWeight.semiBold,
    lineHeight: 1,
    color: theme.textColor,
    textTransform: "capitalize",
  },
  cardArtists: {
    margin: "0 5px",
    fontSize: 14,
    fontWeight: theme.fontWeight.regular,
    color: theme.subTextColor,
  },
}));

export default useAlbumCardStyles;
