import Table from 'react-bootstrap/Table';
import"./style.css"
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate} from 'react-router-dom';
export default function Employee() {
    const accessToken = localStorage.getItem('accessToken');
    const id=localStorage.getItem('id');
    const stuffId=useRef('');
    const stuffName=useRef('')
    const [stuffsDate,setStuffsData]=useState([]);
    const regex1=new RegExp(`^${stuffId.current.value}`)
    const regex2=new RegExp(`^${stuffName.current.value}`)
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`security_man/getAllMembers`,{ params: { userId: id } , headers: {authorization: `Bearer ${accessToken}`} }).then(
        (response)=>{
            setStuffsData(response.data)
        }
        )
    },[stuffsDate,setStuffsData,id,accessToken])
    const handleClick=(id)=>{
        localStorage.setItem('stuffId',id)
        navigate('stuffData')
    }
    return (
        <>
        <div className="input-cont row mb-5">
        <input className="col-md-4 search-input" disabled={stuffId.current.value!==''?true:false} ref={stuffName}  type="search1"  placeholder="البحث بالاسم"/>
        <input  className="col-md-4 search-input"disabled={stuffName.current.value!==''?true:false} type="search2" placeholder="البحث بالرقم القومي" ref={stuffId} />
        </div>
        <Table striped  hover>
                <thead className="line">
                    <th >الرقم القومي</th>
                    <th>الصورة </th>
                    <th>الاسم </th>
                    <th>النوع </th>
                    <th> الوظيفة </th>
                    <th> رقم الهاتف </th>
                    <th> الايميل </th>
                </thead>
                <tbody>
                    { stuffId.current.value===''&&stuffName.current.value===''? stuffsDate.map((data)=>{
                            return(
                        <tr className={`image w3-center w3-animate-left`} 
                        onClick={()=>handleClick(data._id)}>
                            <td>{data.nationalId}</td>
                            <td><img src={data.imgUrl}alt={"name"} /></td>
                            <td>{data.name}</td>
                            <td>{data.gender}</td>
                            <td>{data.job}</td>
                            <td>{data.phoneNumber}</td>
                            <td>{data.email}</td>
                        </tr>)
                    }):
                    stuffId.current.value!==''?
                    stuffsDate.map((data)=>{
                        return(
                        <tr className={`image ${!regex1.test(data.nationalId)?'disapear':''} w3-center w3-animate-left`} 
                        onClick={()=>handleClick(data._id)}>
                            <td>{data.nationalId}</td>
                            <td><img src={data.imgUrl}alt={"name"} /></td>
                            <td>{data.name}</td>
                            <td>{data.gender}</td>
                            <td>{data.job}</td>
                            <td>{data.phoneNumber}</td>
                            <td>{data.email}</td>
                        </tr>
                        )
                    }
                    )
                    :
                    stuffsDate.map((data)=>{
                        console.log(data._id)
                        return(
                        <tr className={`image ${!regex2.test(data.name)?'disapear':''} w3-center w3-animate-left`} 
                        onClick={()=>handleClick(data._id)}>
                            <td>{data.nationalId}</td>
                            <td><img src={data.imgUrl}alt={"name"} /></td>
                            <td>{data.name}</td>
                            <td>{data.gender}</td>
                            <td>{data.job}</td>
                            <td>{data.phoneNumber}</td>
                            <td>{data.email}</td>
                        </tr>
                        )
                    }
                    )
                }
                </tbody>
            </Table>
        </>

    );
}
