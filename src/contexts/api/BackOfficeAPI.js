import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class BackOfficeAPI {

    static login(values) {

        return axios.post()
    }

}

export default BackOfficeAPI;
