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
  divider: {
    width: "100%",
    color: "rgba(0,0,0,.1)",
    backgroundColor: "rgba(0,0,0,.1)",
  },
  navigationContainer: {
    padding: "15px 5px",
    width: "100%",
  },
});

export default useSideBarStyles;
