import axios from 'axios';
import React, { useEffect, useState } from 'react'
import data from './data'
import Stages from './Stages'
export default function Satapi(type,callback) {
  //  async function grtSages(){
  //   let data= await axios.get(``);

  //   }
  const id=localStorage.getItem('id')
  const accessToken=localStorage.getItem('accessToken')
  const [stagesData,setStagesData]=useState([])
    useEffect(()=>{
      axios.get(`grade/getAllGrades`,
      {params: { userId: id } ,headers: {'Authorization': `Bearer ${accessToken}`, withCradintials : true}}).then(
        (response)=>{
          setStagesData(response.data)
        }
      )
    },[id,accessToken,stagesData,setStagesData])
  return <>
        {stagesData.map((stage,index)=><Stages level={stage} index={index} key={index}/>)}
  </>
    
  
}
