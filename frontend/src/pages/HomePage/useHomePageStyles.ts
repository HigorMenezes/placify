import { makeStyles } from "@material-ui/styles";

import { Theme } from "../../styles/theme";

const useHomePageStyles = makeStyles<Theme>((theme) => ({
  headerContainer: {
    width: "100%",
    height: 50,
    margin: "15px 0px",

    display: "flex",
    justifyContent: "flex-end",
  },
  sectionContent: {
    width: "100%",
    margin: "15px 0",
  },
  title: {
    margin: "10px 5px",
    fontSize: 28,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.subTextColor,
  },
}));

export default useHomePageStyles;
