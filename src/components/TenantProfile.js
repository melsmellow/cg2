import React from 'react';
import {Row, Col, Form, Button, Table} from 'react-bootstrap';
import '../App.css'
import AddIcon from '@mui/icons-material/Add';


function TenantProfile(data) {

	console.log(data)
   const current = new Date();
   const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
	
	return (
		<div>
	 		<Form id="form">
			 	<Row>
			 		 <Col md="12" sm="12" className="mx-auto mb-3 colItem" >
					    <h2>Tenant Id: {data.id}</h2>
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
			 		
			 		<Col md="8">
			 			<Button  variant="contained" id="addNewStubtn" type="submit">Action 1</Button>
			 			<Button  variant="contained" id="addNewStubtn" type="submit">Action 2</Button>
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
			
			