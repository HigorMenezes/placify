import { makeStyles } from "@material-ui/styles";

import { Theme } from "../../styles/theme";

const useMainLayoutStyles = makeStyles<Theme>((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",

    display: "flex",

    backgroundColor: theme.backgroundColor,
  },
  sidebarContainer: {
    width: 350,
    height: "100%",
  },
  mainContainer: {
    width: "100%",
    height: "100%",

    overflowY: "auto",
  },
}));

export default useMainLayoutStyles;
