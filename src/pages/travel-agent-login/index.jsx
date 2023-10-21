import React from "react";
import TravelAgentLogin from "./TravelAgentLogin";

import { TravelAgentProvider } from "../../contexts/TravelAgentContext";

const index = () => {
  return (
    <TravelAgentProvider>
      <TravelAgentLogin />
    </TravelAgentProvider>
  );
};

export default index;
