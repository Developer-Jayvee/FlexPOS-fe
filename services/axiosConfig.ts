
const BASE_URL = import.meta.env.VITE_BASE_URL
const TIMEOUT  = 10000;
const HEADERS = {
    'Content-Type' : 'application/json',
    'Accept' : 'application/json'
}
export const config = {
    baseURL : BASE_URL,
    timeout: TIMEOUT,
    headers: {...HEADERS}
}