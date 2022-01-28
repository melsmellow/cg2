import React, {useState, useEffect , useContext} from 'react';
import {Row, Col, Form, Button, Table} from 'react-bootstrap';
import '../App.css'
import AddIcon from '@mui/icons-material/Add';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import FindInPageIcon from '@mui/icons-material/FindInPage';

// components
import Popup from './Popup';
// pages
import Allergies from './tenants/Allergies';
// local image
import tenant1 from '../images/tenant1.jpg';
import tenant2 from '../images/tenant2.jpg';
import tenant3 from '../images/tenant3.jpg';
import tenant4 from '../images/tenant4.jpg';
import tenant5 from '../images/tenant5.jpg';

// Tenant Form component
import AddObservationForm from './tenants/form/AddObservationForm';
import DailyTaskForm from './tenants/form/DailyTaskForm';
import EnterVitalsForm from './tenants/form/EnterVitalsForm';
import FileIncidentReportForm from './tenants/form/FileIncidentReportForm';
import ProvideSingleCareForm from './tenants/form/ProvideSingleCareForm';
import MedicalPassForm from './tenants/form/MedicalPassForm';

// Tenants Popup Components
import AddObservationPopup from './tenants/AddObservationPopup';
import DailyTaskPopup from './tenants/DailyTaskPopup';
import ProvideSingleCarePopup from './tenants/ProvideSingleCarePopup';
import MedicalPassPopup from './tenants/MedicalPassPopup';
import EnterVitalsPopup from './tenants/EnterVitalsPopup';
import FileIncidentReportPopup from './tenants/FileIncidentReportPopup';

import {historyData} from '../historyData'

// global variable
import AppContext from '../AppContext';

// axios api
import api from "../api/api";

function TenantProfile(data) {
	const [age, setAge] = useState('');
	const { allergiesList, setAllergiesList, currentTab, setCurrentTab } = useContext(AppContext);


	useEffect(() => {
		localStorage.setItem('tenantId' , data.data._id)
	}, [])

	// code for fetching allergy
	  useEffect(()=>{
	    fetchAllergy();
	  }, [])

	  const fetchAllergy = () =>{

	    let token = localStorage.getItem('token');
	    let tenantId = localStorage.getItem('tenantId');
	    api.get(`/tenants/allergy/${tenantId}/fetch` , {
	        headers:{
	          'Authorization' : `Bearer ${token}`
	        }
	      }).then(res => {
	        console.log(res)
	        setAllergiesList(res.data)
	      })
	  }




	useEffect(() => {

		console.log(currentTab)

	},[currentTab])
	
   const cutBirthday = (string) => {
		let date = new Date(string)
		const month = date.toLocaleString('en-us', { month: 'long' }); /* June */
		const day = date.getUTCDate();
		const year = date.getUTCFullYear();


		let fullDate = month + " " + day + ", " + year 
		return fullDate
	}

	const getTheAge = (birthday) => {
		let date = new Date(birthday)
		let currentYear = new Date().getFullYear()
		let year = date.getUTCFullYear();

		const age = currentYear - year

		return age
	}

	
	return (
		<div>
{/*	 		<Form id="form">*/}
			 	<Row>
			 		 <Col md="12" sm="12" className="mx-auto mb-3 colItem mt-3" >
			 		 	<Row>
			 		 		<Col md="2">
					   	
							    <img id="tenantPic" className="ml-3" src={data.data.picture} alt=""></img> 
							
					   		</Col>
					   		<Col md="8" className="d-flex">
					   		<h4 className="">Allergies:</h4>
					   		{allergiesList.map(item =>
					   		 <p className="px-1 d-flex">• {item.allergy}</p>)}
					   		</Col>
			 		 	</Row>
					
					   
			 		</Col>
			 		<Col md="12" className="mx-auto">
			 		 	<table id="studInfoTable">
						  <tr>
						    <th className="pr-5">Name:</th>
						    <td className="pr-5">{data.data.firstName}{" "}{data.data.middleName}{" "}{data.data.lastName}</td>
						    <th className="pr-5">Age:</th>
						    <td>{getTheAge(data.data.birthday)}</td>
						  </tr>
						  <tr>
						    <th className="pr-5">Status:</th>
						    <td className="pr-5">{data.data.status}</td>
						    <th className="pr-5">Birthday:</th>
						    <td>{cutBirthday(data.data.birthday)}</td>
						  </tr>
						  <tr>
						    <th className="pr-5">Address:</th>
						    <td className="pr-5">{data.data.address}</td>
						    
						  </tr>
						 </table>
			 		</Col>
			 		 
			 		<Col md="12" id="actionHolder">
				 		<Col md="12" id="subTitle" className="mb-3 py-1 px-0">

				 			{/*button for all the available action*/}
				 			{currentTab == 'provide service'
				 			? <div className="btn p-0" 
				 		 	   id='actionBtn5active'
				 		 	onClick={() => setCurrentTab("provide service")}>
				 		 		<p className="p-1">Provide Service</p>
				 		 	</div>
				 			: <div className="btn p-0" 
				 		 	   id='actionBtn5'
				 		 	onClick={() => setCurrentTab("provide service")}>
				 		 		<p className="p-1">Provide Service</p>
				 		 	</div>}


				 		 	{currentTab == 'resident'
				 		 	? 	<div className="btn p-0" id="actionBtn5active"  onClick={() => setCurrentTab("resident")}>
				 		 		<p className="p-1">Resident</p>
				 		 	</div>
				 		 	:
				 		 		<div className="btn p-0" id="actionBtn5"  onClick={() => setCurrentTab("resident")}>
				 		 		<p className="p-1">Resident</p>
				 		 	</div>
				 		   }
				 		 	

				 		 {currentTab == 'care plan'
				 		 ? 	<div className="btn p-0" id="actionBtn5active"  onClick={() => setCurrentTab("care plan")}>
				 		 		<p className="p-1">Care Plan</p>
				 		 	</div>
				 		 	:	<div className="btn p-0" id="actionBtn5"  onClick={() => setCurrentTab("care plan")}>
				 		 		<p className="p-1">Care Plan</p>
				 		 	</div>
				 		}

				 		 
				 		 {currentTab == 'history'
				 		 ?<div className="btn p-0" id="actionBtn5active"  onClick={() => setCurrentTab("history")}>
				 		 		<p className="p-1">History</p>
				 		 	</div>
				 		 	: <div className="btn p-0" id="actionBtn5"  onClick={() => setCurrentTab("history")}>
				 		 		<p className="p-1">History</p>
				 		 	</div>}
				 		 	
				 		 	 {currentTab == 'add reports'
				 		 	 ?<div className="btn p-0" id="actionBtn5active"  onClick={() => setCurrentTab("add reports")}>
				 		 		<p className="p-1">Add Reports</p>
				 		 	</div>
				 		 	 :<div className="btn p-0" id="actionBtn5"  onClick={() => setCurrentTab("add reports")}>
				 		 		<p className="p-1">Add Reports</p>
				 		 	</div>}

				 		 	 {currentTab == 'allergy'
				 		 	 ?<div className="btn p-0" id="actionBtn5active"  onClick={() => setCurrentTab("allergy")}>
				 		 		<p className="p-1">Allergies</p>
				 		 	</div>
				 		 	 :<div className="btn p-0" id="actionBtn5"  onClick={() => setCurrentTab("allergy")}>
				 		 		<p className="p-1">Allergies</p>
				 		 	</div>}

				 		 	

				 		 </Col>
				 		 {currentTab == 'provide service'
				 		 ?<Col>
				 		 <Col id="tenantActionContainer" md="10" className="mx-auto mt-3">
				 			<Col md="4" className="px-0">
					 			<AddObservationPopup>
										<AddObservationForm/>
								</AddObservationPopup>
							</Col>
							<Col md="4" className="px-2">
					 			<DailyTaskPopup>
										<DailyTaskForm/>
								</DailyTaskPopup>
							</Col>
							<Col md="4" className="px-0">
					 			<ProvideSingleCarePopup>
										<ProvideSingleCareForm/>
								</ProvideSingleCarePopup>
							</Col>
				 		</Col> 	
				 		<Col id="tenantActionContainer" md="10" className="mx-auto mt-3">
				 			<Col className="px-0">
					 			<MedicalPassPopup>
										<MedicalPassForm/>
								</MedicalPassPopup>
							</Col>
							<Col className="px-2">
					 			<EnterVitalsPopup>
										<EnterVitalsForm/>
								</EnterVitalsPopup>
							</Col>
							<Col className="px-0">
					 			<FileIncidentReportPopup>
										<FileIncidentReportForm/>
								</FileIncidentReportPopup>
							</Col>
				 		</Col> 
				 		</Col>
				 		: currentTab == 'add reports'
				 		?<Col>
				 			 <Col md="10" sm="8"  className="mx-auto mb-3 colItem d-flex justify-content-center">
							    <select id="selectForm" required className="formItem ">
							   	 <option value="" disabled hidden selected>Choose Report</option>
								  <option value="normaluser">Report one</option>
								  <option value="staff">Report two</option>
								  <option value="admin">Report three</option>
								  <option value="medical staff">Report four</option>
								  <option value="everybody">Report five</option>
								</select>
								
					 		</Col>
					 		<Col md="12" className="d-flex justify-content-center">
					 			<button id="actionBtn4">Start</button>
					 		</Col>

					 		<Col md="12" sm="8"  className="mx-auto mb-3 colItem d-flex justify-content-center">
						
							<Col md="12" className="mx-auto">
							<Table  hover className="table" responsive>
						  <thead>
						    <tr>
						     
						      <th>Previous Report</th>
							  <th>Date</th>
						    </tr>
						  </thead>
						  <tbody>
								{historyData.map((val, key) => {
									return(
										<tr key={key}>
				
											<td>{val.activity}</td>
											<td>{val.date}</td>

											
										</tr>
									)
								})}
				
						  </tbody>
						</Table>
						</Col>
						
					 		</Col>

				 		</Col>
				 		: currentTab == 'history'
				 		? <Col>
					 		<Col md="12" sm="8"  className="mx-auto mb-3 colItem d-flex justify-content-center">
					
							<Col md="12" className="mx-auto">
							<Table  hover className="table" responsive>
						  <thead>
						    <tr>
						     
						      <th>Activity</th>
							  <th>Note</th>
							  <th>Date</th>
						    </tr>
						  </thead>
						  <tbody>
								{historyData.map((val, key) => {
									return(
										<tr key={key}>
				
											<td>{val.activity}</td>
											<td>{val.note}</td>
											<td>{val.date}</td>

											
										</tr>
									)
								})}
				
						  </tbody>
						</Table>
						</Col>
					
					 		</Col>

				 		</Col>
				 		: currentTab == 'care plan' 
				 		?<Col>
				 		 <Col id="tenantActionContainer" md="8" >
				 			<Col >
					 			<button id="actionBtn6" type="submit">
				 			 <VolunteerActivismIcon />
			                  <div className="d-inline px-2">Care Plan</div>
			 			
		                </button>
							</Col>
							<Col >
					 			<button id="actionBtn6" type="submit">
				 			 <VolunteerActivismIcon />
			                  <div className="d-inline px-2">Care Plan Report</div>
			 			
		                </button>
							</Col>
				 		</Col> 	
				 		<Col id="tenantActionContainer" md="8" className=" mt-2">
				 			<Col >
					 			<button id="actionBtn6" type="submit">
				 			 <NoteAltIcon />
			                  <div className="d-inline px-2">Complete Assessment</div>
		                </button>
							</Col>
							<Col >
					 			<button id="actionBtn6" type="submit">
				 			 <InsertChartIcon />
			                  <div className="d-inline px-2">Level of Care Status</div>
			 			
		                </button>
							</Col>
				 		</Col> 
				 		<Col md="12" className="d-flex justify-content-center mt-2">
				 			<button id="actionBtn6" type="submit">
				 			 <VolunteerActivismIcon />
			                  <div className="d-inline px-2">Care Plan Projection</div>
			 			
		                </button>
				 		</Col>
				 		</Col>

				 		: currentTab == 'resident'
				 		?<Col>
				 		 <Col id="tenantActionContainer" md="8" >
				 			<Col >
					 			<button id="actionBtn6" type="submit">
				 			 <DriveFileMoveIcon />
			                  <div className="d-inline px-2">Resident File</div>
			 			
		                </button>
							</Col>
							<Col >
					 			<button id="actionBtn6" type="submit">
				 			 <ThumbUpAltIcon />
			                  <div className="d-inline px-2">Risk Agreement</div>
			 			
		                </button>
							</Col>
				 		</Col> 	
				 		<Col id="tenantActionContainer" md="8" className="mt-2">
				 			<Col >
					 			<button id="actionBtn6" type="submit">
				 			 <LocalPharmacyIcon />
			                  <div className="d-inline px-2">Medication Orders</div>
			 			
		                </button>
							</Col>
							<Col >
					 			<button id="actionBtn6" type="submit">
				 			 <PersonSearchIcon />
			                  <div className="d-inline px-2">Resident Diagnoses</div>
			 			
		                </button>
							</Col>
				 		</Col> 
				 		<Col id="tenantActionContainer" md="8" className="mt-2">
				 			<Col >
					 			<button id="actionBtn6" type="submit">
				 			 <MonetizationOnIcon />
			                  <div className="d-inline px-2">Petty Cash</div>
			 			
		                </button>
							</Col>
							<Col >
					 			<button id="actionBtn6" type="submit">
				 			 <ContentPasteSearchIcon />
			                  <div className="d-inline px-2">Indications</div>
			 			
		                </button>
							</Col>
				 		</Col> 
				 		<Col id="tenantActionContainer" md="8" className="mt-2">
				 			<Col >
					 			<button id="actionBtn6" type="submit">
				 			 <PersonSearchIcon />
			                  <div className="d-inline px-2">Symptoms</div>
			 			
		                </button>
							</Col>
							<Col >
					 			<button id="actionBtn6" type="submit">
				 			 <FindInPageIcon />
			                  <div className="d-inline px-2">Resident File - Status Log</div>
			 			
		                </button>
							</Col>
				 		</Col> 
				 		
				 		</Col>
				 		: currentTab === "allergy"?
				 		<Allergies/>
				 		: null}
				 		


			 		</Col>

			 	</Row>
		</div>
	)
}

export default TenantProfile
			
			