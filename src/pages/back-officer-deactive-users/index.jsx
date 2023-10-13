import React from "react";
import DeActiveUsers from "./DeactiveUsers";

import { UserProvider } from "../../contexts/UserContext";

const index = () => {
    return(
        <UserProvider>
            <DeActiveUsers/>
        </UserProvider>
    );

};

export default index;