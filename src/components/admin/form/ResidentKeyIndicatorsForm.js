import React,{useContext} from 'react';
import {Row , Col, Table, Button} from 'react-bootstrap';

// component

function ResidentKeyIndicatorsForm() {

	return (
		<div>
			<Row className="">
						<Table  hover className="table" responsive>
						  <thead>
						    <tr>
						     
							  <th>Key Indicator</th>
						      <th>Name</th>
						      <th>Age</th>
						      <th>Status</th>
						      <th>Birthday</th>
						    </tr>
						  </thead>
						  <tbody>
								<tr>
									<td>T236270</td>
									<td>Amanda Watson</td>
									<td>87</td>
									<td>Hospitalize</td>
									<td>January 21, 1960</td>
									
								
								</tr>
								<tr>
									<td>T891829</td>
									<td>Arnold Johnson</td>
									<td>79</td>
									<td>Normal</td>
									<td>November 20, 1960</td>
								
								</tr>
								<tr>
									<td>T126389</td>
									<td>Edward Johnson</td>
									<td>80</td>
									<td>Normal</td>
									<td>February 14, 1960</td>
								
								</tr>
								<tr>
									<td>T980123</td>
									<td>Levi Ackerman</td>
									<td>77</td>
									<td>Hospitalize</td>
									<td>March 5, 1956</td>
									
								</tr>
								<tr>
									<td>T1091238</td>
									<td>Eren Yeager</td>
									<td>65</td>
									<td>Hospitalize</td>
									<td>June 21, 1969</td>
								
									
								</tr>
						  </tbody>
						</Table>
			</Row>
		</div>
	)
}

export default ResidentKeyIndicatorsForm