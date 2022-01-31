import React,{useContext , useEffect, useState} from 'react';
import {Row , Col, Table} from 'react-bootstrap';
import AppContext from '../AppContext';


// axios api
import api from "../api/api";
// MUI
import InputBase from '@material-ui/core/InputBase';
// icons
import SearchIcon from '@mui/icons-material/Search';


function History() {

	// state for search word 
	const [wordEntered, setWordEntered] = useState("");

	// global variables
	const { historyList, setHistoryList, allergiesList, setAllergiesList, currentTab, setCurrentTab} = useContext(AppContext);


	const fetchTenantHistory = async () =>{

		let token = localStorage.getItem('token');
		let tenantId = localStorage.getItem('tenantId');
		
		await api.get(`/history/${tenantId}/fetch` , {
	        headers:{
	          'Authorization' : `Bearer ${token}`
	        }
	      }).then(res=>{

		    	setHistoryList(res.data)

	    })
	}

	useEffect(()=>{
		fetchTenantHistory();
	}, [])

	const cutDate = (string) => {
		let date = new Date(string)
		const month = date.toLocaleString('en-us', { month: 'long' }); /* June */
		const day = date.getUTCDate();
		const year = date.getUTCFullYear();

		const hour = date.getHours() % 12 || 12;;
		const min = date.getMinutes();
		const sec = date.getSeconds();

		var ampm = (date.getHours() >= 12) ? "PM" : "AM";


		let fullDate = month + " " + day + ", " + year + " - " + hour + ":" + min + ":" + sec + " " + ampm
		return fullDate
	}


	// function for search input
	  const handleFilter = async (event) => {
		const searchWord = event.target.value;
		setWordEntered(searchWord)

		let token = localStorage.getItem('token');
		let tenantId = localStorage.getItem('tenantId');
		
		await api.get(`/history/${tenantId}/fetch` , {
	        headers:{
	          'Authorization' : `Bearer ${token}`
	        }
	      }).then(res=>{

		    	setHistoryList(res.data)


			const newFilter = res.data.filter((value) =>{


				return value.title.toLowerCase().includes(searchWord.toLowerCase()) || value.userName.toLowerCase().includes(searchWord.toLowerCase())  
			})
			setHistoryList(newFilter)

	    })

	}


	return (
		<div>
			<Row>
				<Col md="12" className="mx-auto d-flex">				
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
				      <th>Date and Time</th>
				      <th>Title</th>
				      <th>User</th>
				    </tr>
				  </thead>
				  <tbody>
					{historyList.length === 0 ?
					 <tr className="mx-auto text-center">
			   			<td id="noFound" colSpan={8}>NO DATA FOUND</td>
			   		   </tr>
					:null}
				    {historyList.map((val, key)=> {
				    	return(
				    		<tr key={key}>
				    			<td>{cutDate(val.date)}</td>
				    			<td>{val.title}</td>
								<td>{val.userName}</td>
				    			
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

export default History