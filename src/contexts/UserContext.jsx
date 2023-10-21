import { createContext, useState, useEffect } from "react";
import UserAPI from "./api/UserAPI";
import makeToast from "../components/toast";

const UserContext = createContext();

export function UserProvider({ children }) {

  const [users, setUsers] = useState([]);

  const [user, setUser] = useState({

    username: "",
    password: "",
    fullName: "",
    status: "",

  });

  // User Login

  const login = (values) => {
    UserAPI.login(values).then((response) => {
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("username", response.data.username);
      makeToast({ type: "success", message: "Login Successful" });
    })
      .catch((error) => {
        makeToast({ type: "error", message: "Invalid Email or Password" });
        console.log(error);
      });
  };

  // Register user 

  const register = async (values) => {
    UserAPI.register(values)
      .then((response) => {
        setUsers([...users, response.data]);
        makeToast({ type: "success", message: "Registration successful" });
      })
      .catch((error) => {
        makeToast({ type: "error", message: "Invalid details" });
      });
  };

  // get  user by ID

  const getOne = (id) => {
    useEffect(() => {
      UserAPI.getOne(id).then((response) => {
        setUser(response.data);
      });
    }, []);
  };

  // get all users

  useEffect(() => {
    UserAPI.getAll().then((response) => {
      setUsers(response.data);
    });
  }, []);

  const activeUser = (id) => {
    console.log("id--", id)
    UserAPI.activeUser(id)
      .then((response) => {
        makeToast({ type: "success", message: "User Activated" });
        window.location.href = "/back-office/user-management";
      })
      .catch((err) => {

        console.log(err);
      });
  }

  const deactivateUser = (id) => {
    console.log("id--", id)
    UserAPI.deactivateUser(id)
      .then((response) => {
        makeToast({ type: "success", message: "User Deactivated" });
        window.location.href = "/back-office/user-management";
      })
      .catch((err) => {

        console.log(err);
      });
  }

  // Delete User

  const deleteUser = (id) => {
    UserAPI.deleteUser(id).then(() => {
      setUsers(users.filter((users) => users.id !== id));
      makeToast({ type: "success", message: "User Deleted Successful" });

    });
  };

  // Edit User Details

  const editUser = (values) => {
    const newUser = {
      id: values.id,
      fullName: values.fullName,
      username: values.username,
    };
    UserAPI.editUser(values.id, newUser)
      .then((response) => {
        makeToast({ type: "success", message: "User Updated Successful" });

      })
      .catch((error) => {
        console.log(error);
      });
  }


  return (
    <UserContext.Provider

      value={{
        user,
        setUser,
        users,
        setUsers,
        login,
        register,
        getOne,
        activeUser,
        deactivateUser,
        deleteUser,
        editUser,


      }}

    >
      {children}

    </UserContext.Provider>
  );
};

export default UserContext;