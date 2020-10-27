import { makeStyles } from "@material-ui/styles";

import { Theme } from "../../styles/theme";

const useHomePageStyles = makeStyles<Theme>((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    border: "none",

    cursor: "pointer",

    "& > *:not(:last-child)": {
      marginRight: 10,
    },

    backgroundColor: "transparent",
  },
  userName: {
    fontSize: 20,
    color: theme.textColor,
    fontWeight: theme.fontWeight.semiBold,
  },
  userImage: {
    borderRadius: "50%",
  },
}));

export default useHomePageStyles;
