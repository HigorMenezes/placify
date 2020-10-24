import { makeStyles } from "@material-ui/styles";

import { Theme } from "../../styles/theme";

const useGradientButtonStyles = makeStyles<Theme>((theme) => ({
  root: {
    boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.25)",
    borderRadius: 10,
    background: theme.PrimaryColor.gradient,
    width: "100%",
    height: 40,
    border: "none",
    cursor: "pointer",

    fontSize: 16,
    fontWeight: 600,
    color: "#FFFFFF",

    transition: "filter .2s",

    "&:hover": {
      filter: "brightness(1.1)",
    },
  },
}));

export default useGradientButtonStyles;
