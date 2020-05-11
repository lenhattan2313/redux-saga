import theme from "../../../commons/Theme";

const styles = () => ({
  drawerPaper: {
    width: 240,
    zIndex: 100,
    maxWidth: 240,
    height: "100%",
    position: "relative",
  },
  menuLink: {
    textDecoration: "none",
    color: theme.color.defaultTextColor,
  },
  menuLinkActive: {
    "&>div": {
      backgroundColor: theme.color.hover,
    },
  },
});
export default styles;
