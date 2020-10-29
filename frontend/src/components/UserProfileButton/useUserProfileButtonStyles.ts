import { makeStyles } from "@material-ui/styles";

const useHomePageStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    border: "none",
    borderRadius: 10,
    backgroundColor: "transparent",
    cursor: "pointer",

    "& > *:not(:last-child)": {
      marginRight: 10,
    },

    "&:hover, &:active, &:focus": {
      backgroundColor: "rgba(0,0,0,.1)",
    },
  },
  userImage: {
    borderRadius: "50%",
  },
});

export default useHomePageStyles;
