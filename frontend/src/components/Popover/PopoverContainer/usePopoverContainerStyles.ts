import { makeStyles } from "@material-ui/styles";

const usePopoverContainerStyles = makeStyles({
  root: {
    position: "fixed",
    zIndex: 1300,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
  },
});

export default usePopoverContainerStyles;
