import React ,{useEffect, useState, useContext} from 'react';
import {Row, Col, Form, Button, Container} from 'react-bootstrap';
import '../../../App.css'
import AddIcon from '@mui/icons-material/Add';

// global variable
import AppContext from '../../../AppContext';

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function FileIncidentReportForm() {

	const { content, setContent, dialogClose, setDialogClose} = useContext(AppContext);

	console.log(dialogClose);

	const [buttonIsEnable, setButtonIsEnable] = useState(true);

	// useState for all the input fields
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [classification, setClassification] = useState("");
	const [location, setLocation] = useState("");
	const [incidentDesc, setIncidentDesc] = useState("");
	const [residentStatement, setResidentStatement] = useState("");
	const [witnesses, setWitnesses] = useState("");
	const [firstAid, setFirstAid] = useState("");
	const [firstAidNote, setFirstAidNote] = useState("");
	const [vitalsTaken, setVitalsTaken] = useState("");
	const [inPain, setInPain] = useState("");
	const [reqPhysician, setReqPhysician] = useState("");
	const [vitalsNote, setVitalsNote] = useState("");


	useEffect(()=>{

		if(date !== "" && time !== "" && classification !== "" && location !== "" && incidentDesc !== "" && residentStatement !== "" && witnesses !== "" && firstAid !== "" && firstAidNote !== "" && vitalsTaken !== "" && inPain !== "" && reqPhysician !== "" && vitalsNote){

			const timeoutId = setTimeout(() => addNewResident(), 1000);
			return () => clearTimeout(timeoutId);  	   

		}

	},[date, time, classification, location, incidentDesc, residentStatement, witnesses , firstAid , firstAidNote , vitalsTaken, inPain , reqPhysician , vitalsNote])




	const addNewResident = (e) =>{
		// e.preventDefault()

		setButtonIsEnable(false);

		toast.success('File Successfully', {
		position: "top-right",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
		})

		// delay function

		setTimeout(function(){

			setDialogClose(false);

		}, 2000); 
		

	}

	return (
		<div>
	 		<Form id="form" onSubmit={(e)=>addNewResident(e)}>
			 	<Row>
			 		 <Col md="12" id="subTitle">
			 		 <h3 className="pt-2">General Information</h3>
			 		 </Col>
			 		 <Col md="6" sm="8" className="mx-auto mb-3 colItem mt-3" >
					    <Form.Control
					      type="date"
					      name="date"
					      required
					      value={date}
					      onChange={(e)=>setDate(e.target.value)}
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label >Date</label>

			 		</Col>
			 		 <Col md="6" sm="8" className="mx-auto mb-3 colItem mt-3">
					    <Form.Control
					      type="time"
					      name="time"
					      value={time}
					      onChange={(e)=>setTime(e.target.value)}
					      placeholder=" "
					      required
					      className="formItem mt-3 form__input"
					    />
					    <label >Time</label>
			 		</Col>
			 		 <Col md="6" sm="8"  className="mx-auto mb-3 colItem mt-3">
					    <select id="selectForm" required className="formItem " value={classification}
					      onChange={(e)=>setClassification(e.target.value)}>
					   	 <option value="" disabled hidden selected>Select one</option>
						  <option value="incident one">Incident one</option>
						  <option value="incident two">Incident two</option>
						  <option value="incident three">Incident three</option>
						  <option value="incident four">Incident four</option>
						  <option value="incident five">Incident five</option>
						</select>
						 <label>Incident Classification</label>
			 		</Col>
			 		 <Col md="6" sm="8"  className="mx-auto mb-3 colItem mt-3">
					    <select id="selectForm" required className="formItem "  value={location}
					      onChange={(e)=>setLocation(e.target.value)}>
					   	 <option value="" disabled hidden selected>Select one</option>
						  <option value="Location one">Location one</option>
						  <option value="Location two">Location two</option>
						  <option value="Location three">Location three</option>
						  <option value="Location four">Location four</option>
						  <option value="Location five">Location five</option>
						</select>
						 <label>Location Where the Incident Occured</label>
			 		</Col>

			 		<Col md="10" sm="10"  className="mx-auto mb-3 colItem">
			 		  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					    <Form.Label>Briefly Decribed What Occured</Form.Label>
					    <Form.Control placeholder="ENTER INCIDENT DESCRIPTION HERE" required as="textarea" rows={3}  value={incidentDesc}
					      onChange={(e)=>setIncidentDesc(e.target.value)}/>
					  </Form.Group>
				    </Col>
				    <Col md="10" sm="10"  className="mx-auto mb-3 colItem">
			 		  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					    <Form.Label>Resident Statement</Form.Label>
					    <Form.Control placeholder="ENTER RESIDENT STATEMENT HERE" required as="textarea" rows={3} value={residentStatement}
					      onChange={(e)=>setResidentStatement(e.target.value)}/>
					  </Form.Group>
				    </Col>

				     <Col md="12" id="subTitle">
			 		 <h3 className="pt-2">Witnesses</h3>
			 		 </Col>
			 		  <Col md="6" sm="8"  className="mx-auto mb-3 colItem mt-3">
					    <select id="selectForm" required className="formItem " value={witnesses}
					      onChange={(e)=>setWitnesses(e.target.value)}>
						  <option value="No">No</option>
						  <option value="Yes">Yes</option>
						</select>
						 <label>Were there Witnesses?</label>
			 		</Col>
			 		
			 		 <Col md="12" id="subTitle">
			 		 <h3 className="pt-2">Response to Incident</h3>
			 		 </Col>

			 		  <Col md="6" sm="8"  className="mx-auto mb-3 colItem mt-3">
					    <select id="selectForm" required className="formItem "  value={firstAid}
					      onChange={(e)=>setFirstAid(e.target.value)}>
						  <option value="No">No</option>
						  <option value="Yes">Yes</option>
						</select>
						 <label>First Aid Given?</label>


			 		</Col>
			 		<Col md="10" sm="10"  className="mx-auto mb-3 colItem">
			 		  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					    <Form.Control placeholder="NOTES" required as="textarea" rows={3} value={firstAidNote}
					      onChange={(e)=>setFirstAidNote(e.target.value)}/>
					  </Form.Group>
				    </Col>
			 		
			 		<Col md="6" sm="8"  className="mx-auto mb-3 colItem mt-3">
					    <select id="selectForm" required className="formItem " value={vitalsTaken}
					      onChange={(e)=>setVitalsTaken(e.target.value)}>
						  <option value="No">No</option>
						  <option value="Yes">Yes</option>
						</select>
						 <label>Vitals Taken?</label>
			 		</Col>
			 		<Col md="6" sm="8"  className="mx-auto mb-3 colItem mt-3">
					    <select id="selectForm" required className="formItem " value={inPain}
					      onChange={(e)=>setInPain(e.target.value)}>
						  <option value="No">No</option>
						  <option value="Yes">Yes</option>
						</select>
						 <label>Question About Pain Level?</label>
			 		</Col>
			 		<Col md="6" sm="8"  className="mx-auto mb-3 colItem mt-3">
					    <select id="selectForm" required className="formItem " value={reqPhysician}
					      onChange={(e)=>setReqPhysician(e.target.value)}>
						  <option value="No">No</option>
						  <option value="Yes">Yes</option>
						</select>
						 <label>Request to see Physician?</label>
			 		</Col>
			 		<Col md="10" sm="10"  className="mx-auto mb-3 colItem">
			 		  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					    <Form.Control placeholder="NOTES" required as="textarea" rows={3} value={vitalsNote}
					      onChange={(e)=>setVitalsNote(e.target.value)}/>
					  </Form.Group>
				    </Col>
			 		<Col md="12" className="d-flex justify-content-center">
			 			{/*{buttonIsEnable == true ?
			 			 <button id="actionBtn" type="submit">
				 			 <AddIcon />
			                  <div className="d-inline px-2"> FILE REPORT</div>
			 			
		                </button>
		                : <button disabled id="actionBtn" type="submit">
				 			 <AddIcon />
			                  <div className="d-inline px-2">FILE REPORT</div>
			 			
		                </button>

		                }*/}
		                 <ToastContainer
						position="top-right"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						/>
			 		</Col> 		
			 	</Row>
		 	</Form>
		</div>
	)
}

export default FileIncidentReportForm
		

			
			