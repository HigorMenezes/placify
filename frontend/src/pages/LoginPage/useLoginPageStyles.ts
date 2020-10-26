import { makeStyles } from "@material-ui/styles";
import { Theme } from "../../styles/theme";

const useLoginPageStyles = makeStyles<Theme>((theme) => ({
  root: {
    backgroundColor: theme.backgroundColor,
    width: "100vw",
    height: "100vh",
    display: "flex",
  },
  container: {
    width: 450,
    height: 400,
    margin: "50px auto",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",

    background: "#FAFAFA",
    boxShadow: "0px 1px 5px rgba(49, 48, 48, 0.2)",
    borderRadius: 10,
    padding: 15,
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *:not(:last-child)": {
      marginBottom: 15,
    },
  },
  signInContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  signInText: {
    fontSize: 16,
    color: theme.subTextColor,
    margin: 8,
  },
}));

export default useLoginPageStyles;
