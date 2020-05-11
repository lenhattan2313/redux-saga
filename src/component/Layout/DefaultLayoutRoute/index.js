import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../../Dashboard";

const DefaultLayoutRoute = (props) => {
  const { component: YourComponent, ...remainProps } = props;
  return <Route {...remainProps} render={(routeProps) => <YourComponent {...routeProps} />} />;
};
export default DefaultLayoutRoute;
