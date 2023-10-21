import { createContext, useState, useEffect } from "react";
import TrainAPI from "./api/TrainAPI";
import makeToast from "../components/toast";

const TrainContext = createContext();

export function TrainProvider({ children }) {

    const [trains, setTrains] = useState([]);

    const [train, setTrain] = useState({
        trainNumber: "",
        departureTime: "",
        capacity: "",
        status: ""
    });

    // Insert new train
    const createTrain = async (newTrain) => {
        try {
            const response = await TrainAPI.create(newTrain);
            setTrains([...trains, response.data]);
            makeToast({ type: "success", message: "Train inserted successful" });
            window.location.href = "/back-office/train-management"

        } catch (error) {
            console.log(error);
        }
    };

    // get all train details
    useEffect(() => {
        TrainAPI.getAll().then((response) => {
            setTrains(response.data);
        });
    }, []);

    //get one train details
    const getOne = (id) => {
        useEffect(() => {
            TrainAPI.getOne(id).then((response) => {
                setTrain(response.data);
            });
        }, []);
    };

    // delete train
    const deleteTrain = (id) => {
        TrainAPI.deleteTrain(id).then(() => {
            setTrains(trains.filter((trains) => trains.id !== id));
            makeToast({ type: "success", message: "Train Deleted Successful" });
            window.location.href = "/back-office/train-management"
        });
    };

    // active train 

    const activeTrain = (id) => {
        console.log("id--", id)
        TrainAPI.activeTrain(id).then((response) => {
            makeToast({ type: "success", message: "Train Activated" });
            window.location.href = ""
        })
            .catch((err) => {

                console.log(err);
            })
    };

    // Cancel Train
    const cancelTrain = (id) => {
        console.log("id--", id)
        TrainAPI.cancelTrain(id).then((response) => {
            makeToast({ type: "success", message: "Train Canceled" });
            window.location.href = ""
        })
            .catch((err) => {

                console.log(err);
            });
    }

    // Edit train details
    const editTrain = (values) => {
        const newTrain = {
            id: values.id,
            trainNumber: values.trainNumber,
            departureTime: values.departureTime,
            capacity: values.capacity,
           
        };
        TrainAPI.edit(values.id, newTrain)
            .then((response) => {
                makeToast({ type: "success", message: "Train Updated Successful" });
                window.location.href = "/back-office/train-management"
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (

        <TrainContext.Provider
            value={{
                train,
                setTrain,
                trains,
                setTrains,
                createTrain,
                deleteTrain,
                activeTrain,
                editTrain,
                getOne,
                cancelTrain,
            }}

        >

            {children}

        </TrainContext.Provider>
    );
};

export default TrainContext;