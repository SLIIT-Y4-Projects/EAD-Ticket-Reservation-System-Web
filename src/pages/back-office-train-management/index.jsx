import React from "react";
import TrainManagement from "./TrainManagement";

import { TrainProvider } from "../../contexts/TrainContext";

const index = () => {

    return (
        <TrainProvider>
            <TrainManagement/>
        </TrainProvider>
    );
};

export default index;