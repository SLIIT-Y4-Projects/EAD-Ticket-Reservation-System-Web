import { createContext, useState, useEffect } from "react";
import TravelAgentAPI from "./api/TravelAgentAPI";
import makeToast from "../components/toast";

const TravelAgentContext = createContext();

export function TravelAgentProvider({ children }) {

  const [travelAgents, setTravelAgents] = useState([]);

  const [travelAgent, setTravelAgent] = useState({

    fullName: "",
    username: "",
    password: "",


  });

  // Travel Agent Login 

  const login = (values) => {
    TravelAgentAPI.login(values).then((response) => {
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("permissionLevel", response.data.role);

      makeToast({ type: "success", message: "Login Successful" });
      window.location.href = "/travel-agent"
    })
      .catch((error) => {
        makeToast({ type: "error", message: "Invalid User Name or Password" });
        console.log(error);
      });
  };

  const register = async (values) => {
    TravelAgentAPI.register(values)
      .then((response) => {
        setTravelAgents([...travelAgents, response.data]);
        makeToast({ type: "success", message: "Registration successful" });
        window.location.href = "/travel-agent/login";
      })
      .catch((error) => {
        makeToast({ type: "error", message: "Invalid details" });
      });
  };

  // get Travel Agent user by ID

  const getOne = (id) => {
    useEffect(() => {
      TravelAgentAPI.getOne(id).then((response) => {
        setTravelAgent(response.data);
      });
    }, []);
  };

   // get all Travel Agent

   useEffect(() => {
    TravelAgentAPI.getAll().then((response) => {
      setTravelAgents(response.data);
    });
  }, []);




  return (
    <TravelAgentContext.Provider value={{
      travelAgent,
      travelAgents,
      setTravelAgent,
      setTravelAgents,
      login,
      register,
      getOne,


    }}>
      {children}
    </TravelAgentContext.Provider>
  );
};
export default TravelAgentContext;
