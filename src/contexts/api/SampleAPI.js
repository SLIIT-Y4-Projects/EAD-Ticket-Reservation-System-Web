import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

// const BASE_URL = "https://jsonplaceholder.typicode.com";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class SampleAPI {
  // Get 5 posts
  static getAll() {
    return axios.get(`${BASE_URL}/api/Example/`, requestConfig);
  }

  static create(newSample){
      return axios.post(`${BASE_URL}/api/Example/`, newSample, requestConfigJson);

  }
}

export default SampleAPI;