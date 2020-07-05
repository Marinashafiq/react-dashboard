import React, { Suspense } from "react";
import { Router, Switch } from "react-router-dom";
import history from "./history";
import * as LazyComponent from "../utlis/lazyLoaded";
import Loader from "../components/Loader/Loader";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const Routes = (
  <Suspense fallback={<Loader />}>
    <Router history={history}>
      <Switch>
        <PrivateRoute component={LazyComponent.Home} path="/" exact />
        <PrivateRoute component={LazyComponent.Login} path="/login" exact />
        <PrivateRoute component={LazyComponent.ForgetPassword} path="/forgetPassword" exact />
        <PrivateRoute component={LazyComponent.Forms} path="/forms" exact />
        <PrivateRoute component={LazyComponent.Tables} path="/tables" exact />
        <LazyComponent.NotFound path="**" title="This page doesn't exist..." exact />
      </Switch>
    </Router>
  </Suspense>
);

export default Routes;
