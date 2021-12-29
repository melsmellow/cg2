import React from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import '../../../App.css'
import AddIcon from '@mui/icons-material/Add';
import Swal from 'sweetalert2'
import SaveAltIcon from '@mui/icons-material/SaveAlt';


// toast
// import {toast} from 'react-toastify';
// import 'react-toast/dist/ReactToastify.css';
// pop up
import Popup from '../../Popup';

// toast.configure()
function EditDailyTaskForm(data) {

	const editDailyTask = (e) =>{
		e.preventDefault()

		// toast('Added Successfully');

	}
	
	return (
		<div>
	 		<Form id="form" onSubmit={(e) => editDailyTask(e)}>
			 	<Row>
			 		 <Col md="6" sm="8" className="mx-auto colItem" >
					    <Form.Control
					      type="text"
					      name="title"
					      required
					      defaultValue={data.title}
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label htmlFor="date">Title</label>

			 		</Col>
			 		<Col md="6" sm="8" className="mx-auto  colItem" >
					    <Form.Control
					      type="text"
					      name="description"
					      defaultValue={data.description}
					      required
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label htmlFor="time">Description</label>
			 		</Col>
			 			<Col md="6" sm="8" className="mx-auto  colItem" >
					    <Form.Control
					      type="text"
					      name="date"
					      required
					      value={data.date}
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label htmlFor="date">Date</label>
			 		</Col>
			 		<Col md="12" className="d-flex justify-content-center">
			 			 <button id="actionBtn" type="submit">
				 			 <SaveAltIcon />
			                  <div className="d-inline px-2">SAVE DATA</div>
		                </button>
			 		</Col> 		
			 	</Row>
		 	</Form>
		</div>
	)
}

export default EditDailyTaskForm
			
			