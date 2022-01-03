import React from 'react';
import {Row, Col, Table} from 'react-bootstrap';

// import components
import IncidentInvestigationViewPopup from '../IncidentInvestigationViewPopup';
import IncidentInvestigationViewForm from './IncidentInvestigationViewForm';

// Icons
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@material-ui/core/InputBase';

function IncidentInvestigationForm() {

	return (
		<div>
			<Row className="d-flex justify-content-center">
				<Col md="12" >
				 		<InputBase
						  placeholder="Search…"
						  inputProps={{ 'aria-label': 'search' }}
						  endAdornment={<SearchIcon classname="pr-3"/>}
						  id="searchBar"

						/>
					</Col>	
				<Col md="12" sm="11">
					<Table  hover className="table" responsive>
						<thead>
							<tr>
								<th>Incident Date</th>
								<th>Resident Involve</th>
								<th>Status</th>
								<th>Note</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>11/28/2021</td>
								<td>Amanda Doe</td>
								<td>Hospitalize</td>
								<td>Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Sed ex quasi ad </td>
								<td>
						 			<IncidentInvestigationViewPopup 
						 			name="Amanda Doe">
						 				<IncidentInvestigationViewForm
						 				date="11/28/2021"
						 				time="09:27 AM"
						 				class="Incident one"
						 				loc="location One"/>
						 			</IncidentInvestigationViewPopup>
								</td>
							</tr>

							<tr>
								<td>06/13/2020</td>
								<td>John Smith</td>
								<td>Normal</td>
								<td>Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Sed ex quasi ad </td>
								<td>
							 		<IncidentInvestigationViewPopup
							 		name="John Smith">
							 				<IncidentInvestigationViewForm
							 				date="06/13/2020"
						 				time="04:20 PM"
						 				class="Incident two"
						 				loc="location two"/>
						 			</IncidentInvestigationViewPopup>
								</td>
							</tr>

							<tr>
								<td>05/27/2021</td>
								<td>Randy Flores</td>
								<td>Normal</td>
								<td>Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Sed ex quasi ad </td>
								<td>
							 		<IncidentInvestigationViewPopup
							 		name="Randy Flores">
							 			<IncidentInvestigationViewForm
							 			date="05/27/2021"
						 				time="01:13 PM"
						 				class="Incident three"
						 				loc="location three"/>
						 			</IncidentInvestigationViewPopup>
								</td>
							</tr>

							<tr>
								<td>02/12/2020</td>
								<td>Peter Parker</td>
								<td>Hospitalize</td>
								<td>Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Sed ex quasi ad </td>
								<td>
							 		<IncidentInvestigationViewPopup
							 		name="Peter Parker">
							 			<IncidentInvestigationViewForm
							 			date="02/12/2020"
						 				time="05:30 PM"
						 				class="Incident four"
						 				loc="location four"/>
						 			</IncidentInvestigationViewPopup>
								</td>
							</tr>

							<tr>
								<td>11/26/2021</td>
								<td>Tony Stark</td>
								<td>Hospitalize</td>
								<td>Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Sed ex quasi ad </td>
								<td>
							 		<IncidentInvestigationViewPopup
							 		name="Tony Stark">
							 			<IncidentInvestigationViewForm
							 			date="11/26/2021"
						 				time="02:30 PM"
						 				class="Incident five"
						 				loc="location five"/>
						 			</IncidentInvestigationViewPopup>
								</td>

							</tr>
						</tbody>
					</Table>
				</Col>
			</Row>
		</div>
		)
}


export default IncidentInvestigationForm