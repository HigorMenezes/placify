import { makeStyles } from "@material-ui/styles";

import { Theme } from "../../styles/theme";

const useLoaderStyles = makeStyles<Theme>((theme) => ({
  root: {
    display: "inline-block",
    position: "relative",
    width: 80,
    height: 80,

    "& div": {
      position: "absolute",
      top: 33,
      width: 13,
      height: 13,
      borderRadius: "50%",
      background: theme.backgroundColor,
      animationTimingFunction: "cubic-bezier(0, 1, 1, 0)",
    },
    "& div:nth-child(1)": {
      left: 8,
      animation: "loader-ellipsis1 0.6s infinite",
    },
    "& div:nth-child(2)": {
      left: 8,
      animation: "loader-ellipsis2 0.6s infinite",
    },
    "& div:nth-child(3)": {
      left: 32,
      animation: "loader-ellipsis2 0.6s infinite",
    },
    "& div:nth-child(4)": {
      left: 56,
      animation: "loader-ellipsis3 0.6s infinite",
    },
  },
  "@keyframes loader-ellipsis1": {
    "0%": {
      transform: "scale(0)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
  "@keyframes loader-ellipsis3": {
    "0%": {
      transform: "scale(1)",
    },
    "100%": {
      transform: "scale(0)",
    },
  },
  "@keyframes loader-ellipsis2": {
    "0%": {
      transform: "translate(0, 0)",
    },
    "100%": {
      transform: "translate(24px, 0)",
    },
  },
}));

export default useLoaderStyles;
