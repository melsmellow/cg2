import React from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import '../../../App.css'
import AddIcon from '@mui/icons-material/Add';
import Swal from 'sweetalert2'


function EnterVitalsForm() {

	const AddObservation = (e) =>{
		e.preventDefault();
		// add alert here

	

	}
	return (
		<div>
	 		<Form id="form" onSubmit={(e) => AddObservation(e)}>
			 	<Row>
			 		 <Col md="6" sm="8" className="mx-auto colItem" >
					    <Form.Control
					      type="date"
					      name="date"
					      required
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label htmlFor="date">Date</label>

			 		</Col>
			 		<Col md="6" sm="8" className="mx-auto  colItem" >
					    <Form.Control
					      type="time"
					      name="time"
					      required
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label htmlFor="time">Time</label>

			 		</Col>
			 		<Col md="6" sm="8" className="mx-auto  colItem" >
					    <Form.Control
					      type="text"
					      name="bodyTemp"
					      required
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label>Body Temperature</label>

			 		</Col>
			 		<Col md="6" sm="8" className="mx-auto  colItem" >
					    <Form.Control
					      type="text"
					      name="pulseRate"
					      required
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label>Pulse Rate</label>

			 		</Col>
			 		<Col md="6" sm="8" className="mx-auto  colItem" >
					    <Form.Control
					      type="text"
					      name="respirationRate"
					      required
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label>Respiration Rate</label>

			 		</Col>
			 		<Col md="6" sm="8" className="mx-auto  colItem" >
					    <Form.Control
					      type="text"
					      name="bloodPressure"
					      required
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label>Blood Pressure</label>

			 		</Col>
			 		
			 		
			 		<Col md="12" className="d-flex justify-content-center mt-3">
			 			 <button id="actionBtn" type="submit">
				 			 <AddIcon />
			                  <div className="d-inline px-2">ENTER VITALS</div>
		                </button>
			 		</Col> 		
			 	</Row>
		 	</Form>
		</div>
	)
}

export default EnterVitalsForm
			
