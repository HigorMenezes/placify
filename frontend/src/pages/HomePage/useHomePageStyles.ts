import { makeStyles } from "@material-ui/styles";

import { Theme } from "../../styles/theme";

const useHomePageStyles = makeStyles<Theme>((theme) => ({
  headerContainer: {
    width: "100%",
    height: 50,
    margin: "15px 0px",

    display: "flex",
    justifyContent: "flex-end",
  },
  userContainer: {
    display: "flex",
    alignItems: "center",
    "& > *:not(:last-child)": {
      marginRight: 10,
    },
  },
  userName: {
    fontSize: 22,
    color: theme.textColor,
    fontWeight: theme.fontWeight.semiBold,
  },
  userImage: {
    borderRadius: "50%",
  },
  newAlbumsContainer: {
    width: "100%",
  },
  newAlbumsContainerTitle: {
    margin: "10px 5px",
    fontSize: 28,
    fontWeight: theme.fontWeight.bold,
    color: theme.textColor,
  },
  newAlbumContent: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    columnGap: 15,
    height: "100%",
  },
  newAlbumContentItem: {},
  newAlbumContentItemImage: {
    borderRadius: 15,
  },
  newAlbumContentItemName: {
    margin: "0 5px",
    marginTop: 5,
    fontSize: 16,
    fontWeight: theme.fontWeight.semiBold,
    lineHeight: 1,
    color: theme.textColor,
    textTransform: "capitalize",
  },
  newAlbumContentItemArtist: {
    margin: "0 5px",
    fontSize: 14,
    fontWeight: theme.fontWeight.regular,
    color: theme.subTextColor,
  },
}));

export default useHomePageStyles;
