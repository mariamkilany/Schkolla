import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import './sidebar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {GiStairsGoal,GiTeacher} from 'react-icons/gi'
import {MdOutlinePeopleAlt} from 'react-icons/md'
import {SlPeople} from 'react-icons/sl'
    import SideNav, {
    Toggle,
    Nav,
    NavItem,
    NavIcon,
    NavText
    } from "@trendmicro/react-sidenav";
import admin from '../../imge/admin.jpg'

    class SideNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        isVisible: true
        };
    }

    render() {
        return (
        <SideNav expanded={this.state.isVisible}>
            <SideNav.Toggle
            onClick={() => {
                this.setState({ isVisible: !this.state.isVisible });
            }}
            />
            <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                <AiOutlineHome className="nav-icon"/>
                </NavIcon>
                <NavText>الصفحة الرئيسية</NavText>
            </NavItem>
            <NavItem eventKey="stages">
                <NavIcon>
                    <GiStairsGoal className="nav-icon"/>
                </NavIcon>
                <NavText>المراحل الدراسية</NavText>
            </NavItem>
            <NavItem eventKey="students">
                <NavIcon>
                    <MdOutlinePeopleAlt className="nav-icon"/>
                </NavIcon>
                <NavText>الطلاب</NavText>
            </NavItem>
            <NavItem eventKey="teacher">
                <NavIcon>
                    <GiTeacher className="nav-icon"/>
                </NavIcon>
                <NavText>المعلمين</NavText>
            </NavItem>
            <NavItem eventKey="empolyee">
                <NavIcon>
                    <SlPeople className="nav-icon"/>
                </NavIcon>
                <NavText>الموظفون</NavText>
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
}

export default SideNavBar;