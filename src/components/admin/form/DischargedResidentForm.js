import React,{useContext} from 'react';
import {Row , Col, Table} from 'react-bootstrap';
import AppContext from '../../../AppContext';


// local image
import tenant1 from '../../../images/tenant1.jpg';
import tenant2 from '../../../images/tenant2.jpg';
import tenant3 from '../../../images/tenant3.jpg';
import tenant4 from '../../../images/tenant4.jpg';
import tenant5 from '../../../images/tenant5.jpg';

function DischargedResidentForm() {

	const { sideBarShowing, setSidebarShowing} = useContext(AppContext);
	return (
		<div>
			<Row md="12" className="d-flex justify-content-center">
				<Col md="12">
					<h1>Discharge Resident</h1>
				</Col>
			</Row>
		</div>
	)
}

export default DischargedResidentForm