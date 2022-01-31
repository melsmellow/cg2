import React,{useContext , useEffect, useState} from 'react';
import {Row , Col, Table} from 'react-bootstrap';
import AppContext from '../../AppContext';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

// axios api
import api from "../../api/api";

import Popup from './DailyTaskPopup';
import AddNewAllergyForm from './form/AddNewAllergyForm';
import Swal from 'sweetalert2';
import EditPopup from './form/EditPopup';
import EditAllergyForm from './form/EditAllergyForm';


// Icons
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@material-ui/core/InputBase';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AttachmentIcon from '@mui/icons-material/Attachment';
import EditIcon from '@mui/icons-material/Edit';

function Allergies() {

	// global variables
	const {  allergyTypeList, setAllergyTypeList, allergiesList, setAllergiesList, currentTab, setCurrentTab} = useContext(AppContext);
	// state for search word 
	const [wordEntered, setWordEntered] = useState("");
	const [allergyTypeInput, setAllergyTypeInput] = useState("");
	let token = localStorage.getItem('token');
	const formatDate = (string) => {
		console.log(string)
		if(string === undefined){
			return ""
		}else{
			let date = new Date(string)
		const month = date.toLocaleString('en-us', { month: 'long' }); /* June */
		const day = date.getUTCDate();
		const year = date.getUTCFullYear();


		let fullDate = month + " " + day + ", " + year 
		return fullDate
		}
		
	}

	useEffect(() => {
		setAllergyTypeInput("all")
	}, [])

	// for filtering the course data based on department named
	useEffect(() => {

		let token = localStorage.getItem('token');
	    let tenantId = localStorage.getItem('tenantId');
	    api.get(`/tenants/allergy/${tenantId}/fetch` , {
	        headers:{
	          'Authorization' : `Bearer ${token}`
	        }
	      }).then(res => {

			setAllergiesList(res.data)
			console.log(res)
			if(allergyTypeInput !== "all"){
				const newFilter = res.data.filter((value) =>{

				return value.allergyType.toLowerCase().includes(allergyTypeInput.toLowerCase())
				})

				setAllergiesList(newFilter)
				console.log(newFilter)

			}
		})
		
	}, [allergyTypeInput])

	 // code for fetching allergy
	  useEffect(()=>{
	    fetchAllergy();
	  }, [])

	  const fetchAllergy = () =>{

	    let token = localStorage.getItem('token');
	    let tenantId = localStorage.getItem('tenantId');
	    api.get(`/tenants/allergy/${tenantId}/fetch` , {
	        headers:{
	          'Authorization' : `Bearer ${token}`
	        }
	      }).then(res => {
	        console.log(res)
	        setAllergiesList(res.data)
	      })
	  }

	  console.log(allergiesList)

	  // function for search input
	  const handleFilter = async (event) => {
		const searchWord = event.target.value;
		setWordEntered(searchWord)

		let token = localStorage.getItem('token');
		let tenantId = localStorage.getItem('tenantId');
		
		await api.get(`/tenants/allergy/${tenantId}/fetch` , {
	        headers:{
	          'Authorization' : `Bearer ${token}`
	        }
	      }).then(res=>{
		    	setAllergiesList(res.data)


			const newFilter = res.data.filter((value) =>{


				return value.allergy.toLowerCase().includes(searchWord.toLowerCase()) 
			})
			setAllergiesList(newFilter)

	    })

	}


	const deleteAllergy = (e, id, allergy) =>{
		e.preventDefault()

		let name = localStorage.getItem('name');
		let token = localStorage.getItem('token');
		let tenantName = localStorage.getItem('tenantName');
		let tenantId = localStorage.getItem('tenantId');

		Swal.fire({
		  title: 'Are you sure?',
		  text: "You won't be able to revert this!",
		  icon: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
		  if (result.isConfirmed) {

	  		api.put(`/tenants/allergy/${tenantId}/delete/${id}`).then(result => {

	  		console.log(result)

    		allergiesList.forEach((item,index) =>{
    			if(item._id === id){
    				allergiesList.splice(index, 1)
    			}
    		})

    		setAllergiesList([...allergiesList])
	    		Swal.fire(
			      'Deleted!',
			      'The Data has been deleted.',
			      'success'
			    )


	    		// adding history to database
				const input2 = {

					title: `Deleted ${tenantName}'s allergy data on ${allergy}` ,
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
	    		Swal.fire({
		          title: 'fail to delete',
		          icon: 'error',
		        })
	    	})

		  }
		})

	}

	return (
		<div>
			<Row>
				<Col md="12" className="mx-auto d-flex">
						<Popup>
							<AddNewAllergyForm/>
						</Popup>
							<div id="searchBar2" className="d-flex">


						  <Box id="drop-Drown" sx={{ minWidth: 120 }}>
						      <FormControl fullWidth>
						        <InputLabel variant="standard" htmlFor="uncontrolled-native">
						          Allergy Type
						        </InputLabel>
						        <NativeSelect
						          value={allergyTypeInput}
					      	  onChange= {e => setAllergyTypeInput(e.target.value)}>
						        >
					       		
				 				<option value="Food">Food</option>
				 				<option value="Environment">Environment</option>
				 				<option value="Medicine">Medicine</option>
							 		
							 		
										
							 	
						          <option value="all">All</option>
						        </NativeSelect>
						      </FormControl>
						    </Box>
		
				 		<InputBase
						  placeholder="Search…"
						  value={wordEntered}
	           			  onChange={handleFilter}
						  inputProps={{ 'aria-label': 'search' }}
						  className="pl-4"
						  endAdornment={<SearchIcon style={{ fontSize: 50 }} className="pl-3"/>}
						
						/>
						</div>	
				</Col>
				<Col md="12" className="mx-auto">
				<Table id="allergy-table" hover className="table" responsive>
				  <thead>
				    <tr>
				      <th>Allergy</th>
				      <th>Allergy Type</th>
				      <th>Allergen Type</th>
					  <th>Start Date</th>
					  <th>End Date</th>
					  <th>Reactions</th>
					  <th>Add Attachments</th>
					  <th>Action</th>
				    </tr>
				  </thead>
				  <tbody>
					{allergiesList.length === 0 ?
					 <tr className="mx-auto text-center">
			   			<td id="noFound" colSpan={8}>NO DATA FOUND</td>
			   		   </tr>
					:null}
				    {allergiesList.map((val, key)=> {
				    	return(
				    		<tr key={key}>
				    			<td>{val.allergy}</td>
				    			<td>{val.allergyType}</td>
								<td>{val.allergenType}</td>
								<td>{formatDate(val.startDate)}</td>
								<td>{formatDate(val.endDate)}</td>
								<td>{val.reaction}</td>
								<td><div id="edit-Btn" className="btn"
									>Add<AttachmentIcon/> 
						    			</div></td>
								<td>
								<div className="d-flex ">
								<EditPopup>
									<EditAllergyForm data={val}/>
								</EditPopup>
								<div id="del-Btn2" className="btn d-flex"
									onClick={(e)=>deleteAllergy(e,val._id, val.allergy)}><DeleteForeverIcon/> 
						    			</div></div></td>
				    			
				    		</tr>
				    		
				    	)
				    })}
				  </tbody>
				</Table>
				</Col>
			</Row>
		</div>
	)
}

export default Allergies