import { createContext, useState } from "react";
import TravelAgentAPI from "./api/TravelAgentAPI";
import makeToast from "../components/toast";

const TravelAgentContext = createContext();

export function TravelAgentProvider  ({ children })  {

    const [travelAgents, setTravelAgents] = useState([]);

    const [travelAgent, setTravelAgent] = useState({

    });

    // Travel Agent Login 

    const login = (values) => {
        TravelAgentAPI.login(values).then((response)=> {
          localStorage.setItem("authToken", response.data);
          localStorage.setItem("username", response.data.username);
          makeToast({ type: "success", message: "Login Successful" });
          window.location.href = "/travel-agent"
        })
        .catch((error) => {
          makeToast({ type: "error", message: "Invalid Email or Password" });
          console.log(error);
        });
    };


  return (
    <TravelAgentContext.Provider value={{}}>
      {children}
    </TravelAgentContext.Provider>
  );
};
export default TravelAgentContext;
