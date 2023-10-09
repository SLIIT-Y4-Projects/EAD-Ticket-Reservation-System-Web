import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import CheckLoginStatus from "./CheckLoginStatus";
import Header from "../components/Header";

import { 
  Home,
  TravelAgentLogin,
  TravelAgentRegister,


} from "../pages";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          {/*Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/travel-agent/register" element={<TravelAgentRegister />} />

          {/* Travel Agent Routes */}
          <Route path="/travel-agent/login" element={<CheckLoginStatus />}>
          <Route path="/travel-agent/login" element={<TravelAgentLogin />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
