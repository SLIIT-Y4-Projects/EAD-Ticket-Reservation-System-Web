import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

// backend env file calling
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class ReservationAPI {

    //create Reservation
    static create(values) {
        return axios.post(`${BASE_URL}/api/Reservation/`, values, requestConfigJson)
    }

    //Get all reservation details
    static getAll(){
        return axios.get(`${BASE_URL}/api/Reservation/`, requestConfig)
    }
    
     // get one reservation details
     static getOne(id){
        return axios.get(`${BASE_URL}/api/Reservation/${id}`, requestConfig)
    }

     // edit reservation details
     static edit(id, values) {
        return axios.put(`${BASE_URL}/api/Reservation/${id}`, values, requestConfigJson)
    }

     // cancel reservation
     static cancelReservation(id, values) {
        return axios.put(`${BASE_URL}/api/Reservation/cancel/${id}`, values, requestConfigJson)
    }

     //delete reservation
     static deleteReservation(id) {
        return axios.delete(`${BASE_URL}/api/Reservation/${id}`, requestConfig)
    }


}
export default ReservationAPI;