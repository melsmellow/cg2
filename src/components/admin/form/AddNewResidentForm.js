import React ,{useEffect, useState, useContext} from 'react';
import {Row, Col, Form, Button, Container} from 'react-bootstrap';
import '../../../App.css'
import AddIcon from '@mui/icons-material/Add';

// global variable
import AppContext from '../../../AppContext';

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddNewResidentForm() {

	const { content, setContent, dialogClose, setDialogClose} = useContext(AppContext);

	console.log(dialogClose);

	const [buttonIsEnable, setButtonIsEnable] = useState(true);

	// useState for all the input fields
	const [firstName , setFirstName] = useState("");
	const [middleName , setMiddleName] = useState("");
	const [lastName , setLastName] = useState("");
	const [suffix , setSuffix] = useState("");
	const [age , setAge] = useState("");
	const [address , setAddress] = useState("");
	const [birthday , setBirthday] = useState("");

	useEffect(()=>{

	if(firstName !== "" && lastName !== "" && age !== "" && address !== "" && birthday !== ""){

		const timeoutId = setTimeout(() => addNewResident(), 1000);
		return () => clearTimeout(timeoutId);  	   

	}

	},[firstName, lastName, age, address, birthday])

	const addNewResident = (e) =>{
		// e.preventDefault()

		setButtonIsEnable(false);

		toast.success('Added Successfully', {
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
	 		<Form id="form" onSubmit={(e)=>addNewResident(e)}>
			 	<Row>
			 		<Col md="6" sm="8" className="mx-auto mb-3 colItem" >
					    <Form.Control
					      type="text"
					      name="fName"
					      required
					      value={firstName}
					      onChange={(e)=>setFirstName(e.target.value)}
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label htmlFor="fName">First Name</label>

			 		</Col>
			 		 <Col md="6" sm="8" className="mx-auto mb-3 colItem ">
					    <Form.Control
					      type="text"
					      name="midName"
					      value={middleName}
					      onChange={(e)=>setMiddleName(e.target.value)}
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label htmlFor="midName">Middle Name</label>
			 		</Col>
			 		 <Col md="6" sm="8" className="mx-auto mb-3 colItem ">
					    <Form.Control
					      type="text"
					      name="lName"
					      value={lastName}
					      onChange={(e)=>setLastName(e.target.value)}
					      required
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label htmlFor="lName">Last Name</label>
			 		</Col>
			 		<Col md="6" sm="8"  className="mx-auto mb-3 colItem">
					    <Form.Control
					      type="text"
					      name="suffix"
					      value={suffix}
					      onChange={(e)=>setSuffix(e.target.value)}
					 	  placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label>Suffix</label>
			 		</Col>
			 		<Col md="6" sm="8"  className="mx-auto mb-3 colItem">
					    <Form.Control
					      type="text"
					      name="age"
					      value={age}
					      onChange={(e)=>setAge(e.target.value)}
					      required
					 	  placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label>Age</label>
			 		</Col>
			 		<Col md="6" sm="8"  className="mx-auto mb-3 colItem">
					    <Form.Control
					      type="text"
					      name="adress"
					      value={address}
					      onChange={(e)=>setAddress(e.target.value)}
					      required
					 	  placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label>Address</label>
			 		</Col>
			 		<Col md="6" sm="8"  className="mx-auto mb-3 colItem">
					    <Form.Control
					      type="date"
					      name="bDay"
					      required
					      value={birthday}
					      onChange={(e)=>setBirthday(e.target.value)}
					 	  placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label>Birthday</label>
			 		</Col>
			 		<Col md="12" className="d-flex justify-content-center">
			 			{/*{buttonIsEnable == true ?
			 			 <button id="actionBtn" type="submit">
				 			 <AddIcon />
			                  <div className="d-inline px-2">ADD RESIDENT</div>
			 			
		                </button>
		                : <button disabled id="actionBtn" type="submit">
				 			 <AddIcon />
			                  <div className="d-inline px-2">ADD RESIDENT</div>
			 			
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

export default AddNewResidentForm
		
			