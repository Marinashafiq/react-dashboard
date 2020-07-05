import React from "react";

export const Home = React.lazy(() => import('../containers/Dashboard/Home/Home'));
export const Login = React.lazy(() => import('../containers/Auth/Login/Login'));
export const Forms = React.lazy(() => import('../containers/Dashboard/Forms/Forms'));
export const Tables = React.lazy(() => import('../containers/Dashboard/Tables/Table'));
export const NotFound = React.lazy(() => import('../components/NotFound/NotFound'));

