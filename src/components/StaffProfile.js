import React from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import '../App.css'
import AddIcon from '@mui/icons-material/Add';


function StaffProfile(data) {

	
	return (
		<div>
	 		<Form id="form">
			 	<Row>
			 		 <Col md="6" sm="8" className="mx-auto mb-3 colItem" >
					    <Form.Control
					      type="text"
					      name="fName"
					      required
					      value={data.data.firstName}
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label htmlFor="fName">First Name</label>

			 		</Col>
			 		 <Col md="6" sm="8" className="mx-auto mb-3 colItem ">
					    <Form.Control
					      type="text"
					      name="lName"
					      required
					      value={data.data.lastName}
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label htmlFor="lName">Last Name</label>
			 		</Col>
			 		<Col md="6" sm="8"  className="mx-auto mb-3 colItem">
					    <Form.Control
					      type="text"
					      name="position"
					      required
					      value={data.data.position}
					 	  placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label>Position</label>
			 		</Col>
			 		<Col md="6" sm="8"  className="mx-auto mb-3 colItem">
					    <Form.Control
					      type="text"
					      name="age"
					      required
					      value={data.data.age}
					 	  placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label>age</label>
			 		</Col>
			 		<Col md="6" sm="8"  className="mx-auto mb-3 colItem">
					    <Form.Control
					      type="text"
					      name="adress"
					      required
					      value={data.data.address}
					 	  placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label>Address</label>
			 		</Col>
			 		<Col md="6" sm="8"  className="mx-auto mb-3 colItem">
					    <Form.Control
					      type="text"
					      name="bDay"
					      required
					      value={data.data.birthday}
					 	  placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label>Birthday</label>
			 		</Col>
			 		<Col md="8">
			 			<Button  variant="contained" id="addNewStubtn" type="submit">Action 1</Button>
			 			<Button  variant="contained" id="addNewStubtn" type="submit">Action 2</Button>
			 		</Col> 		
			 	</Row>
		 	</Form>
		</div>
	)
}

export default StaffProfile
			
			