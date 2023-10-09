import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const CheckLoginStatus = () => {
  const permissionLevel = localStorage.getItem("permissionLevel");

  if (permissionLevel === "BACK_OFFICER") {
    return <Navigate to="/back-officer" />;
  }
  if (permissionLevel === "TRAVEL_AGENT") {
    return <Navigate to="/tavel-agent" />;
  }
   else {
    return <Outlet />;
  }

  // If the user is authenticated then redirect to the dashboard
  // Otherwise redirect to the login page
  // return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default CheckLoginStatus;