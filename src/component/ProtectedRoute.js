import React from "react";
import { Redirect, Route } from "react-router";

export default function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        <Component {...props} />;

        // <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      }}
    />
  );
}
