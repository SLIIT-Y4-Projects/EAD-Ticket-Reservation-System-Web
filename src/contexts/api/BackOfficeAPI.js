import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;



class BackOfficeAPI {

    static login(values) {

        return axios.post(`${BASE_URL}/api/BackOfficeUser/login/`, values, requestConfigJson);
    }

    static getAll(){
        return axios.get(`${BASE_URL}/api/BackOfficeUser/`, requestConfig);
    }

    static getOne(id){
        return axios.get(`${BASE_URL}/api/BackOfficeUser/${id}`, requestConfig);
    }

    static edit(id, values){
        return axios.put(`${BASE_URL}/api/BackOfficeUser/${id}`, values, requestConfigJson);
    }

    static delete(id) {
        return axios.delete(`${BASE_URL}/api/BackOfficeUser/${id}`, requestConfig);
    }

}

export default BackOfficeAPI;
