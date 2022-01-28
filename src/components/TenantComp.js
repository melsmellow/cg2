import React,{useContext , useEffect} from 'react';
import {Row , Col, Table} from 'react-bootstrap';
import AppContext from '../AppContext';

// component
import Popup from './tenants/Popup';
import TenantProfile from './TenantProfile';

// axios api
import api from "../api/api";
// local image
import tenant1 from '../images/tenant1.jpg';
import tenant2 from '../images/tenant2.jpg';
import tenant3 from '../images/tenant3.jpg';
import tenant4 from '../images/tenant4.jpg';
import tenant5 from '../images/tenant5.jpg';

function TenantComp() {

	const { tenantList, setTenantList, sideBarShowing, setSidebarShowing} = useContext(AppContext);

	const cutBirthday = (string) => {
		let date = new Date(string)
		const month = date.toLocaleString('en-us', { month: 'long' }); /* June */
		const day = date.getUTCDate();
		const year = date.getUTCFullYear();

		let fullDate = month + " " + day + ", " + year 
		return fullDate
	}

	const getTheAge = (birthday) => {
		let date = new Date(birthday)
		let currentYear = new Date().getFullYear()
		let year = date.getUTCFullYear();

		const age = currentYear - year

		return age
	}


	return (
		<div>
			<Row className="d-flex justify-content-center">
				{sideBarShowing ?
				<Col id="hidden-div" lg="2"></Col> :
				null}
				<Col md="10" sm="11">
				  	<Row>
						<div md="10" sm="11"className=" mt-5 mx-auto" id="dashContainer">
							<Col md="10">
								<h1>Tenant</h1>
							</Col>
							<Col md="10" className="mx-auto">
							<Table  hover className="table" responsive>
						  <thead>
						    <tr>
						     
							  <th>   </th>
						      <th>Name</th>
						      <th>Age</th>
						      <th>Status</th>
						      <th>Birthday</th>
							  <th>Action</th>
						    </tr>
						  </thead>
						  <tbody>
						  		{tenantList.map((val , key) =>{
						   		return(
						   			<tr key={key}>
						   				<td><img id="tenantPic" src={val.picture} alt=""></img></td>
						   				<td>{val.firstName}{" "}{val.middleName}{" "}{val.lastName}</td>
						   				<td>{getTheAge(val.birthday)}</td>
						   				<td>{val.status}</td>
						   				<td>{cutBirthday(val.birthday)}</td>
						   				<td><Popup>
											<TenantProfile 
											data={val}/>
										</Popup></td>
						   			</tr>
						   		)
						   	})}
								
						  </tbody>
						</Table>
						</Col>
						</div>
					</Row>
				</Col>
			</Row>
		</div>
	)
}

export default TenantComp