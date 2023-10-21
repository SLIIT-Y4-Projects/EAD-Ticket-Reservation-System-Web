import React from "react";
import CreateTrain from "./CreateTrain";

import { TrainProvider } from "../../contexts/TrainContext";

const index = () => {

    return (
        <TrainProvider>
            <CreateTrain />
        </TrainProvider>
    );

};

export default index;