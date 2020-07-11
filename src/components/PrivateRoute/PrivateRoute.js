import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "../../utlis/auth";
import MainLayout from "../../containers/Dashboard/MainLayout/MainLayout";

export const MainLayoutWrapper = (component) => {
  return <MainLayout>{component}</MainLayout>;
};

export const NoLayout = (component) => {
  return <>{component}</>;
};

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        Auth.isAuth()
          ? path.split("/")[1] === "login" ||
            path.split("/")[1] === "forgetPassword" ||
            path.split("/")[1] === "resetPassword"
            ? MainLayoutWrapper(<Redirect to="/" />)
            : MainLayoutWrapper(<Component {...props} />)
          : path.split("/")[1] === "login" ||
            path.split("/")[1] === "forgetPassword" ||
            path.split("/")[1] === "resetPassword"
          ? NoLayout(<Component {...props} />)
          : NoLayout(<Redirect to={{ pathname: "/login" }} />)
      }
    />
  );
};

export default PrivateRoute;
