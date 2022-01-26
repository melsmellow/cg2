import React ,{useContext, useState, useEffect} from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import '../../../App.css'
import AddIcon from '@mui/icons-material/Add';
import Swal from 'sweetalert2'
import SaveAltIcon from '@mui/icons-material/SaveAlt';

// global variable
import AppContext from '../../../AppContext';

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// pop up
import Popup from '../../Popup';

// toast.configure()
function EditDailyTaskForm(data) {

	const { content, setContent, dialogClose, setDialogClose} = useContext(AppContext);

	const [buttonIsEnable, setButtonIsEnable] = useState(true);

	// useState for all the input fields
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [description, setDescription] = useState("");

	useEffect(()=>{
		setTitle(data.title)
		setDate(data.date)
		setDescription(data.description)

	},[])

	useEffect(()=>{
		
		const timeoutId = setTimeout(() => editDailyTask(), 1000);
		return () => clearTimeout(timeoutId);  
	

	},[title, date, description])


	const editDailyTask = (e) =>{
		// e.preventDefault()

		setButtonIsEnable(false);

		toast.success('Updated Successfully', {
		position: "top-right",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
		})

		// delay function

		// setTimeout(function(){

		// 	setDialogClose(false);

		// }, 2000); 

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
					      value={title}
					      onChange={(e)=>setTitle(e.target.value)}
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label htmlFor="date">Title</label>

			 		</Col>
			 		<Col md="6" sm="8" className="mx-auto  colItem" >
					    <Form.Control
					      type="text"
					      name="description"
					      value={description}
					      onChange={(e)=>setDescription(e.target.value)}
					      required
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label htmlFor="time">Description</label>
			 		</Col>
			 			<Col md="6" sm="8" className="mx-auto  colItem" >
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
			 		<Col md="12" className="d-flex justify-content-center">
			 			{/*{buttonIsEnable == true ? 
			 				<button id="actionBtn" type="submit">
				 			 <SaveAltIcon />
			                  <div className="d-inline px-2">SAVE DATA</div>
			 			
		                </button>
		                : <button disabled id="actionBtn" type="submit">
				 			 <SaveAltIcon />
			                  <div className="d-inline px-2">SAVE DATA</div>
			 			
		                </button>

			 			}
			 			 */}
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

export default EditDailyTaskForm
			
			