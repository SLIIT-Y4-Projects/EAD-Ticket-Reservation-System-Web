import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import CheckLoginStatus from "./CheckLoginStatus";
import Header from "../components/Header";

import { 
  Home,
  TravelAgentLogin,
  TravelAgentRegister,
  BackOfficeLogin,
  ViewAllSamples,
  SampleCreateUser,
  BackOfficeDashboard,
  TravelAgentDashboard,
  UserManagement,
  TrainManagement,
  CreateTrain,
  DeActiveUsers,
  DeActiveTrains,
  EditTrain,
  TrainList,
  AllReservation,
  ReservationAdd,
  TravelAgentTrainManagement,
  UserRegister,

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

          {/*Sample Public Routes */}
          <Route path="/sample" element={<ViewAllSamples />} />
          <Route path="/create" element={<SampleCreateUser />} />

          <Route path="/dashboard" element={<BackOfficeDashboard />} />

          {/* Travel Agent Routes */}
          <Route path="/travel-agent/login" element={<CheckLoginStatus />}>
          <Route path="/travel-agent/login" element={<TravelAgentLogin />} />
          </Route>

          {/* Travel Agent private routes */}
          <Route exact path="/travel-agent"element={<PrivateRoute permissionLevel="TRAVEL_AGENT" />}>
          <Route path="/travel-agent" element={< TravelAgentDashboard />} />
          <Route path="/travel-agent/train/details" element={< TravelAgentTrainManagement />} />
          <Route path="/travel-agent/user/create" element={<  UserRegister />} />
            </Route>



          {/* Back Office Routes */}
          <Route path="/back-office/login" element={<CheckLoginStatus />}>
          <Route path="/back-office/login" element={<BackOfficeLogin />} />
          </Route>

          {/* Back office Private Routes */}
          <Route exact path="/back-office"element={<PrivateRoute permissionLevel="BACK_OFFICE" />}>
          <Route path="/back-office" element={<BackOfficeDashboard />} />
          <Route path="/back-office/user-management" element={<UserManagement />} />
          <Route path="/back-office/train-management" element={< TrainManagement />} />
          <Route path="/back-office/train-create" element={< CreateTrain />} />
          <Route path="/back-office/de-active/users" element={< DeActiveUsers />} />
          <Route path="/back-office/cancel/trains" element={< DeActiveTrains />} />
          <Route path="/back-office/trains-edit/:id" element={< EditTrain />} />
          <Route path="/back-office/reservations" element={< AllReservation />} />
          <Route path="/back-office/user/create" element={<  UserRegister />} />
          </Route>

          <Route>
          <Route path="/train-list" element={< TrainList />} />
          </Route>
          <Route>
          <Route path="/reservation-add/:id" element={< ReservationAdd />} />
          </Route>

        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
