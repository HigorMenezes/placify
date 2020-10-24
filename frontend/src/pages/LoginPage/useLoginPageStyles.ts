import { makeStyles } from "@material-ui/styles";
import { Theme } from "../../styles/theme";

interface Styles {
  textColor: string;
}

const useLoginPageStyles = makeStyles<Theme, Styles>((theme) => ({
  root: (props) => ({
    backgroundColor: theme.backgroundColor,
    color: props.textColor,
  }),
}));

export default useLoginPageStyles;
