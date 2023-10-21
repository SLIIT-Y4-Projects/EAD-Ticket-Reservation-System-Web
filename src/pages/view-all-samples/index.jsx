import React from "react";
import ViewAllSamples from "./ViewAllSamples";

import { SampleProvider } from "../../contexts/SampleContext";

const index = () => {

    return (
    <SampleProvider>
        <ViewAllSamples/>
    </SampleProvider>
    );
};

export default index;