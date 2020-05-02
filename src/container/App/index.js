import React from "react";
import styles from "./styles.js";
import { withStyles, ThemeProvider } from "@material-ui/core";
import TaskBoard from "../TaskBoard/index.js";
import theme from "../../commons/Theme";
function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <TaskBoard />
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);
