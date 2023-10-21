import React from "react";
import UserEditProfile from "./UserEditProfile";
import { UserProvider } from "../../contexts/UserContext";

const index = ()=> {

    return(
        <UserProvider>
            <UserEditProfile/>
        </UserProvider>
    );

};

export default index;