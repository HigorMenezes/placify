import { makeStyles } from "@material-ui/styles";

import { Theme } from "../../styles/theme";

const useFetchMoreButtonStyles = makeStyles<Theme>((theme) => ({
  root: {
    margin: "20px 0px",
    display: "flex",
    justifyContent: "flex-end",
  },
  fetchMoreButton: {
    padding: "5px 20px",
    height: 40,
    borderRadius: 5,
    border: "none",
    cursor: "pointer",
    backgroundColor: theme.PrimaryColor.backgroundColor,

    color: theme.PrimaryColor.contrastColor,
    fontWeight: theme.fontWeight.semiBold,
    fontSize: 16,

    "&:hover": {
      filter: "brightness(1.1)",
    },
  },
}));

export default useFetchMoreButtonStyles;
