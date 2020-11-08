import { makeStyles } from "@material-ui/styles";

import { Theme } from "../../styles/theme";

const useEmptySearchStyles = makeStyles<Theme>((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.subTextColor,
  },
}));

export default useEmptySearchStyles;
