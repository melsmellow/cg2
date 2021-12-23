import '../App.css'
import React ,{useEffect,useContext}from 'react';
import {Row, Col ,Card,Button , CardGroup, Table} from 'react-bootstrap'
// Global variables
import AppContext from '../AppContext';
// Local Image
import salesImg from '../images/sales.png'
// Mock Data
import {historyData} from '../historyData'

// icons
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import BadgeIcon from '@mui/icons-material/Badge';


function DashboardComp() {

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
									<h1>Dashboard</h1>
								</Col>
								<CardGroup className="d-flex justify-content-space-between">
			             <Col lg="3" md="7" className="mx-auto my-5 ">
			            <Card className="parentCard">
			              <Card.Img variant="top"  />
			              <Card.Body className="dashCards">
			              	<div className="d-flex">
				              	<MonetizationOnIcon/>
				                <Card.Title className="ml-3">Sales</Card.Title>
			                </div>
			                <img className="cardImg" src={salesImg} alt="sales"/>
			                <Card.Title>$4150</Card.Title>

			              </Card.Body>
			            </Card>
			            </Col>
			             <Col lg="3" md="7" className="mx-auto my-5 ">
			            <Card >
			              <Card.Img variant="top"  />
			              <Card.Body className="dashCards">
			                <div className="d-flex">
				              	<RoomServiceIcon/>
				                <Card.Title className="ml-3">Rooms</Card.Title>
			                </div>
			                <Card.Text>
			                   Lorem ipsum dolor sit amet consectetur adipisicing, elit. Placeat amet eaque quisquam quas, quos, iusto ex error et necessitatibus distinctio qui
			                </Card.Text>
			                <Card.Title>Vacant Room : 26</Card.Title>
			              </Card.Body>
			            </Card>
			            </Col>
			             <Col lg="3" md="7" className="mx-auto my-5 ">
			            <Card >
			              <Card.Img variant="top"  />
			              <Card.Body className="dashCards">
			                <div className="d-flex">
				              	<MonetizationOnIcon/>
				                <Card.Title className="ml-3">Tenants</Card.Title>
			                </div>
			               	<Card.Title>Number of Tenants : 168</Card.Title>
			              </Card.Body>
			            </Card>
			            </Col>
			          </CardGroup>
				 		<Col md="12" className="mx-auto">
				 		<h2>Recent History</h2>
					 	<Table  hover className="table">
						  <thead>
						    <tr>
						     
						      <th>Tenants Name</th>
						      <th>Activity</th>
						      <th>Date</th>
						    </tr>
						  </thead>
						  <tbody>
						    {historyData.map((val, key)=> {
						    	return(
						    		<tr key={key}>
						    			<td>{val.name}</td>
						    			<td>{val.activity}</td>
						    			<td>{val.date}</td>
						    			
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

export default DashboardComp