import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import CheckLoginStatus from "./CheckLoginStatus";
import Header from "../components/Header";

import { Home } from "../pages";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          {/*Public Routes */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
