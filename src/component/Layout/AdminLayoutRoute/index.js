import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../../Dashboard";

const AdminLayoutRoute = (props) => {
  const { component: YourComponent, ...remainProps } = props;
  return (
    <Route
      {...remainProps}
      render={(routeProps) => (
        <Dashboard {...remainProps}>
          <YourComponent {...routeProps} />
        </Dashboard>
      )}
    />
  );
};
export default AdminLayoutRoute;
