import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router";
import auth from "./services/Auth";
export default function PrivateRoute({ component: Component, ...rest }) {
  const [access, setAccess] = useState(
    localStorage.getItem("profileAccess") === "true"
  );

  return (
    <Route
      {...rest}
      render={(props) =>
        access ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
