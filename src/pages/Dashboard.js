import '../App.css'
import React ,{useEffect,useContext, useState}from 'react';
import {Row, Col ,Card,Button , CardGroup, Table} from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom';
// global variable
import AppContext from '../AppContext';
// component
import DashboardComp from '../components/DashboardComp';
import SideBar from '../components/SideBar';
import StaffComp from '../components/StaffComp';
import TenantComp from '../components/TenantComp';
import RoomComp from '../components/RoomComp';
import RecentNotesComp from '../components/RecentNotesComp';
import AdminMenuComp from '../components/AdminMenuComp';



function Dashboard(){

	const navigate = useNavigate();
	const {user, content, setContent} = useContext(AppContext);

	let userIdval = localStorage.getItem('userId');
	console.log(userIdval)
	useEffect(()=> {
		setContent("dashboard");

	},[])

	return(
		(userIdval == null) 
		? <Navigate to="/"/>
		:
		<div className="mainContainer ">
			<SideBar />
	
			<div md="12" className="Dashboard">
				
				 {content === "dashboard" ? 
				 <DashboardComp />
				 : content === "staff" ?
					<StaffComp/>
				  : content === "tenant" ?
				 <TenantComp/>
				  : content === "room" ?
				 	<RoomComp/>
				   : content === "admin" ?
				   <AdminMenuComp/>
				   : content === "notes" ?
				   <RecentNotesComp/>
				  : content === "home" ?
				  navigate('/')
				 :
				 null
				}
				
				
			</div>
		 	
		</div>

	)

}

export default Dashboard;