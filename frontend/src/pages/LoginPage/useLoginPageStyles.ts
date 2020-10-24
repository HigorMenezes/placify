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
  },
  logoTitle: {
    fontFamily: "Signika",
    fontSize: 42,
    color: "#5A5A5A",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  signInContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  signInText: {
    fontSize: 16,
    color: "#A5A5A5",
    margin: 8,
  },
  signInButton: {
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

export default useLoginPageStyles;
