import React from "react";
import UserRegister from "./UserRegister";
import { UserProvider } from "../../contexts/UserContext";

const index = ()=> {

    return(
        <UserProvider>
            <UserRegister/>
        </UserProvider>
    );

};

export default index;