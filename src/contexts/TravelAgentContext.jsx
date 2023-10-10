import { createContext } from "react";
import TravelAgentAPI from "./api/TravelAgentAPI";
import makeToast from "../components/toast";

const TravelAgentContext = createContext();

export function TravelAgentProvider  ({ children })  {
  return (
    <TravelAgentContext.Provider value={{}}>
      {children}
    </TravelAgentContext.Provider>
  );
};
export default TravelAgentContext;
