import { makeStyles } from "@material-ui/styles";

const useHomePageStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    border: "none",

    cursor: "pointer",

    "& > *:not(:last-child)": {
      marginRight: 10,
    },

    backgroundColor: "transparent",
  },
  userImage: {
    borderRadius: "50%",
  },
});

export default useHomePageStyles;
