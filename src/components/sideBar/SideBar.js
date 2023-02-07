import React, { useState } from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Routes,Router, Route } from 'react-router-dom';
import './sidebar.css'
import {AiOutlineHome} from 'react-icons/ai';
import {GiStairsGoal,GiTeacher} from 'react-icons/gi';
import {MdOutlinePeopleAlt} from 'react-icons/md';
import {SlPeople} from 'react-icons/sl';
import {IoChatbubblesOutline} from 'react-icons/io5';
import {Link} from 'react-router-dom'
import { useNavigate ,useLocation} from 'react-router-dom';
    import SideNav, {
    Toggle,
    Nav,
    NavItem,
    NavIcon,
    NavText
    } from "@trendmicro/react-sidenav";
import admin from '../../imge/admin.jpg'

function SideBar() {

    const [isVisible,setIsVisible]=useState(false);
    // const [homeSelected,setHomeSelected]=useState(false);
    // const [levelsSelected,setLevelsSelected]=useState(false);
    // const [studentsSelected,setStudentsSelected]=useState(false);
    // const [teachersSelected,setTeachersSelected]=useState(false);
    // const [empolyeeSelected,setEmpolyeeSelected]=useState(false);
    const [qASelected,setQaSelected]=useState(false);
    const navigate = useNavigate();
    const location = useLocation();
        return (
        <SideNav expanded={isVisible}>
            <SideNav.Toggle
            onClick={() => {
                setIsVisible(!isVisible)
            }}
            />
            <SideNav.Nav >
                <NavItem onClick={
                    ()=>{navigate('')
                    }} className={location.pathname==='/DashBoard'?'sidenav---selected---1EK3y sidenav---highlighted---oUx9u':''}>
                <NavIcon>
                <AiOutlineHome className="nav-icon"/>
                </NavIcon>
                <NavText>الصفحة الرئيسية</NavText>
            </NavItem>
                <NavItem onClick={()=>{
                    navigate('Levels')
                    }}className={location.pathname==='/DashBoard/Levels'?'sidenav---selected---1EK3y sidenav---highlighted---oUx9u':''}
                    >
                <NavIcon>
                    <GiStairsGoal className="nav-icon"/>
                </NavIcon>
                <NavText>المراحل الدراسية</NavText>
            </NavItem>
            <NavItem onClick={()=>{
                navigate('Students')
                }}
                className={location.pathname==='/DashBoard/Students'?'sidenav---selected---1EK3y sidenav---highlighted---oUx9u':''}
                >
                <NavIcon>
                    <MdOutlinePeopleAlt className="nav-icon"/>
                </NavIcon>
                <NavText>الطلاب</NavText>
            </NavItem>
            <NavItem onClick={()=>{
                navigate('Teachers')
                }}
                className={location.pathname==='/DashBoard/Teachers'?'sidenav---selected---1EK3y sidenav---highlighted---oUx9u':''}
                >
                <NavIcon>
                    <GiTeacher className="nav-icon"/>
                </NavIcon>
                <NavText>المعلمين</NavText>
            </NavItem>
            <NavItem onClick={()=>{
                navigate('Empolyee')
                }}
                className={location.pathname==='/DashBoard/Empolyee'?'sidenav---selected---1EK3y sidenav---highlighted---oUx9u':''}
                >
                <NavIcon>
                    <SlPeople className="nav-icon"/>
                </NavIcon>
                <NavText>الموظفون</NavText>
            </NavItem>
            <NavItem onClick={()=>{
                navigate('QA')
                }}
                className={location.pathname==='/DashBoard/QA'?'sidenav---selected---1EK3y sidenav---highlighted---oUx9u':''}
                >
                <NavIcon>
                    <IoChatbubblesOutline className="nav-icon"/>
                </NavIcon>
                <NavText>الأسئلة و الشكاوي</NavText>
            </NavItem>
            <NavItem eventKey="admin" className='admin'>
                <NavIcon>
                    <img src={admin} alt="admin" className="admin-pic shadow-lg rounded-circle"  />
                </NavIcon>
            </NavItem>
            
            </SideNav.Nav>
        </SideNav>
        );
}

export default SideBar;
