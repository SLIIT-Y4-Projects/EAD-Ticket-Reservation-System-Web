import { createContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SampleAPI from "./api/SampleAPI";
import makeToast from "../components/toast";

const SampleContext = createContext();

export function SampleProvider({ children }) {
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

  useEffect(() => {
    SampleAPI.getAll().then((response) => {
      setSamples(response.data);
    });
  }, []);

  const createSample = async (newSample) => {
    try {
      const response = await SampleAPI.create(newSample);
      setSamples([...samples, response.data]);
      makeToast({ type: "success", message: "Create Sample successful" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SampleContext.Provider
      value={{
        // posts,
        // postsLoading,
        // refetchPosts,
        samples,
        setSamples,
        createSample,
      }}
    >
      {children}
    </SampleContext.Provider>
  );
}

export default SampleContext;
