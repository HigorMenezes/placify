import { makeStyles } from "@material-ui/styles";

import { Theme } from "../../styles/theme";

const useNavigationStyles = makeStyles<Theme>((theme) => ({
  root: {
    width: "100%",
  },
  navigationButtonContainer: {
    width: "100%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: theme.subTextColor,

    borderRadius: 10,

    transition: "background-color .2s, color .2s",

    "&:hover": {
      cursor: "pointer",
      backgroundColor: "rgba(0,0,0,.1)",
      color: theme.textColor,
    },
  },
  navigationButtonText: {
    fontSize: 22,
    fontWeight: theme.fontWeight.semiBold,
  },
}));

export default useNavigationStyles;
