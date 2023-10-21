import React from "react";
import TravelAgentUserManagement from "./TravelAgentUserManagement";

import { UserProvider } from "../../contexts/UserContext";

const index = () => {

    return (
        <UserProvider>
            <TravelAgentUserManagement />
        </UserProvider>
    );
};

export default index;