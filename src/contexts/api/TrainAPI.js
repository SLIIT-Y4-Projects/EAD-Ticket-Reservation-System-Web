import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

// backend env file calling
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class TrainAPI {

    // Create Train
    static create (values) {

        return axios.post(`${BASE_URL}/api/Train/`, values, requestConfigJson)
    }

    // Get all Train details
    static getAll(){
        return axios.get(`${BASE_URL}/api/Train/`, requestConfig)
    }

    // get one train details
    static getOne(id){
        return axios.get(`${BASE_URL}/api/Train/${id}`,id, requestConfig)
    }
    // edit train details
    static edit(id, values) {
        return axios.put(`${BASE_URL}/api/Train/${id}`, values, requestConfigJson)
    }
    // activate train
    static activeTrain(id, values){
        return axios.put(`${BASE_URL}/api/Train/activate/${id}`, values, requestConfigJson)
    }

    // cancel train
    static cancelTrain(id, values) {
        return axios.put(`${BASE_URL}/api/Train/cancel/${id}`, values, requestConfigJson)
    }

    //delete train 
    static deleteTrain(id) {
        return axios.delete(`${BASE_URL}/api/Train/${id}`, requestConfig)
    }

}

export default TrainAPI;