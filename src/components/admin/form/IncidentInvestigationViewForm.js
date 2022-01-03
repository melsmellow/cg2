import React ,{useEffect, useState, useContext} from 'react';
import {Row, Col, Form, Button, Container} from 'react-bootstrap';
import '../../../App.css'
import AddIcon from '@mui/icons-material/Add';

// global variable
import AppContext from '../../../AppContext';

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function IncidentInvestigationViewForm(data) {

	console.log(data)
	const { content, setContent, dialogClose, setDialogClose} = useContext(AppContext);


	return (
		<div>
	 		<Form id="form">
			 	<Row>
			 		 <Col md="12" id="subTitle">
			 		 <h3 className="pt-2">General Information</h3>
			 		 </Col>
			 		 <Col md="6" sm="8" className="mx-auto mb-3 colItem mt-3" >
					    <Form.Control
					      type="text"
					      name="date"
					      value={data.date}
					      required
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label >Date</label>

			 		</Col>
			 		 <Col md="6" sm="8" className="mx-auto mb-3 colItem mt-3">
					    <Form.Control
					      type="text"
					      name="time"
					      value={data.time}
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label >Time</label>
			 		</Col>
			 		 <Col md="6" sm="8" className="mx-auto mb-3 colItem mt-3">
					    <Form.Control
					      type="text"
					      name="class"
					      value={data.class}
					      placeholder=" "
					      className="formItem form__input"
					    />
					  <label>Incident Classification</label>
			 		</Col>
			 		 <Col md="6" sm="8" className="mx-auto mb-3 colItem mt-3">
					    <Form.Control
					      type="text"
					      name="loc"
					       value={data.loc}
					      placeholder=" "
					      className="formItem form__input"
					    />
					 <label>Location Where the Incident Occured</label>
			 		</Col>
			 			 

			 		<Col md="10" sm="10"  className="mx-auto mb-3 colItem">
			 		  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					    <Form.Label>Briefly Decribed What Occured</Form.Label>
					    <Form.Control value="assumenda maxime rerum laudantium saepe commodi accusantium, necessitatibus! Excepturi, est, quae. Ut, repudiandae."required as="textarea" rows={3} />

					{/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore corporis mollitia nam rem voluptatem dignissimos unde, consequuntur quam sint, at ullam voluptates nesciunt harum, exercitationem asperiores sit, quod illo ducimus!*/}
					  </Form.Group>
				    </Col>
				    <Col md="10" sm="10"  className="mx-auto mb-3 colItem">
			 		  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					    <Form.Label>Resident Statement</Form.Label>
					    <Form.Control value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore corporis mollitia nam rem voluptatem dignissimos unde," required as="textarea" rows={3} />
					  </Form.Group>
				    </Col>

				     <Col md="12" id="subTitle">
			 		 <h3 className="pt-2">Witnesses</h3>
			 		 </Col>
			 		  <Col md="6" sm="8"  className="mx-auto mb-3 colItem mt-3">
					     <Form.Control
					      type="text"
					      name="time"
					      value="Yes"
					      placeholder=" "
					      className="formItem form__input"
					    />
							 <label>Were there Witnesses?</label>
			 		</Col>
			 		
			 		 <Col md="12" id="subTitle">
			 		 <h3 className="pt-2">Response to Incident</h3>
			 		 </Col>

			 		  <Col md="6" sm="8"  className="mx-auto mb-3 colItem mt-3">
					    <Form.Control
					      type="text"
					      name="time"
					      value="Yes"
					      placeholder=" "
					      className="formItem form__input"
					    />
						 <label>First Aid Given?</label>


			 		</Col>
			 		<Col md="10" sm="10"  className="mx-auto mb-3 colItem">
			 		  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					    <Form.Control value=" ipsum dolor sit amet consectetur adipisicing elit. Dolore corporis mollitia nam rem voluptatem dignissimos unde," placeholder="NOTES" required as="textarea" rows={3} />
					  </Form.Group>
				    </Col>
			 		
			 		<Col md="6" sm="8"  className="mx-auto mb-3 colItem mt-3">
					    <Form.Control
					      type="text"
					      name="vitals"
					      value="Yes"
					      placeholder=" "
					      className="formItem form__input"
					    />
						 <label>Vitals Taken?</label>
			 		</Col>
			 		<Col md="6" sm="8"  className="mx-auto mb-3 colItem mt-3">
					    <Form.Control
					      type="text"
					      value=" ipsum dolor sit amet consectetur adipisicing elit. Dolore corporis mollitia nam rem voluptatem dignissimos unde,"
					      name="pain"
					      placeholder=" "
					      className="formItem form__input"
					    />
						 <label>Question About Pain Level?</label>
			 		</Col>
			 		<Col md="6" sm="8"  className="mx-auto mb-3 colItem mt-3">
					     <Form.Control
					      type="text"
					      value="No"
					      name="req"
					      placeholder=" "
					      className="formItem form__input"
					    />
						 <label>Request to see Physician?</label>
			 		</Col>
			 		<Col md="10" sm="10"  className="mx-auto mb-3 colItem">
			 		  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					    <Form.Control value=" ipsum dolor sit amet consectetur adipisicing elit. Dolore corporis mollitia nam rem voluptatem dignissimos unde," placeholder="NOTES" required as="textarea" rows={3} />
					  </Form.Group>
				    </Col>
			 			
			 	</Row>
		 	</Form>
		</div>
	)
}
			
export default IncidentInvestigationViewForm