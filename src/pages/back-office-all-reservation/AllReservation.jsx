import React, { useContext,useState } from "react";
import BackOfficeContext from "../../contexts/BackOfficeContext";
import ReservationContext from "../../contexts/ReservationContext";
import { Link } from "react-router-dom";
import makeToast from "../../components/toast";


const AllReservation = () => {

    const { reservations , cancelReservation } = useContext(ReservationContext);
    const [id, setId] = useState(null);

      // Calculate the date difference in days
      const dateDiffInDays = (date1, date2) => {
        const diffInTime = new Date(date1) - new Date(date2);
        return diffInTime / (1000 * 3600 * 24);
    };

    // Function to handle the cancel reservation based on date difference
    const handleCancelReservation = (elem) => {
        const systemDate = new Date(); // Get the current system date
        const reservationDate = new Date(elem.reservationDate);

        const daysDifference = dateDiffInDays(reservationDate, systemDate);

        if (daysDifference >= 5) {
            // If the date difference is greater than or equal to 5 days, then cancel the reservation
            cancelReservation(elem.id);
            makeToast({ type: "success", message: "Reservation Cancelled 1" });
        } else {
            makeToast({ type: "error", message: "Cant cancel reservations in last five days..!" });
        }
    };




    return (
        <>

            <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                Ticket Reservation Details
            </h2>
            <form className="mt-10 mx-auto max-w-xl py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300">
                <input type="text" placeholder="Search anything" className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0" name="topic" /><button className="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full font-medium tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] -mr-3">
                    Search
                </button>
            </form>

            {/* component */}
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Reservation Date</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Status</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Passenger ID</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Train ID</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {reservations.map((elem) => (


                            <tr className="hover:bg-gray-50">
                                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">

                                    <div className="text-sm">
                                        <div className="font-medium text-gray-700">{elem.reservationDate.slice(0, 10)}</div>

                                    </div>
                                </th>

                                <td className="px-6 py-4">
                                    <div>
                                        {elem.status == "ACTIVE" ? (
                                            <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                                                <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                                                {elem.status}
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
                                                <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                                                {elem.status}
                                            </span>
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-sm">
                                        <div className="font-medium text-gray-700">{elem.passengerId}</div>

                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-sm">
                                        <div className="font-medium text-gray-700">{elem.trainId}</div>

                                    </div>
                                </td>
                                <td className="px-6 py-4">

{id === elem.id ? (
    <div>
        <form onSubmit={handleSubmit}>
            {/* eslint-disable-next-line no-console */}
            {console.log(elem.id)}
            <select name="status" id="status" defaultValue={elem.status}>
                <option value="ACCEPT">Activate</option>
            </select>
            <div>
                <button
                    className="bg-green-500 p-1 rounded-sm text-white"
                    type="submit"
                    value="Submit"
                >
                    change Status
                </button>
            </div>
        </form>
    </div>
) : (
    <div>
        <div>{elem.status}</div>
        <button
            className="bg-red-500 p-1 rounded-sm text-white"
            onClick={() => handleCancelReservation(elem)}
        >
            change
        </button>
    </div>
)}
</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



        </>
    );

};
export default AllReservation;