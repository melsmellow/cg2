import {useEffect, React, useContext, useState} from "react";
import {Row, Col, Form, Button, Card, CardGroup} from 'react-bootstrap'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import bg5 from '../images/bg5.jpg'
import bg6 from '../images/bg6.jpg'
import bg7 from '../images/bg7.jpg'

import AppNavBar from '../components/AppNavBar'
import CarouselComp from '../components/CarouselComp'
import Footer from '../components/Footer'

// Aos 
import Aos from "aos";
import "aos/dist/aos.css";

// axios api
import api from "../api/api";

// global variables
import AppContext from '../AppContext';

function Home() {

  const navigate = useNavigate();

  const { user, setUser} = useContext(AppContext);
  const [email , setEmail] = useState("")
  const [password, setPassword] = useState("")
  let userIdval = localStorage.getItem('userId');

  // function to login user
  const loginUser = async (e) => {

    e.preventDefault()
    const input = {
      email: email, 
      password: password
    }

     await api.post('/users/login', input )
    .then(result => {
      if (typeof result.data.access !== "undefined"){
        localStorage.setItem('token' , result.data.access)
        retrieveUserDetails(result.data.access)
        Swal.fire({
            title: 'Login Successful!',
            icon: 'success',
            text: "Welcome"
        })

        

      }else {
        Swal.fire({
          title: 'Authentication failed',
          icon: 'error',
          text: 'Check login details'
        })
      }
      
    })

    
  }

  // function for retrieving user's details
  const retrieveUserDetails = async (token) => {

    await api.get('/users/details' , {
          headers: {Authorization: `Bearer ${token}`}
    }).then(result => {
        console.log(result.data)
         
         // store user details on localStorage upon log in
         localStorage.setItem('userId' , result.data._id)
         localStorage.setItem('email' , result.data.email)
         localStorage.setItem('name' , result.data.firstName)

        setUser({
          id: result.data._id,
          user_type: result.data.user_type
        })

        navigate("/dashboard")
    })

  }


  useEffect(() => {
    Aos.init({});

  }, [])

  console.log(user)
  return (
  	<div>
  	<AppNavBar/>

      <div id="mainBody">
         

         {userIdval == null ?
          <div md="8" sm="12" className=" mt-5 " id="container">
           <Row >
             <Col lg="6" md="8" className="my-5 mx-auto">
                <CarouselComp/>
             </Col>
            <Col lg="3" md="8" id="LoginForm" className="my-5 mx-auto py-5">
              <Form onSubmit={(e) => loginUser(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                  type="email" 
                  placeholder="Enter email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}type="password" 
                  placeholder="Password" />
                </Form.Group>

                {(password == "" || email == "") ?
                <Button variant="success" type="submit" disabled>
                  Login
                </Button>
                :
                 <Button variant="success" type="submit">
                  Login
                </Button>
                }

              </Form>
            </Col>
           </Row>
         </div>
        
         :  null}
          <div id="divider"></div>
        

       
     <div className="mt-5">
      <h1 className="text-center mb-5">MEET FUN PEOPLE. DO FUN THINGS.</h1>
      </div>
     <div md="12" sm="12" id="activityTab">
        <Row>
          <CardGroup>
             <Col lg="3" md="8" className="mx-auto my-5 cardItem">
            <Card data-aos="fade-up" data-aos-anchor-placement="top-bottom"  data-aos-duration="1500">
              <Card.Img variant="top" src={bg5} />
              <Card.Body>
                <Card.Title>Activity one</Card.Title>
                <Card.Text>
                   Lorem ipsum dolor sit amet consectetur adipisicing, elit. Placeat amet eaque quisquam quas, quos, iusto ex error et necessitatibus distinctio qui. Quidem reprehenderit aperiam possimus suscipit corporis nesciunt. Facilis, repellat?
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
             <Col lg="3" md="8" className="mx-auto my-5 cardItem">
            <Card data-aos="fade-up" data-aos-anchor-placement="top-bottom"  data-aos-duration="1500">
              <Card.Img variant="top" src={bg6} />
              <Card.Body>
                <Card.Title>Activity two</Card.Title>
                <Card.Text>
                   Lorem ipsum dolor sit amet consectetur adipisicing, elit. Placeat amet eaque quisquam quas, quos, iusto ex error et necessitatibus distinctio qui. Quidem reprehenderit aperiam possimus suscipit corporis nesciunt. Facilis, repellat?
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
             <Col lg="3" md="8" className="mx-auto my-5 cardItem">
            <Card  data-aos="fade-up" data-aos-anchor-placement="top-bottom"  data-aos-duration="1500">
              <Card.Img variant="top" src={bg7} />
              <Card.Body>
                <Card.Title>Activity three</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing, elit. Placeat amet eaque quisquam quas, quos, iusto ex error et necessitatibus distinctio qui. Quidem reprehenderit aperiam possimus suscipit corporis nesciunt. Facilis, repellat?
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
          </CardGroup>
        </Row>
      </div>
   </div>
    <Footer/>
   </div>

  )
}

export default Home;