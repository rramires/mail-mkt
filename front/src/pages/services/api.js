import axios from "axios";
//
import { getToken } from './auth';

/**
 * Create and return Axios instance with API URL
 */
const baseApi = (baseURL) =>{

    /**
     * Create API instance
     */
    const api = axios.create({ baseURL });


    /**
     * Set token in request headers
     */
    api.interceptors.request.use(async (config) =>{
        const token = getToken();
        if(token){
            config.headers['x-access-token'] = token;
        }
        return config;
    });
    //
    return api;
}
//
export default baseApi;