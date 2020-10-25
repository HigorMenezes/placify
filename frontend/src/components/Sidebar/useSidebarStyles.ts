import { makeStyles } from "@material-ui/styles";

const useSideBarStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logoContainer: {
    display: "flex",
    alignItems: "flex-end",
    margin: 15,
    "& > *:not(:last-child)": {
      marginRight: 15,
    },
  },
  navigationContainer: {},
});

export default useSideBarStyles;
