import { makeStyles } from "@material-ui/styles";

import { Theme } from "../../styles/theme";

const usePlaylistCardStyles = makeStyles<Theme>((theme) => ({
  root: {},
  cardImage: {
    borderRadius: 15,
  },
  cardName: {
    margin: "0 5px",
    marginTop: 5,
    fontSize: 16,
    fontWeight: theme.fontWeight.semiBold,
    lineHeight: 1,
    color: theme.textColor,
    textTransform: "capitalize",
  },
}));

export default usePlaylistCardStyles;
