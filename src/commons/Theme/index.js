import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  color: {
    primary: "#303F9F",
    secondary: "#009688",
    error: "#D32F2F",
    textColor: "#fff",
    defaultTextColor: "#111111",
    hover: "rgba(0,0,0,0.08)",
  },
  typography: {
    fontFamily: "Roboto",
  },
  shape: {
    borderRadius: 4,
    backgroundColor: "#3F51B5",
    textColor: "#111111",
    border: "CCCCCCC",
  },
});

export default theme;
