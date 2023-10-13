import React, { useContext } from "react";
import TrainContext from "../../contexts/TrainContext"
import { Link } from "react-router-dom";

const TrainList = () => {

    const {trains, deleteTrain} = useContext(TrainContext);

    return (
        <>

            <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                Train Management
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
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Train Number</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Departure Time</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Status</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Capacity</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                         {trains.filter((elem) => elem.status == "ACTIVE")

                            .map((elem) => ( 
                        <tr className="hover:bg-gray-50">
                            <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">

                                <div className="text-sm">
                                    <div className="font-medium text-gray-700">{elem.trainNumber}</div>

                                </div>
                            </th>
                            <td className="px-6 py-4">
                                <div className="text-sm">
                                    <div className="font-medium text-gray-700">{elem.departureTime.slice(0,10)}</div>

                                </div>
                            </td>
                            <td className="px-6 py-4">

                                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                                    <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                                        {elem.status}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm">
                                    <div className="font-medium text-gray-700">{elem.capacity}</div>

                                </div>
                            </td>

                            <td>
                                <div className="bg-blue-400 w-24 items-center font-semibold py-1 rounded-lg ">
                                <Link to={"#"} className="ml-4 text-white"> Book Now</Link>     
                                </div>
                                                                                 
                            </td>

                        </tr>
                         ))}
                    </tbody>
                </table>
            </div>
            <Link to="/back-office/cancel/trains">
                <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800 ml-8">
                    Cancel Trains
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </Link>


        </>
    );

};

export default TrainList;