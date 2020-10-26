import { makeStyles } from "@material-ui/styles";

import { Theme } from "../../styles/theme";

const usePlacifyTitleStyles = makeStyles<Theme>((theme) => ({
  root: {
    fontFamily: "Signika",
    fontSize: 42,
    lineHeight: 1,
    color: theme.subTextColor,
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
}));

export default usePlacifyTitleStyles;
