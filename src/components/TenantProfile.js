import React, {useState, useEffect} from 'react';
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

function TenantProfile(data) {

	// state for tenant action tab
	const [currentTab, setCurrentTab] = useState("provide service");
	useEffect(() => {

		console.log(currentTab)

	},[currentTab])
	

   const current = new Date();
   const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
	
	return (
		<div>
{/*	 		<Form id="form">*/}
			 	<Row>
			 		 <Col md="12" sm="12" className="mx-auto mb-3 colItem" >
			 		 	<Row>
			 		 		<Col md="4" className="mb-3 text-center">
					   			 <h4>Tenant Id: {data.id}</h4>
					   			 <div className="mx-auto d-flex justify-content-center">
					   			 {data.tenant == 1 ? 
							    <img id="tenantPic" src={tenant1} alt=""></img> 
							    : data.tenant == 2 ?
							     <img id="tenantPic" src={tenant2} alt=""></img> 
							    : data.tenant == 3 ?
							     <img id="tenantPic" src={tenant3} alt=""></img> 
							    : data.tenant == 4 ?
							     <img id="tenantPic" src={tenant4} alt=""></img> 
							    : data.tenant == 5 ?
							     <img id="tenantPic" src={tenant5} alt=""></img> 
							    : null
								}
								</div>
					   		</Col>
					   		<Col md="8" id="allergyLabel">
					   			<h4 className="mb-3 mt-5">Allergies: <h5>{data.allergies}</h5></h4>
					   			<h4>Code Status: <h5></h5></h4>
					   		</Col>
			 		 	</Row>
					
					   
			 		</Col>
			 		 <Col md="6" sm="8" className="mx-auto mb-3 colItem" >
					    <Form.Control
					      type="text"
					      name="name"
					      required
					      value={data.name}
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label htmlFor="name">Name</label>

			 		</Col>
			 		 <Col md="6" sm="8" className="mx-auto mb-3 colItem ">
					    <Form.Control
					      type="text"
					      name="age"
					      required
					   	  value={data.age}
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label htmlFor="age">Age</label>
			 		</Col>
			 		<Col md="6" sm="8"  className="mx-auto mb-3 colItem">
					    <Form.Control
					      type="text"
					      name="status"
					      required
					      value={data.status}
					 	  placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label>Status</label>
			 		</Col>
			 		<Col md="6" sm="8"  className="mx-auto mb-3 colItem">
					    <Form.Control
					      type="text"
					      name="bDay"
					      required
					      value={data.birthday}
					 	  placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label>Birthday</label>
			 		</Col>
			 		<Col md="6" sm="8"  className="mx-auto mb-3 colItem">
					    <Form.Control
					      type="text"
					      name="adress"
					      required
					      value={data.address}
					 	  placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label>Address</label>
			 		</Col>
			 		
			 		<Col md="12" id="actionHolder">
				 		<Col md="12" id="subTitle" className="mb-3 py-2">

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

				 		 	

				 		 </Col>
				 		 {currentTab == 'provide service'
				 		 ?<Col>
				 		 <Col id="tenantActionContainer" md="8" >
				 			<Col className="px-0">
					 			<AddObservationPopup>
										<AddObservationForm/>
								</AddObservationPopup>
							</Col>
							<Col className="px-2">
					 			<DailyTaskPopup>
										<DailyTaskForm/>
								</DailyTaskPopup>
							</Col>
							<Col className="px-0">
					 			<ProvideSingleCarePopup>
										<ProvideSingleCareForm/>
								</ProvideSingleCarePopup>
							</Col>
				 		</Col> 	
				 		<Col id="tenantActionContainer" md="8" className="mx-auto mt-3">
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
				 		: null}
				 		


			 		</Col>




			 			{/**/}
			 			{/*<Col md="12" className="mx-auto mt-5">
				 		<h2>Activity History</h2>
					 	<Table  hover className="table">
						  <thead>
						    <tr>
						     
						      <th>Title</th>
						      <th>Description</th>
						      <th>Date</th>
						    </tr>
						  </thead>
						  <tbody>
						   	  <tr>
						   	  	<td>1st Dose Vaccine</td>
						   	  	<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, architecto illo, unde </td>
						   	  	<td>{date}</td>
						   	  </tr>
						   	   <tr>
						   	  	<td>Oxygen</td>
						   	  	<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, architecto illo, unde </td>
						   	  	<td>{date}</td>
						   	  </tr>
						  </tbody>
						</Table>
						</Col>*/}
			 	</Row>
		</div>
	)
}

export default TenantProfile
			
			