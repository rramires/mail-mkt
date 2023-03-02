import axios from "axios";
//
import { getToken } from './auth';


/**
 * Create API instance
 */
const api = axios.create({
    baseURL: 'http://localhost:3001'
});


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
export default api;