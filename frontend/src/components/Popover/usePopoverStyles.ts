import { makeStyles } from "@material-ui/styles";

interface Styles {
  left: number;
  top: number;
}

const usePopoverStyles = makeStyles({
  root: {
    position: "fixed",
    zIndex: 1300,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
  },
  content: (props: Styles) => ({
    padding: 15,
    boxShadow: "0px 1px 5px rgba(49, 48, 48, 0.2)",
    backgroundColor: "#fff",
    borderRadius: 5,

    position: "absolute",
    left: props.left,
    top: props.top,
  }),
});

export default usePopoverStyles;
