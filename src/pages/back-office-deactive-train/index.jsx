import React from "react";
import DeActiveTrain from "./DeactiveTrain";

import { TrainProvider } from "../../contexts/TrainContext";

const index = () => {

    return (
        <TrainProvider>
            <DeActiveTrain/>
        </TrainProvider>
    );
};

export default index;