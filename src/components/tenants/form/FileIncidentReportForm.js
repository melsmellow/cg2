import React from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import '../../../App.css'
import AddIcon from '@mui/icons-material/Add';
import Swal from 'sweetalert2'


// toast
// import {toast} from 'react-toastify';
// import 'react-toast/dist/ReactToastify.css';
// pop up
import Popup from '../../Popup';

// toast.configure()
function FileIncidentReportForm() {

	const AddObservation = (e) =>{
		e.preventDefault()

		// toast('Added Successfully');

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
					      name="report"
					      required
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label htmlFor="report">Report Title</label>

			 		</Col>
			 		<Col md="10" sm="10"  className="mx-auto mb-3 colItem">
			 		  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					    <Form.Label>Note</Form.Label>
					    <Form.Control required as="textarea" rows={3} />
					  </Form.Group>
				    </Col>
			 		<Col md="12" className="d-flex justify-content-center">
			 			 <button id="actionBtn" type="submit">
				 			 <AddIcon />
			                  <div className="d-inline px-2">ADD DATA</div>
		                </button>
			 		</Col> 		
			 	</Row>
		 	</Form>
		</div>
	)
}

export default FileIncidentReportForm
			
			