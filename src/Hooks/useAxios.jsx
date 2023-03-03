import axios from 'axios';
import {useState } from 'react';
export default function useAxios({method,link}) {
    const [data ,setData]=useState([]);
    const accessToken =localStorage.getItem('accessToken');
    const id=localStorage.getItem('id');
        axios({
            method:method,
            url:link,
            prams:
                {userId: id } ,headers: {'Authorization': `Bearer ${accessToken}`, withCradintials : true}
            }).then((res)=>{
                setData(res.data)
            })
    return (data)
}
