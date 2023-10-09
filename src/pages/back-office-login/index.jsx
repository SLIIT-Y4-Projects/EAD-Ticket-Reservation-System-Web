import React from "react";
import BackOfficeLogin from "./BackOfficeLogin";

import { BackOfficeProvider } from "../../contexts/BackOfficeContext";

const index = () => {

    return(
        <BackOfficeProvider>
            <BackOfficeLogin/>
        </BackOfficeProvider>
    );

};

export default index;