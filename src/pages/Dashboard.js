import '../App.css'
import React ,{useEffect,useContext, useState}from 'react';
import {Row, Col ,Card,Button , CardGroup, Table} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
// global variable
import AppContext from '../AppContext';
// component
import DashboardComp from '../components/DashboardComp';
import SideBar from '../components/SideBar';
import StaffComp from '../components/StaffComp';
import TenantComp from '../components/TenantComp';
import RoomComp from '../components/RoomComp';



function Dashboard(){

	const navigate = useNavigate();
	const {user, content, setContent} = useContext(AppContext);

	useEffect(()=> {
		setContent("dashboard");

	},[])

	return(
		
		<div className="mainContainer ">
			<SideBar />
		{user !== null
		?
			
		
			<div md="12" className="Dashboard">
				
				 {content === "dashboard" ? 
				 <DashboardComp />
				 : content === "staff" ?
					<StaffComp/>
				  : content === "tenant" ?
				 <TenantComp/>
				  : content === "room" ?
				 	<RoomComp/>
				  : content === "home" ?
				  navigate('/')
				 :
				 null
				}
				
				
			</div>
		:  navigate('/') 	}
		</div>

	)

}

export default Dashboard;