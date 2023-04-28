import { useState } from 'react';
import jwtInterceoptor from '../helpers/jwtInterceptor';

const useAxios = () => {
    const [data,setData] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const fetchData =async (method,url,body,action) => {
        setLoading(true);
        console.log('method',method)
        try {
        const res = await jwtInterceoptor[method](url,body)
            console.log("res",res)
            if(method==='get'){
                setData(res.data)
                console.log(res);
                return res.data
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
