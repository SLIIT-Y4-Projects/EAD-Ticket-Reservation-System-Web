import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class UserAPI {

        static login(values) {
            return axios.post(`${BASE_URL}/api/TravellerUser/login/`, values, requestConfigJson)
        }

        static register(values) {
            return axios.post(`${BASE_URL}/api/TravellerUser/register`, values, requestConfigJson)
        }

        static getAll() {
            return axios.get(`${BASE_URL}/api/TravellerUser/`, requestConfig)
        }

        static getOne(id) {
            return axios.get(`${BASE_URL}/api/TravellerUser/${id}`, values, requestConfig)
        }

        static editUser(id, values) {
            return axios.put(`${BASE_URL}/api/TravellerUser/${id}`,values, requestConfigJson)
        }

        static activeUser(id,values){
            return axios.put(`${BASE_URL}/api/TravellerUser/activate/${id}`,values, requestConfigJson)
        }

        static deactivateUser(id, values) {
            return axios.put(`${BASE_URL}/api/TravellerUser/deactivate/${id}`, values, requestConfigJson)
        }

        static deleteUser(id) {
            return axios.delete(`${BASE_URL}/api/TravellerUser/${id}`, requestConfig)
        }
}

export default UserAPI;