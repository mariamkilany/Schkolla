import { useState, useEffect } from 'react';
import axios from 'axios';
axios.defaults.baseURL='http://localhost:4000/v1/';
axios.defaults.withCredentials=true;

const useAxios = () => {
    // console.log(method)
    // console.log(url)
    // console.log(body)
    const [data,setData] = useState(null)
    // const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const accessToken =localStorage.getItem('accessToken');
    const id=localStorage.getItem('id');
    const fetchData = async (method,url,body) => {
        setLoading(true);
        try {
        const res = await axios[method](url,body,{ params: { userId: id } , headers: {authorization: `Bearer ${accessToken}`} });
        setData(res.data);
        console.log(res.data , 'useAxios')
        setError(null);
        } catch (err) {
        setError(err);
        } finally {
        setLoading(false);
        }
    };
    // useEffect(() => {
    //     fetchData();
    // }, []);
    return {fetchData,data , loading ,error}
};
export default useAxios;
