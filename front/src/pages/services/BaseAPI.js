import axios from "axios";
//
import { getToken, logout } from './AuthToken';

/**
 * Create and return Axios instance with API URL
 */
const BaseAPI = (baseURL) =>{

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


    /**
     * Remove token if status 401 returned
     */
    api.interceptors.response.use(null, function (error) {
        // check 401 error status 
        if(error.response.status === 401){
            // clear localstorage token
            logout();
        }
        return error;
    });
    //
    return api;
}
//
export default BaseAPI;