import React from "react";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { compose } from "redux";
import styles from "./styles";
import LoadingIcon from "../../assets/image/loading.gif";

const GlobalLoading = ({ classes, loading }) => (
  loading && (
  <div className={classes.globalLoading}>
    <img src={LoadingIcon} alt="loading" className={classes.icon} />
  </div>
  )
);
const mapStateToProps = (state) => ({
  loading: state.tasks.loading,
});
export default compose(withStyles(styles), connect(mapStateToProps))(GlobalLoading);
