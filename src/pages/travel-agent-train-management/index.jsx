import React from "react";
import TravelAgentTrainManagement from "./TravelAgentTrainManagement";
import { TravelAgentProvider } from "../../contexts/TravelAgentContext";
import { TrainProvider } from "../../contexts/TrainContext";

const index = () => {

    return (

        <TrainProvider>
            <TravelAgentProvider>
                <TravelAgentTrainManagement />
            </TravelAgentProvider>
        </TrainProvider>
    );

};

export default index;