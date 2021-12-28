import React,{useContext} from 'react';
import {Row , Col, Table} from 'react-bootstrap';
import AppContext from '../AppContext';

// Component
import Popup from './Popup';
import StaffProfile from './StaffProfile'

// Material UI
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';

// Mock Data
import {StaffData} from './StaffData'
import staff2 from '../images/staff4.jpg';


function StaffComp() {

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
								<h1>Staff</h1>
							</Col>
							<Col md="10" className="mx-auto">
							<Table  hover className="table" responsive>
						  <thead>
						    <tr>
						     
							  <th>   </th>
						      <th>Staff Name</th>
						      <th>Position</th>
						      <th>Status</th>
							  <th>Availability</th>
							  <th>Action</th>
						    </tr>
						  </thead>
						  <tbody>
								
							
						    {StaffData.map((val, key)=> {
						    	return(
						    		<tr key={key}>
										<td><img id="profImg" src={staff2}></img></td>
						    			<td>{val.firstName}{" "}{val.lastName}</td>
						    			<td>{val.position}</td>
						    			<td>{val.status}</td>
										<td>{val.isAvailable ? <CheckCircleIcon/> : <DoNotDisturbAltIcon/>}</td>
										<div id="popBtn">
							 			<Popup>
											<StaffProfile data={val}/>
										</Popup>
										</div>
						    			
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

export default StaffComp