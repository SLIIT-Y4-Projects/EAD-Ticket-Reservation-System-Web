import React from "react";
import AllReservation from "./AllReservation";
import { BackOfficeProvider } from "../../contexts/BackOfficeContext";
import { ReservationProvider } from "../../contexts/ReservationContext";

const index = () => {

    return (
        <ReservationProvider>
            <BackOfficeProvider>
                <AllReservation />
            </BackOfficeProvider>
        </ReservationProvider>
    );

};

export default index;