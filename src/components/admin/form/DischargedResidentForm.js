import React,{useContext} from 'react';
import {Row , Col, Table, Button} from 'react-bootstrap';

// component

// local image
import tenant1 from '../../../images/tenant1.jpg';
import tenant2 from '../../../images/tenant2.jpg';
import tenant3 from '../../../images/tenant3.jpg';
import tenant4 from '../../../images/tenant4.jpg';
import tenant5 from '../../../images/tenant5.jpg';

function DischargedResidentForm() {

	return (
		<div>
			<Row className="">
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
								<tr>
									<td><img id="tenantPic" src={tenant1} alt=""></img></td>
									<td>Amanda Watson</td>
									<td>87</td>
									<td>Hospitalize</td>
									<td>January 21, 1960</td>
									
									<td>
							 			<button id="actionBtn4">Discharged</button>
									</td>
								</tr>
								<tr>
									<td><img id="tenantPic" src={tenant2} alt=""></img></td>
									<td>Arnold Johnson</td>
									<td>79</td>
									<td>Normal</td>
									<td>November 20, 1960</td>
									<td>
							 			<button id="actionBtn4">Discharged</button>
									</td>
								</tr>
								<tr>
									<td><img id="tenantPic" src={tenant3} alt=""></img></td>
									<td>Edward Johnson</td>
									<td>80</td>
									<td>Normal</td>
									<td>February 14, 1960</td>
									<td>
							 			<button id="actionBtn4">Discharged</button>
									</td>
								</tr>
								<tr>
									<td><img id="tenantPic" src={tenant4} alt=""></img></td>
									<td>Levi Ackerman</td>
									<td>77</td>
									<td>Hospitalize</td>
									<td>March 5, 1956</td>
									<td>
							 			<button id="actionBtn4">Discharged</button>
									</td>
								</tr>
								<tr>
									<td><img id="tenantPic" src={tenant5} alt=""></img></td>
									<td>Eren Yeager</td>
									<td>65</td>
									<td>Hospitalize</td>
									<td>June 21, 1969</td>
									<td>
							 			<button id="actionBtn4">Discharged</button>
									</td>
									
								</tr>
						  </tbody>
						</Table>
			</Row>
		</div>
	)
}

export default DischargedResidentForm