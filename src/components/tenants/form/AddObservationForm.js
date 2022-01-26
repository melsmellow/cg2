import React, {useContext, useState, useEffect} from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import '../../../App.css'
import AddIcon from '@mui/icons-material/Add';
import Swal from 'sweetalert2'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

// global variable
import AppContext from '../../../AppContext';

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
// pop up
import Popup from '../../Popup';

// speech recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const mic = new SpeechRecognition()

mic.continous = true
mic.interimResults = true
mic.lang = 'en-US'

function AddObservationForm() {

	const { content, setContent, dialogClose, setDialogClose} = useContext(AppContext);

	// useState for all the input fields
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [displayTo, setDisplayTo] = useState("");
	const [note, setNote] = useState("");


	const [isListening , setIsListening] = useState(false);
	const [speechToText , setSpeechToText] = useState(false);

	console.log(isListening)

	useEffect(()=>{



	}, [speechToText])

	useEffect(()=>{
		handleListen();
	},[isListening])
	// function for speech recognition
	const handleListen = () => {

		if(isListening){
			mic.start()
			mic.onend = () => {
				console.log('continue. . .')
				mic.start()
			}
		}else if(isListening){
			mic.stop()
			mic.onend = () => {
				console.log('Stopped mic on click')

			}
		}

		mic.onstart = () =>{
			console.log('Mic is on')
		}

		mic.onresult = event => {
			const transcript = Array.from(event.results)
			.map(result => result[0])
			.map(result => result.transcript)
			.join('')

			console.log(transcript)
			setNote([...note, transcript])
			mic.onerror = event =>{
				console.log(event.error)
			}
		}

	}




	useEffect(()=>{

		if(date !== "" && time !== "" && displayTo !== "" && note !== ""){

			const timeoutId = setTimeout(() => AddObservation(), 1000);
			return () => clearTimeout(timeoutId);  	   

		}

	},[date, time, displayTo, note])



	const [buttonIsEnable, setButtonIsEnable] = useState(true);



	const AddObservation = (e) =>{
		console.log("saving...")

		setButtonIsEnable(false);

		toast.success('Added Successfully', {
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
	 		<Form id="form" onSubmit={(e) => AddObservation(e)}>
			 	<Row>
			 		 <Col md="6" sm="8" className="mx-auto colItem" >
					    <Form.Control
					      type="date"
					      name="date"
					      required
					      value={date}
					      onChange={(e)=>setDate(e.target.value)}
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label htmlFor="date">Date</label>

			 		</Col>
			 		<Col md="6" sm="8" className="mx-auto  colItem" >
					    <Form.Control
					      type="time"
					      name="time"
					      required
					      value={time}
					      onChange={(e)=>setTime(e.target.value)}
					      placeholder=" "
					      className="formItem mt-3 form__input"
					    />
					    <label htmlFor="time">Time</label>

			 		</Col>
			 		 <Col md="6" sm="8"  className="mx-auto mb-3 colItem">
					    <select id="selectForm" required className="formItem " value={displayTo}
					      onChange={(e)=>setDisplayTo(e.target.value)}>
					   	 <option value="" disabled hidden selected>Display to</option>
						  <option value="normaluser">normal user</option>
						  <option value="staff">staff</option>
						  <option value="admin">admin</option>
						  <option value="medical staff">medical staff</option>
						  <option value="everybody">everybody</option>
						</select>
						 <label htmlFor="">Display to</label>
			 		</Col>
			 		<Col md="10" sm="10"  className="mx-auto mb-3 colItem">
			 		  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					    <Form.Label>Note</Form.Label>
					    <Form.Control required as="textarea" rows={3} value={note}
					      onChange={(e)=>setNote(e.target.value)}/>
					  </Form.Group>
				    </Col>
			 		<Col md="12" className="d-flex justify-content-center">
			 		
			 			{/*{buttonIsEnable == true ?
			 			 <button id="actionBtn" type="submit">
				 			 <AddIcon />
			                  <div className="d-inline px-2">ADD DATA</div>
			 			
		                </button>
		                : <button disabled id="actionBtn" type="submit">
				 			 <AddIcon />
			                  <div className="d-inline px-2">ADD DATA</div>
			 			
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
		 		<button id="actionBtn" onClick={()=>setIsListening(!isListening)}>
		 			 <KeyboardVoiceIcon />
		 			 {isListening ? 
		 			 <div className="d-inline px-2">Off Mic</div>
		 			 : <div className="d-inline px-2">On Mic</div>}
	                  
			 			
		        </button>
		</div>
	)
}

export default AddObservationForm
			
			