import React,{useContext , useEffect, useState} from 'react';
import {Row , Col, Table} from 'react-bootstrap';
import AppContext from '../../AppContext';

// axios api
import api from "../../api/api";

import Popup from './DailyTaskPopup';
import AddNewAllergyForm from './form/AddNewAllergyForm';
import Swal from 'sweetalert2';


// Icons
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@material-ui/core/InputBase';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Allergies() {


	// global variables
	const {  allergiesList, setAllergiesList, currentTab, setCurrentTab} = useContext(AppContext);
	// state for search word 
	const [wordEntered, setWordEntered] = useState("");
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


	const deleteAllergy = (e, id) =>{
		e.preventDefault()
		console.log(id)

		let tenantId = localStorage.getItem('tenantId');
	  	api.put(`/tenants/allergy/${tenantId}/delete/${id}`).then(result => {

	  		console.log(result)

    		allergiesList.forEach((item,index) =>{
    			if(item._id === id){
    				allergiesList.splice(index, 1)
    			}
    		})

    		setAllergiesList([...allergiesList])
    		
    	}).catch(err=>{
    		
    	})
	}

	return (
		<div>
			<Row>
				<Col md="12" className="mx-auto d-flex">
						<Popup>
							<AddNewAllergyForm/>
						</Popup>				
				 		<InputBase
						  placeholder="Search…"
						  value={wordEntered}
	           			  onChange={handleFilter}
						  inputProps={{ 'aria-label': 'search' }}
						  endAdornment={<SearchIcon style={{ fontSize: 50 }} className="pr-3"/>}
						  id="searchBar2"
						/>
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
								<td>add attachment</td>
								<td><div id="del-Btn" className="btn"
									onClick={(e)=>deleteAllergy(e,val._id)}><DeleteForeverIcon/> remove
						    			</div></td>
				    			
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