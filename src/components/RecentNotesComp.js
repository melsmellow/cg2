import React,{useContext} from 'react';
import {Row , Col,Table} from 'react-bootstrap';
import AppContext from '../AppContext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
// Mock Data
import {historyData} from '../historyData'

function RecentNotesComp() {

	// console.log(RoomData.tenantData.name);
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
								<h1>Recent Note</h1>
							</Col>
							<Col md="10" className="mx-auto">
							<Table  hover className="table" responsive>
						  <thead>
						    <tr>
						     
						      <th>Tenant's Name</th>
						      <th>Activity</th>
						      <th>Note</th>
							  <th>Date</th>
						    </tr>
						  </thead>
						  <tbody>
								{historyData.map((val, key) => {
									return(
										<tr key={key}>
											<td>{val.name}</td>
											<td>{val.activity}</td>
											<td>{val.note}</td>
											<td>{val.date}</td>

											
										</tr>
									)
								})}
							
						    {/*{RoomData.map((val, key)=> {
						    	return(
						    		<tr key={key}>
						    			<td>{val.roomCode}</td>
						    			<td>{val.location}</td>
										<td>{!val.isOccupied ? <CheckCircleIcon/> : <DoNotDisturbAltIcon/>}</td>
										<td>{val.name}</td>
										<td>{val.age}</td>
						    			
						    		</tr>
						    		
						    	)
						    })}*/}
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

export default RecentNotesComp