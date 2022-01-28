import React, {useState, useEffect, useContext} from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import '../../../App.css'
import AddIcon from '@mui/icons-material/Add';

// global variable
import AppContext from '../../../AppContext';
// axios api
import api from "../../../api/api";
// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddNewAllergyForm() {

	const { allergiesList, setAllergiesList, tenantList, setTenantList, content, setContent, dialogClose, setDialogClose} = useContext(AppContext);
	// State for all the input field
	const [allergy, setAllergy] = useState("");
	const [allergyType, setAllergyType] = useState("");
	const [allergenType, setAllergenType] = useState("");
	const [startDate, setStartDate] = useState("");

	const addAllergy = () => {
		console.log("yow")

		const input = {

		    allergy: allergy,
			allergyType: allergyType,
			allergenType: allergenType,
			startDate: startDate
	    }

		let token = localStorage.getItem('token');
		let tenantId = localStorage.getItem('tenantId');

		// api call for adding new tenant
		api.post(`/tenants/allergy/${tenantId}/add` , input , {
			headers: {
				 'Authorization' : `Bearer ${token}`
			}
		}).then(result=>{

			console.log(result.data.allergies)

			setAllergiesList([...allergiesList,input]);

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

	useEffect(()=>{

	if(allergy !== "" && allergyType !== "" && startDate !== ""){

		const timeoutId = setTimeout(() => addAllergy(), 1000);
		return () => clearTimeout(timeoutId);  	   

	}

	},[allergy,  allergyType , startDate , allergenType])


	return (
		<div>
	 		<Form id="form">
			 	<Row>
			 		 <Col md="6" sm="8" className="mx-auto mb-3 colItem" >
					    <Form.Control
					      type="text"
					      name="sportsCode"
					      required
					      value={allergy}
					      onChange={(e)=>setAllergy(e.target.value)}
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label htmlFor="sportsCode">Allergy</label>

			 		</Col>
			 		 <Col md="6" sm="8" className="mx-auto mb-3 colItem ">
					    <Form.Control
					      type="text"
					      required
					      value={allergyType}
					      onChange={(e)=>setAllergyType(e.target.value)}
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label htmlFor="description">Allergy Type</label>
			 		</Col>
			 		<Col md="6" sm="8"  className="mx-auto mb-3 colItem">
					    <Form.Control
					      type="text"
					      value={allergenType}
					      onChange={(e)=>setAllergenType(e.target.value)}
					 	  placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label>Allergen Type</label>
			 		</Col>
			 		<Col md="6" sm="8"  className="mx-auto mb-3 colItem">
					    <Form.Control
					      type="date"
					 	  placeholder=" "
					 	  value={startDate}
					      onChange={(e)=>setStartDate(e.target.value)}
					      className="formItem mt-3 form__input"
					    />
					    <label>Start Date</label>
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

export default AddNewAllergyForm