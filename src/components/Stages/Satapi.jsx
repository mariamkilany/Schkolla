import axios from 'axios';
import React, { useEffect } from 'react'
import data from './data'
import Stages from './Stages'
export default function Satapi(type,callback) {
   async function grtSages(){
    let data= await axios.get(``);

    }
    useEffect(()=>{},[])
  return <>
        {data.map((stage,index)=><Stages level={stage} key={index}/>)}
  </>
    
  
}
