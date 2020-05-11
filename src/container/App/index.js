import React from "react";
import { withStyles, ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import styles from "./styles";
import theme from "../../commons/Theme";
import store from "../../redux/store";
import "react-toastify/dist/ReactToastify.css";
import GlobalLoading from "../../component/GlobalLoading";
import ModalCommon from "../../component/Modal";
import { ADMIN_ROUTES, ROUTES } from "../../constant";
import AdminLayoutRoute from "../../component/Layout/AdminLayoutRoute";
import DefaultLayoutRoute from "../../component/Layout/DefaultLayoutRoute";

function App() {
  const renderAdminRoute = () => {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map((route) => (
      <AdminLayoutRoute
        key={route.path}
        component={route.component}
        exact={route.exact}
        path={route.path}
        name={route.name}
      />
    ));
    return xhtml;
  };
  const renderDefaultRoute = () => {
    let xhtml = null;
    xhtml = ROUTES.map((route) => (
      <DefaultLayoutRoute
        key={route.path}
        component={route.component}
        path={route.path}
        name={route.name}
      />
    ));
    return xhtml;
  };
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <ToastContainer />
            <ModalCommon />
            <Switch>
              {renderAdminRoute()}
              {renderDefaultRoute()}
            </Switch>
          </CssBaseline>
        </ThemeProvider>
        <GlobalLoading />
      </Router>
    </Provider>
  );
}

export default withStyles(styles)(App);
