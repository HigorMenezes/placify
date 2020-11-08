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
    padding: 15,

    backgroundColor: "rgba(0,0,0,.05)",
  },
  mainContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    overflowY: "auto",
  },
  mainContent: {
    width: "100%",
    height: "fit-content",
    maxWidth: 1100,
    margin: 15,
  },
}));

export default useMainLayoutStyles;
