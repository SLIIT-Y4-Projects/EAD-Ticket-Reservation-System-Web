import React from "react";
import SampleCreateUser from "./SampleCreateUser";

import { SampleProvider } from "../../contexts/SampleContext";

const index = () => {

    return (
        <SampleProvider>
            <SampleCreateUser/>
        </SampleProvider>
    );

};

export default index;