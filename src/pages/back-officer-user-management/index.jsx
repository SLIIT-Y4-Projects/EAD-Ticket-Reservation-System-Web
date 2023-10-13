import React from "react";
import UserManagement from "./UserManagement";

import { UserProvider } from "../../contexts/UserContext";

const index = () => {

    return (
        <UserProvider>
            <UserManagement/>
        </UserProvider>
    );
};

export default index;