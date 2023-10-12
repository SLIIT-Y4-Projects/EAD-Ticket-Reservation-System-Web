import { createContext, useEffect, useState } from "react";
import BackOfficeAPI from "./api/BackOfficeAPI";
import makeToast from "../components/toast";

const BackOfficeContext = createContext();

export function BackOfficeProvider({ children }) {

  const [backOfficeUsers, setBackOfficeUsers] = useState([]);

  const [backOfficeUser, setBackOfficeUser] = useState({

    username: "",
    password: "",
  });

  // Back Office user Login
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

  // get back office user by ID

  const getOne = (id) => {
    useEffect(()=> {
      BackOfficeAPI.getOne(id).then((response)=> {
        setBackOfficeUser(response.data);
      });
    }, []);
  };

  // get all back office users

  useEffect(()=> {
    BackOfficeAPI.getAll().then((response)=> {
      setBackOfficeUsers(response.data);
    });
  },[]);





  return (
    <BackOfficeContext.Provider value={{
      backOfficeUser,
      setBackOfficeUser,
      backOfficeUsers,
      setBackOfficeUsers,
      login,
      getOne,

    }}>
      {children}
    </BackOfficeContext.Provider>
  );
};

export default BackOfficeContext;
