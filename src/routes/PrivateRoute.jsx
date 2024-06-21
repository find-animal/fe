import React from "react";
import Layout from "../components/Layout";
import {Navigate} from "react-router-dom";

export function PrivateRoute() {
  const isLogin = localStorage.getItem("userId");

  if (isLogin) {
    return <Layout />;
  }

  return <Navigate to={"/login"} />;
}
