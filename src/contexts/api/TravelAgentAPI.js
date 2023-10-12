import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class TravelAgentAPI {

    static login(values) {
        return axios.post(`${BASE_URL}/api/TravelAgentUser/login/`, values, requestConfigJson)
    }
    
    static register(values) {
        return axios.post(`${BASE_URL}/api/TravelAgentUser/register/`, values, requestConfigJson)
    }

    static getAll() {

        return axios.get(`${BASE_URL}/api/TravelAgentUser/`, requestConfig)
    }

    static getOne(id) {
        return axios.get(`${BASE_URL}/api/TravelAgentUser/${id}`, requestConfig)
    }

    static edit(id, values){
        return axios.put(`${BASE_URL}/api/TravelAgentUser/${id}`, values, requestConfigJson)
    }

    static delete(id){
        return axios.delete(`${BASE_URL}/api/TravelAgent/${id}`, requestConfig)
    }


}

export default TravelAgentAPI;
