import React from 'react';
import '../App.css'
import {Row, Col } from 'react-bootstrap'
import SideBar from '../components/SideBar'


function Dashboard(){
	return(
		<div md="12" className="Dashboard">
		<SideBar />
			<Row className="d-flex justify-content-center">
				<Col lg="2">
					
				</Col>
				<Col lg="9">
					<div md="8" className=" mt-5 mx-auto" id="dashContainer">
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Necessitatibus iure natus, eligendi laborum voluptates eius! Dolore, consequuntur, deserunt! Fugit mollitia distinctio dolor, vitae id tempore itaque ipsam reiciendis deserunt cumque!</p>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Necessitatibus iure natus, eligendi laborum voluptates eius! Dolore, consequuntur, deserunt! Fugit mollitia distinctio dolor, vitae id tempore itaque ipsam reiciendis deserunt cumque!</p>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Necessitatibus iure natus, eligendi laborum voluptates eius! Dolore, consequuntur, deserunt! Fugit mollitia distinctio dolor, vitae id tempore itaque ipsam reiciendis deserunt cumque!</p>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Necessitatibus iure natus, eligendi laborum voluptates eius! Dolore, consequuntur, deserunt! Fugit mollitia distinctio dolor, vitae id tempore itaque ipsam reiciendis deserunt cumque!</p>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Necessitatibus iure natus, eligendi laborum voluptates eius! Dolore, consequuntur, deserunt! Fugit mollitia distinctio dolor, vitae id tempore itaque ipsam reiciendis deserunt cumque!</p>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Necessitatibus iure natus, eligendi laborum voluptates eius! Dolore, consequuntur, deserunt! Fugit mollitia distinctio dolor, vitae id tempore itaque ipsam reiciendis deserunt cumque!</p>	

					</div>
				</Col>
			</Row>
			

			
		</div>


	)

}

export default Dashboard;