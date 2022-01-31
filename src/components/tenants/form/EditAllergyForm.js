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


function EditAllergyForm(data) {

	console.log(data)

	const { allergiesList, setAllergiesList, tenantList, setTenantList, content, setContent, dialogClose, setDialogClose} = useContext(AppContext);
	// State for all the input field
	const [allergy, setAllergy] = useState("");
	const [allergyType, setAllergyType] = useState("");
	const [allergenType, setAllergenType] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [reaction, setReaction] = useState("");


	let startDateInput = new Date(data.data.startDate)
	let newDate = startDateInput.toISOString().substr(0,10);
	// for Initial data from the edited data
	useEffect(()=>{

		

		setAllergy(data.data.allergy)
		setAllergyType(data.data.allergyType)
		setAllergenType(data.data.allergenType)
		setStartDate(newDate)
		setEndDate(data.data.endDate)
		setReaction(data.data.reaction)
	},[])

	const updateAllergy = () => {

		console.log("edit")

		let name = localStorage.getItem('name');
		let token = localStorage.getItem('token');
		let tenantName = localStorage.getItem('tenantName');
		let tenantId = localStorage.getItem('tenantId');

		const input = {

		    allergy: allergy,
			allergyType: allergyType,
			allergenType: allergenType,
			startDate: startDate,
			endDate: endDate,
			reaction: reaction
	    }


		// api call for adding new tenant
		api.put(`/tenants/allergy/${tenantId}/update/${allergy}` , input , {
			headers: {
				 'Authorization' : `Bearer ${token}`
			}
		}).then(result=>{

			// updating the College student on it's state to instantly apply the changes without refreshing the page
			allergiesList.forEach(item => {
	    		if(item.allergy === allergy){
			    	item.allergy = allergy
					item.allergyType = allergyType
					item.allergenType = allergenType
					item.startDate = startDate
					item.endDate = endDate
					item.reaction = reaction
	    		}
	    	})


			setAllergiesList([...allergiesList]);

			toast.success('Updated Successfully', {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			})

			// adding history to database
			

			const input2 = {

				title: `Edited ${tenantName}'s allergy data on ${allergy}` ,
				tenantName: tenantName,
				tenantId: tenantId,
				userName: name,
		    }
			api.post(`/history/create/` , input2 , {
			headers: {
				 'Authorization' : `Bearer ${token}`
			}
			}).then(result => {


			}).catch(err=>{

				console.error(err)

			})


		}).catch(err=>{
			console.log(err)
		})
	}

	useEffect(()=>{
		
			if(allergy !== "" && allergyType !== ""){

				const timeoutId = setTimeout(() => updateAllergy(), 1000);
				return () => clearTimeout(timeoutId);  	   

			}
		


	},[allergy,  allergyType , startDate , allergenType, endDate, reaction])



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
			 		<Col md="6" sm="8"  className="mx-auto mb-3 colItem">
					    <Form.Control
					      type="date"
					 	  placeholder=" "
					 	  value={endDate}
					      onChange={(e)=>setEndDate(e.target.value)}
					      className="formItem mt-3 form__input"
					    />
					    <label>End Date</label>
			 		</Col>
			 		<Col md="6" sm="8"  className="mx-auto mb-3 colItem">
					    <Form.Control
					      type="text"
					 	  placeholder=" "
					 	  value={reaction}
					      onChange={(e)=>setReaction(e.target.value)}
					      className="formItem mt-3 form__input"
					    />
					    <label>Reaction</label>
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

export default EditAllergyForm