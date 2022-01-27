import React ,{useEffect, useState, useContext} from 'react';
import {Row, Col, Form, Button, Container} from 'react-bootstrap';
import '../../../App.css'
import AddIcon from '@mui/icons-material/Add';

// global variable
import AppContext from '../../../AppContext';
// axios api
import api from "../../../api/api";

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddNewResidentForm() {

	const { tenantList, setTenantList, content, setContent, dialogClose, setDialogClose} = useContext(AppContext);

	console.log(dialogClose);

	const [buttonIsEnable, setButtonIsEnable] = useState(true);

	// useState for all the input fields
	const [firstName , setFirstName] = useState("");
	const [middleName , setMiddleName] = useState("");
	const [lastName , setLastName] = useState("");
	const [address , setAddress] = useState("");
	const [birthday , setBirthday] = useState("");
	const [status , setStatus] = useState("");
	const [image , setImage] = useState("");

	// useState for handling image upload
	const [fileInputState , setFileInputState] = useState("");
	const [selectedFile , setSelectedFile] = useState("");

	const [imageFile , setImageFile] = useState("");

	const handleFileInputChange = (e) =>{
		const file = e.target.files[0];
		previewFile(file)
		setImageFile(file)

	}

	const previewFile = (file) =>{
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () =>{
			setImage(reader.result);
		}
	}

	useEffect(()=>{

	if(firstName !== "" && middleName !== "" && lastName !== "" && address !== "" && birthday !== "" && status !== "" && image !== ""){

		const timeoutId = setTimeout(() => addNewResident(), 1000);
		return () => clearTimeout(timeoutId);  	   

	}

	},[firstName, middleName , lastName, address, birthday , status, image  ])

	const addNewResident = (e) =>{
		// e.preventDefault()

		console.log("yow")
		let token = localStorage.getItem('token');

		const formData = new FormData();

		formData.append('image', imageFile);
		formData.append('firstName', firstName);
		formData.append('middleName', middleName);
		formData.append('lastName', lastName);
		formData.append('birthday', birthday);
		formData.append('status', status);
		formData.append('address', address);

			// api call for adding new tenant
			api.post('/tenants/add' , formData , {
				headers: {
					 'Authorization' : `Bearer ${token}`
				}
			}).then(result=>{

				console.log(result)
				setTenantList([...tenantList, result.data]);
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

			}).catch(err=>{
				console.log(err)
			})

		
		

	}

	return (
		<div>
	 		<Form id="form" onSubmit={(e)=>addNewResident(e)}>
			 	<Row>
			 		<Col md="12" sm="8"  className="mx-auto mb-3 text-center">
			 		{image ?
			 		 <img id="tenantPic" src={image} alt=""></img> 
			 		:null}
			 		</Col>
			 		<Col md="12" sm="8"  className="mx-auto mb-3 ">
			 			<Col md="6" sm="8"  className="mx-auto mb-3 text-center">
					    <Form.Control
					      type="file"
					      name="image"
					      value={fileInputState}
					      onChange={handleFileInputChange}
					      required
					 	  placeholder=" "
					    />
					    <label>Tenant's Picture</label>
					    </Col>
			 		</Col>
			 		
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
			 		{/*<Col md="6" sm="8"  className="mx-auto mb-3 colItem">
					    <Form.Control
					      type="text"
					      name="allergies"
					      value={allergies}
					      onChange={(e)=>setAllergies(e.target.value)}
					 	  placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label>Allergies</label>
			 		</Col>*/}
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
			 			<Col md="6" sm="8"  className="mx-auto mb-3 colItem">
					    <Form.Control
					      type="text"
					      name="status"
					      value={status}
					      onChange={(e)=>setStatus(e.target.value)}
					      required
					 	  placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label>Status</label>
			 		</Col>





			 		
			 		


			 		<Col md="12" className="d-flex justify-content-center">
			 		
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
		
			