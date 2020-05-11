import React from "react";
import { withStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";

import { compose } from "redux";
import styles from "./styles";

const SearchBox = ({ classes, handleChange }) => (
  <form className={classes.container} noValidate autoComplete="off">
    <TextField
      className={classes.textField}
      id="standard-basic"
      label="Standard"
      onChange={handleChange}
    />
  </form>
);

export default compose(withStyles(styles))(SearchBox);
