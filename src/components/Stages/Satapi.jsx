import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Stages from './Stages'
import Class from './Class'
export default function Satapi(props) {
  const link=props.link;
  const type =props.type;
  const id=localStorage.getItem('id')
  const accessToken=localStorage.getItem('accessToken')
  const [data,setData]=useState([])
    useEffect(()=>{
      axios.get(link,
      {params: { userId: id } ,headers: {'Authorization': `Bearer ${accessToken}`, withCradintials : true}}).then(
        (response)=>{
          type!=="class"?
          setData(response.data)
          :
          setData(response.data.classes)
        }
      )
    },[id,accessToken,data,setData])
    console.log("levels data", data)
  return <>
        {
        data!==undefined?
        data.map((item,index)=>
        type==='grade'?
        <Stages level={item} index={index} key={index}/>
        :
        <Class classes={item} index={index} key={index}/>)
        :''
      }
  </>
    
  
}
