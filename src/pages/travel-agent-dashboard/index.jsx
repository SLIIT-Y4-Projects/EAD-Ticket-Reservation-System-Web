import React from "react";
import TravelAgentDashboard from "./TravelAgentDashboard";

import { TravelAgentProvider } from "../../contexts/TravelAgentContext";

const index = () => {

    return (
        <TravelAgentProvider>
            <TravelAgentDashboard />
        </TravelAgentProvider>
    );

};

export default index;