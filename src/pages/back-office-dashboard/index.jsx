import React from "react";
import BackOfficeDashboard from "./BackOfficeDashboard";

import { BackOfficeProvider } from "../../contexts/BackOfficeContext";

const index = () => {

    return (
        <BackOfficeProvider>
            <BackOfficeDashboard/>

        </BackOfficeProvider>

    );

};

export default index;