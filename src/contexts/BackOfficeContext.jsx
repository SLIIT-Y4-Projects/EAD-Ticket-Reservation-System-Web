import { createContext, useState } from "react";
import BackOfficeAPI from "./api/BackOfficeAPI";
import makeToast from "../components/toast";

const BackOfficeContext = createContext();

export function BackOfficeProvider({ children }) {

  const [backOfficeUsers, setBackOfficeUsers] = useState([]);

  const [backOfficeUser, setBackOfficeUser] = useState({

    username: "",
    password: "",
  });


  const login = (values) => {

    BackOfficeAPI.login(values).then((response) => {
      console.log(response.data);
      localStorage.setItem("authToken", response.data);
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("permissionLevel", response.data.role);
      makeToast({ type: "success", message: "Login Successful" });
      window.location.href = "/back-office"
    })
      .catch((error) => {
        makeToast({ type: "error", message: "Invalid Email or Password" });
        console.log(error);
      });

  };


  return (
    <BackOfficeContext.Provider value={{
      backOfficeUser,
      setBackOfficeUser,
      backOfficeUsers,
      setBackOfficeUsers,
      login,

    }}>
      {children}
    </BackOfficeContext.Provider>
  );
};

export default BackOfficeContext;
