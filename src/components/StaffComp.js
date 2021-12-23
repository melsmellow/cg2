import React,{useContext} from 'react';
import {Row , Col} from 'react-bootstrap';
import AppContext from '../AppContext';


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
						</div>
					</Row>
				</Col>
			</Row>
		</div>
	)
}

export default StaffComp