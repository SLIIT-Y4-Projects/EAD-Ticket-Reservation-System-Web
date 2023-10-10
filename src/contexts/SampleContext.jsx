import { createContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SampleAPI from "./api/SampleAPI";
import makeToast from "../components/toast";

const SampleContext = createContext();

export function SampleProvider ({ children })  {
  // const {
  //   data: posts,
  //   isLoading: postsLoading,
  //   refetch: refetchPosts,
  // } = useQuery({
  //   queryKey: ["post"],
  //   queryFn: SampleAPI.getAllPosts,
  //   onSuccess: () => {
  //     //makeToast({ type: "success", message: "Data fetched successfully" });
  //   },
  // });
  const [samples, setSamples] = useState([]);


  useEffect(()=> {
    console.log("test1");
    SampleAPI.getAll().then((response)=> {
      console.log("test2");
      setSamples(response.data);
    });
  }, []);




  return (
    <SampleContext.Provider
      value={{
        // posts,
        // postsLoading,
        // refetchPosts,
        samples,
        setSamples,
        
      }}
    >
      {children}
    </SampleContext.Provider>
  );
};

export default SampleContext;
