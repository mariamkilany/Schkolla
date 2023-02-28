import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import data from './data'
import Stages from './Stages'
import Class from './Class'
export default function Satapi(props) {
  //  async function grtSages(){
  //   let data= await axios.get(``);

  //   }
  const link=props.link;
  const type =props.type;
  const id=localStorage.getItem('id')
  const accessToken=localStorage.getItem('accessToken')
  const stageId=localStorage.getItem('stageId');
  // console.log(stageId);
  const [stagesData,setStagesData]=useState([])
  console.log(`${link}${type==='class'? `/${stageId}`:''}`)
    useEffect(()=>{
      axios.get(`${link}${type==='class'? `/${stageId}`:''}`,
      {params: { userId: id } ,headers: {'Authorization': `Bearer ${accessToken}`, withCradintials : true}}).then(
        (response)=>{
          setStagesData(response.data)
        }
      )
    },[id,accessToken,stagesData,setStagesData])
  return <>
        {stagesData.map((stage,index)=>type==='grade'?<Stages level={stage} index={index} key={index}/>:<Class classes={stage} index={index} key={index}/>)}
  </>
    
  
}
