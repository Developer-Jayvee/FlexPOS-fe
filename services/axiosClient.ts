import axios from 'axios';
import { config } from './axiosConfig';
import { setupInterceptors } from './interceptors';
const axiosClient = axios.create(config);

setupInterceptors(axiosClient)

export default axiosClient;