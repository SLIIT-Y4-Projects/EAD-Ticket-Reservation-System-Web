import React from "react";
import TravelAgentReservationManagement from "./TravelAgentReservationManagement";
import { ReservationProvider } from "../../contexts/ReservationContext";

const index = () => {

    return (
        <ReservationProvider>
            <TravelAgentReservationManagement />
        </ReservationProvider>
    );
};

export default index;
