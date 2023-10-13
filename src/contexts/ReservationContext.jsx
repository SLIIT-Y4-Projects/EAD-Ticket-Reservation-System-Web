import { createContext, useEffect, useState } from "react";
import ReservationAPI from "./api/ReservationAPI";
import makeToast from "../components/toast";

const ReservationContext = createContext();

export function ReservationProvider({ children}) {

    const [reservations, setReservations] = useState([]);

    const [reservation, setReservation] = useState({
        reservation : "",
        status: "",
        passengerId: "",
        trainId: "",
    });

      // get all reservations

  useEffect(() => {
    ReservationAPI.getAll().then((response) => {
        setReservations(response.data);
    });
  }, []);

  // get reservation by id

  const getOne = (id) => {
    useEffect(() => {
        ReservationAPI.getOne(id).then((response) => {
            setReservation(response.data);
      });
    }, []);
  };





    return (
        <ReservationContext.Provider
        
            value={{
                reservation,
                setReservation,
                reservations,
                setReservations,
                getOne,

            }}
        
        >
            {children}


        </ReservationContext.Provider>
    );
};

export default ReservationContext;