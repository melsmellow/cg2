import React,{useContext} from 'react';
import {Row , Col, Table} from 'react-bootstrap';
import AppContext from '../AppContext';

// component
import Popup from './Popup';
import TenantProfile from './TenantProfile';
// local image
import tenant1 from '../images/tenant1.jpg';
import tenant2 from '../images/tenant2.jpg';
import tenant3 from '../images/tenant3.jpg';
import tenant4 from '../images/tenant4.jpg';
import tenant5 from '../images/tenant5.jpg';

function TenantComp() {

	const { sideBarShowing, setSidebarShowing} = useContext(AppContext);
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
								<tr>
									<td><img id="tenantPic" src={tenant1} alt=""></img></td>
									<td>Amanda Watson</td>
									<td>87</td>
									<td>Hospitalize</td>
									<td>January 21, 1960</td>
									<div id="popBtn">
							 			<Popup>
											<TenantProfile 
											tenant="1"
											name="Amanda Watson" 
											age="87" 
											status="Hospitalize"
											birthday="January 21, 1960"
											address="New Jersey" 
											id="T20090"/>
										</Popup>
									</div>
								</tr>
								<tr>
									<td><img id="tenantPic" src={tenant2} alt=""></img></td>
									<td>Arnold Johnson</td>
									<td>79</td>
									<td>Normal</td>
									<td>November 20, 1960</td>
									<div id="popBtn">
							 			<Popup>
											
											<TenantProfile 
											tenant="2"
											name="Arnold Johnson" 
											age="79" 
											status="Normal"
											birthday="November 20, 1960"
											address="Tokyo" 
											id="T28991"/>
									
										</Popup>
									</div>
								</tr>
								<tr>
									<td><img id="tenantPic" src={tenant3} alt=""></img></td>
									<td>Edward Johnson</td>
									<td>80</td>
									<td>Normal</td>
									<td>February 14, 1960</td>
									<div id="popBtn">
							 			<Popup>
											<TenantProfile 
											tenant="3"
											name="Edward Johnson" 
											age="77" 
											status="Normal"
											birthday="February 14, 1960"
											address="San Francisco" 
											id="T27322"/>
										</Popup>
									</div>
								</tr>
								<tr>
									<td><img id="tenantPic" src={tenant4} alt=""></img></td>
									<td>Levi Ackerman</td>
									<td>77</td>
									<td>Hospitalize</td>
									<td>March 5, 1956</td>
									<div id="popBtn">
							 			<Popup>
											<TenantProfile 
											tenant="4"
											name="Levi Ackerman" 
											age="77" 
											status="Hospitalize"
											 birthday="March 5, 1956"
											 address="New York" 
											 id="T123672"/>
										</Popup>
									</div>
								</tr>
								<tr>
									<td><img id="tenantPic" src={tenant5} alt=""></img></td>
									<td>Eren Yeager</td>
									<td>65</td>
									<td>Hospitalize</td>
									<td>June 21, 1969</td>
									<div id="popBtn">
							 			<Popup>
											<TenantProfile 
											tenant="5"
											name="Eren Yeager" 
											age="65" 
											status="Hospitalize" 
											birthday="June 21, 1969"
											address="Nevada" 
											id="T23252"/>
										</Popup>
									</div>
									
								</tr>
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