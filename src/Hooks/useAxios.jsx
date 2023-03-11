import { useState } from 'react';
import axios from 'axios';
// axios.defaults.baseURL='http://localhost:4000/v1/';
// axios.defaults.withCredentials=true;

const useAxios = () => {
    const [data,setData] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const id=localStorage.getItem('id')
    const accessToken=localStorage.getItem('accessToken');
    
    const fetchData = async (method,url,body,action) => {
        setLoading(true);
        console.log('method',method)
        try {
        const res = await axios[method](url,body)
            // .then((res)=>{setData(res?.data)});
            console.log("res",res)
            if(method==='get'){
                setData(res.data)
            }
        setError(null);
        if(action)
        action();
        } catch (err) {
            console.log(err)
        setError(err);
        } finally {
        setLoading(false);
        }
    };
    return {fetchData,data , loading ,error}
};
export default useAxios;
