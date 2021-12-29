import React from 'react';
import {Row, Col, Form, Button, Table} from 'react-bootstrap';
import '../App.css'
import AddIcon from '@mui/icons-material/Add';

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

// Tenants Popup Components
import AddObservationPopup from './tenants/AddObservationPopup';
import DailyTaskPopup from './tenants/DailyTaskPopup';
import ProvideSingleCarePopup from './tenants/ProvideSingleCarePopup';
import MedicalPassPopup from './tenants/MedicalPassPopup';
import EnterVitalsPopup from './tenants/EnterVitalsPopup';
import FileIncidentReportPopup from './tenants/FileIncidentReportPopup';

function TenantProfile(data) {

   const current = new Date();
   const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
	
	return (
		<div>
	 		<Form id="form">
			 	<Row>
			 		 <Col md="12" sm="12" className="mx-auto mb-3 colItem" >
			 		 	<Col md="12" className="mb-3 d-flex justify-content-center">
					    <h2>Tenant Id: {data.id}</h2>
					    </Col>
					    <Col md="12" className="d-flex justify-content-center">
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
						    

							
					    </Col>
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
									hey
							</ProvideSingleCarePopup>
						</Col>
			 		</Col> 	
			 		<Col id="tenantActionContainer" md="8" className="mx-auto mt-3">
			 			<Col className="px-0">
				 			<MedicalPassPopup>
									hey
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


			 			{/**/}
			 			<Col md="12" className="mx-auto mt-5">
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
						</Col>
			 	</Row>
		 	</Form>
		</div>
	)
}

export default TenantProfile
			
			