import { createContext, useEffect, useState } from "react";
import ReservationAPI from "./api/ReservationAPI";
import makeToast from "../components/toast";

const ReservationContext = createContext();

export function ReservationProvider({ children }) {

    const [reservations, setReservations] = useState([]);

    const [reservation, setReservation] = useState({
        reservationDate: "",
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

    // Create Reservation
    const createReservation = async (values) => {
        try {
            const response = await ReservationAPI.create(values);
            setReservations([...reservations, response.data]);
            makeToast({ type: "success", message: "Reservation successful" });
        } catch (error) {
            console.log(error);
        }
    };

    // Delete Reservation
    const deleteReservation = (id) => {
        ReservationAPI.deleteReservation(id).then(() => {
            setReservations(reservations.filter((reservation) => reservation.id !== id));
            makeToast({ type: "success", message: "Reservation Deleted Successful" });
            window.location.href = "#"
        });
    };

    // Edit Reservation
    const editReservation = (values) => {
        const newReservation = {
            id: values.id,
            reservationDate: values.reservationDate,
        };
        ReservationAPI.edit(values.id, newReservation)
            .then((response) => {
                makeToast({ type: "success", message: "Reservation Updated Successful" });
                window.location.href = "#"
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <ReservationContext.Provider

            value={{
                reservation,
                setReservation,
                reservations,
                setReservations,
                getOne,
                createReservation,
                deleteReservation,
                editReservation,

            }}

        >
            {children}


        </ReservationContext.Provider>
    );
};

export default ReservationContext;