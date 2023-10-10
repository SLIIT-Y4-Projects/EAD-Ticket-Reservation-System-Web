import { createContext } from "react";
import BackOfficeAPI from "./api/BackOfficeAPI";
import makeToast from "../components/toast";

const BackOfficeContext = createContext();

export function BackOfficeProvider ({ children })  {
  return (
    <BackOfficeContext.Provider value={{}}>
      {children}
    </BackOfficeContext.Provider>
  );
};

export default BackOfficeContext;
