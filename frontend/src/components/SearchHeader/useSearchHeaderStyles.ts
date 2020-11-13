import { makeStyles } from "@material-ui/styles";

const useSearchHeaderStyles = makeStyles({
  root: {
    width: "100%",
    height: 50,
    margin: "15px 0px",

    display: "flex",
    justifyContent: "space-between",

    "& > *:not(:last-child)": {
      marginRight: 25,
    },
  },
});

export default useSearchHeaderStyles;
