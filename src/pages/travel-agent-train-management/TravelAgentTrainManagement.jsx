import React, { useContext } from "react";
import TravelAgentContext from "../../contexts/TravelAgentContext";
import TrainContext from "../../contexts/TrainContext"
import { Link } from "react-router-dom";

const TravelAgentTrainManagement = () => {

    const { trains } = useContext(TrainContext);

    return (
        <>

            <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                Train Management
            </h2>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">

                    <div className="flex flex-wrap -m-4">
                        {trains.filter((elem) => elem.status == "ACTIVE")

                            .map((train) => (
                                <div className="p-4 md:w-1/3">
                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.unsplash.com/photo-1532105956626-9569c03602f6?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="blog" />
                                        <div className="p-6">
                                        <h1 className="tracking-widest text-md title-font font-medium text-gray-400 mb-1">Train</h1>
                                        <div className="flex">
                                        <div>
                                            <h1 className="title-font text-md font-medium text-gray-900 mb-3"><a className="text-blue-700">Train Number:</a> {train.trainNumber}</h1>
                                            <h1 className="title-font text-md font-medium text-gray-900 mb-3"><a className="text-blue-700">Time:</a> {train.departureTime.slice(0, 10)}</h1>
                                            <h1 className="title-font text-md font-medium text-gray-900 mb-3"><a className="text-blue-700">Capacity:</a> {train.capacity}</h1>
                                            <h1 className="title-font text-md font-medium text-gray-900 mb-3"><a className="text-blue-700">Destination:</a> {train.destination}</h1>
                                        </div>
                                            <div className="flex h-10 mt-24 items-center flex-wrap ml-20 bg-green-300 px-1 rounded-lg ">
                                                <div className="ml-0.5">
                                                <Link to={`/reservation-add/${train.id}`}>
                                                    <button>
                                                        <a className="text-green-700 inline-flex items-center md:mb-2 lg:mb-0 font-extrabold"> Book Now
                                                            <svg className="w-4 h-4 ml-2"  viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M5 12h14" />
                                                                <path d="M12 5l7 7-7 7" />
                                                            </svg>
                                                        </a>
                                                    </button>
                                                </Link>
                                                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                                                    <span className="bg-green-700 text-white py-1 px-2 rounded-full text-xs">{train.status}</span>
                                                </span>
                                                </div>

                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>

                </div>
            </section>
        </>
    );

};

export default TravelAgentTrainManagement;