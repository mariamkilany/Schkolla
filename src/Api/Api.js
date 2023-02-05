import axios from 'axios';
const BASE_URL = 'https://erin-hungry-bonobo.cyclic.app/v1/admin';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});