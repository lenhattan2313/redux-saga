import React from "react";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import cn from "classnames";
import styles from "./styles";
import Header from "./Header";
import Sidebar from "./Sidebar";
import * as dashboardAction from "../../actions/dashboard";

const Dashboard = ({
  classes, name, children, showSidebar, dashboardActionCreator,
}) => {
  const handleToggleSidebar = (value) => {
    const { showSidebar, hideSidebar } = dashboardActionCreator;
    if (value === true) {
      showSidebar();
    } else {
      hideSidebar();
    }
  };
  return (
    <div className={classes.dashboard}>
      <Header name={name} showSidebar={showSidebar} onToggleSidebar={handleToggleSidebar} />
      <div className={classes.wrapper}>
        <Sidebar showSidebar={showSidebar} onToggleSidebar={handleToggleSidebar} />
        <div className={cn(classes.wrapperContent, { [classes.shiftLeft]: showSidebar === false })}>
          {children}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  showSidebar: state.dashboard.showSidebar,
});
const mapDispatchToProps = (dispatch) => ({
  dashboardActionCreator: bindActionCreators(dashboardAction, dispatch),
});
export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(Dashboard);
