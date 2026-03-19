import axios from 'axios';
export const setupInterceptors = (axiosInstance) => {
    axiosInstance.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('user-token');
            if(token){
                config.headers.Authorization = `Bearer ${token}`;
            }
            return token
        },
        (error) => Promise.reject(error)
    );

    axiosInstance.interceptors.response.use(
        (response) => {
            return response.data
        },
        (error) => Promise.reject(error)
    )
}