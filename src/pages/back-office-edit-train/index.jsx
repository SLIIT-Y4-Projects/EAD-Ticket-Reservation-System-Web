import React from "react";
import EditTrain from "./EditTrain";

import { TrainProvider } from "../../contexts/TrainContext";

const index = () => {

    return(
        <TrainProvider>
            <EditTrain/>
        </TrainProvider>
    );

};

export default index;