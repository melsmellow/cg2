import React , {useContext, useState, useEffect} from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import '../../../App.css'
import AddIcon from '@mui/icons-material/Add';
import Swal from 'sweetalert2'

// global variable
import AppContext from '../../../AppContext';

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// pop up
import Popup from '../../Popup';

// toast.configure()
function ProvideSingleCareForm() {

	const { content, setContent, dialogClose, setDialogClose} = useContext(AppContext);

	const [buttonIsEnable, setButtonIsEnable] = useState(true);
		// useState for all the input fields
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [title, setTitle] = useState("");
	const [note, setNote] = useState("");


	useEffect(()=>{

		if(date !== "" && time !== "" && title !== "" && note !== ""){

			const timeoutId = setTimeout(() => provideCare(), 1000);
			return () => clearTimeout(timeoutId);  	   

		}

	},[date, time, title, note])

	const provideCare = (e) =>{
		// console.log("hello")
		// e.preventDefault();
		// add alert here
		setButtonIsEnable(false);

		toast.success('Care Provided Successfully', {
		position: "top-right",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
		})

		// delay function

		setTimeout(function(){

			setDialogClose(false);

		}, 2000); 


	}
	
	return (
		<div>
	 		<Form id="form" onSubmit={(e) => provideCare(e)}>
			 	<Row>
			 		 <Col md="6" sm="8" className="mx-auto colItem" >
					    <Form.Control
					      type="date"
					      name="date"
					      required
					      value={date}
					      onChange={(e)=>setDate(e.target.value)}
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
					      value={time}
					      onChange={(e)=>setTime(e.target.value)}
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
					      value={title}
					      onChange={(e)=>setTitle(e.target.value)}
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label htmlFor="report">Title</label>

			 		</Col>
			 		<Col md="10" sm="10"  className="mx-auto mb-3 colItem">
			 		  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					    <Form.Label>Note</Form.Label>
					    <Form.Control required as="textarea" rows={3} value={note}
					      onChange={(e)=>setNote(e.target.value)}/>
					  </Form.Group>
				    </Col>
			 		<Col md="12" className="d-flex justify-content-center">
			 			{/*{buttonIsEnable == true ? 
		 				<button id="actionBtn" type="submit">
				 			 <AddIcon />
			                  <div className="d-inline px-2">PROVIDE CARE</div>
		                </button>

		                :
		                <button disabled id="actionBtn" type="submit">
				 			 <AddIcon />
			                  <div className="d-inline px-2">PROVIDE CARE</div>
		                </button>

			 			}*/}
			 			

		                 <ToastContainer
						position="top-right"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						/>
			 		</Col> 		
			 	</Row>
		 	</Form>
		</div>
	)
}

export default ProvideSingleCareForm
			
			