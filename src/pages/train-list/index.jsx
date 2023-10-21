import React from "react";
import TrainList
 from "./TrainList";
import { TrainProvider } from "../../contexts/TrainContext";

const index = () => {

    return (
        <TrainProvider>
            <TrainList/>
        </TrainProvider>
    );
};

export default index;