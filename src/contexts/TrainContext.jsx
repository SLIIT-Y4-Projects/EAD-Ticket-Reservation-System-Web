import { createContext, useState } from "react";
import TrainAPI from "./api/TrainAPI";
import makeToast from "../components/toast";

const TrainContext = createContext();

export function TrainProvider({ children }) {




    return (

        <TrainContext.Provider
            value={{



            }}

        >

            {children}

        </TrainContext.Provider>


    );

};

export default TrainContext;