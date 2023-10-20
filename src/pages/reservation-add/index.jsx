import React from "react";
import ReservationAdd from "./ReservationAdd";
import { ReservationProvider } from "../../contexts/ReservationContext";

const index = () => {

    return (
        <ReservationProvider>
            <ReservationAdd/>
        </ReservationProvider>
    );
};

export default index;