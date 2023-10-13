import { createContext, useState } from "react";
import UserAPI from "./api/UserAPI";
import makeToast from "../components/toast";

const UserContext = createContext();

export function UserProvider({ children }) {




    return (
        <UserContext.Provider

            value={{


            }}

        >
            {children}

        </UserContext.Provider>
    );
};

export default UserContext;