import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const CheckLoginStatus = () => {
  const permissionLevel = localStorage.getItem("permissionLevel");

  if (permissionLevel === "BACK_OFFICE") {
    return <Navigate to="/back-office" />;
  }
  if (permissionLevel === "TRAVEL_AGENT") {
    return <Navigate to="/travel-agent" />;
  }
   else {
    return <Outlet />;
  }

  // If the user is authenticated then redirect to the dashboard
  // Otherwise redirect to the login page
  // return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default CheckLoginStatus;