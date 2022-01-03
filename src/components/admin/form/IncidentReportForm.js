import React from 'react';
import {Row, Col, Table} from 'react-bootstrap';

function IncidentReportForm() {
   const current = new Date();
   const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

	return (
		<div>
			<Row className="d-flex justify-content-center">
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
								<td>{date}</td>
								<td>Amanda Doe</td>
								<td>Hospitalize</td>
								<td>Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Sed ex quasi ad </td>
								<td>
							 			<button id="actionBtn4">Actione 1</button>
									</td>
							</tr>

							<tr>
								<td>{date}</td>
								<td>John Smith</td>
								<td>Normal</td>
								<td>Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Sed ex quasi ad </td>
								<td>
							 			<button id="actionBtn4">Actione 1</button>
									</td>
							</tr>

							<tr>
								<td>{date}</td>
								<td>Randy Flores</td>
								<td>Normal</td>
								<td>Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Sed ex quasi ad </td>
								<td>
							 			<button id="actionBtn4">Actione 1</button>
									</td>
							</tr>

							<tr>
								<td>{date}</td>
								<td>Peter Parker</td>
								<td>Hospitalize</td>
								<td>Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Sed ex quasi ad </td>
								<td>
							 			<button id="actionBtn4">Actione 1</button>
									</td>
							</tr>

							<tr>
								<td>{date}</td>
								<td>Tony Stark</td>
								<td>Hospitalize</td>
								<td>Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Sed ex quasi ad </td>
								<td>
							 			<button id="actionBtn4">Actione 1</button>
									</td>

							</tr>
						</tbody>
					</Table>
				</Col>
			</Row>
		</div>
		)
}

export default IncidentReportForm