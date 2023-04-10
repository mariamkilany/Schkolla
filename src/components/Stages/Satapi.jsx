import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Stages from './Stages'
import Class from './Class'
import Loading from '../../pages/Loading/Loading';
import useAxios from '../../hooks/useAxios';
export default function Satapi(props) {
  const link=props.link;
  const type =props.type;
  const id=localStorage.getItem('id')
  const accessToken=localStorage.getItem('accessToken')
  // const [data,setData]=useState([])
  const { fetchData,data, loading} = useAxios()
    useEffect(()=>{
      // axios.get(link,
      // {params: { userId: id } ,headers: {'Authorization': `Bearer ${accessToken}`, withCradintials : true}}).then(
      //   (response)=>{
      //     console.log(response)
      //     type!=="class"?
      //     setData(response.data)
      //     :
      //     setData(response.data.classes)
      //   }
      // )
      fetchData('get',link)
      console.log(data)
    },[])
    // console.log("levels data", data)
    if(loading) 
    return <Loading/>
  return <>
        {
        // data!==undefined?
        type==='grade'?
        data?.map((item,index)=>
        <Stages level={item} index={index} key={index}/>)
        :
        data?.classes?.map((item,index)=>
        <Class classes={item} index={index} key={index}/>)
      }
  </>
    
  
}
