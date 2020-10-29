import { makeStyles } from "@material-ui/styles";

import { Theme } from "../../../styles/theme";

const useUserProfilePopoverStyles = makeStyles<Theme>((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  name: {
    color: theme.textColor,
    fontWeight: theme.fontWeight.semiBold,
    fontSize: 22,
    margin: 0,
  },
  email: {
    color: theme.subTextColor,
    fontSize: 14,
    margin: 0,
  },
  followersContainer: {
    marginTop: 10,
    alignSelf: "flex-end",

    display: "flex",
    alignItems: "center",

    "& > *:not(:last-child)": {
      marginRight: 5,
    },
  },
  followersQuantity: {
    color: theme.subTextColor,
    fontWeight: theme.fontWeight.semiBold,
  },
  followersIcon: {
    color: "#e5262f",
  },
}));

export default useUserProfilePopoverStyles;
