import React from "react";
import TravelAgentRegister from "./TravelAgentRegister";

import { TravelAgentProvider } from "../../contexts/TravelAgentContext";

const index = () => {
  return (
    <TravelAgentProvider>
      <TravelAgentRegister />
    </TravelAgentProvider>
  );
};

export default index;
