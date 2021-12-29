import React from 'react';
import {Col, Table} from 'react-bootstrap';
import TenantPopup from '../TenantPopup';
import EditDailyTaskForm from './EditDailyTaskForm'

function DailyTaskForm() {

   const current = new Date();
   const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
	
	return (
		<div>
			<Col md="12" className="mx-auto">
					 	<Table  hover className="table">
						  <thead>
						    <tr>
						     
						      <th>Title</th>
						      <th>Description</th>
						      <th>Date</th>
						      <th>Action</th>
						    </tr>
						  </thead>
						  <tbody>
						   	  <tr>
						   	  	<td>2nd Dose Vaccine</td>
						   	  	<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, architecto illo, unde </td>
						   	  	<td>{date}</td>
						   	  	<td>
							   	  	<TenantPopup>
								   	  	<EditDailyTaskForm 
								   	  	title="2nd Dose Vaccine"
								   	  	description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, architecto illo, unde "
								   	  	date={date}/>
							   	  	</TenantPopup>
						   	  	</td>
						   	  </tr>
						   	   <tr>
						   	  	<td>Birthday Celebration</td>
						   	  	<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, architecto illo, unde </td>
						   	  	<td>{date}</td>
					   	  	 	<td>
							   	  	<TenantPopup>
								   	  	<EditDailyTaskForm 
								   	  	title="Birthday Celebration"
								   	  	description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, architecto illo, unde"
								   	  	date={date}/>
							   	  	</TenantPopup>
						   	  	</td>
						   	  </tr>
						   	  <tr>
						   	  	<td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga natus</td>
						   	  	<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, architecto illo, unde </td>
						   	  	<td>{date}</td>
					   	  	 	<td>
							   	  	<TenantPopup>
								   	  	<EditDailyTaskForm 
								   	  	title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga natus"
								   	  	description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, architecto illo, unde "
								   	  	date={date}/>
							   	  	</TenantPopup>
						   	  	</td>
						   	  </tr>
						  </tbody>
						</Table>
						</Col>
		</div>
	)
}

export default DailyTaskForm