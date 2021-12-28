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

// global variables
import AppContext from '../AppContext';

function Home() {

  const navigate = useNavigate();

  const { user, setUser} = useContext(AppContext);
  const [email , setEmail] = useState(null)


  const loginUser = () => {
      setUser(email)
      console.log(user)
      localStorage.setItem('user', email)
      Swal.fire({
      title: 'Login successfully',
      icon: 'success',
      text: 'Welcome'
    })

    navigate("/dashboard")
  }

  useEffect(() => {
    Aos.init({});

  }, [])

  return (
  	<div>
  	<AppNavBar/>

      <div id="mainBody">
         

         {user == null ?
          <div md="8" sm="12" className=" mt-5 " id="container">
           <Row >
             <Col lg="6" md="8" className="my-5 mx-auto">
                <CarouselComp/>
             </Col>
            <Col lg="3" md="8" id="LoginForm" className="my-5 mx-auto py-5">
              <Form onSubmit={(e) => loginUser(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="success" type="submit">
                  Login
                </Button>
              </Form>
            </Col>
           </Row>
         </div>
        
         :  null}
          <div id="divider"></div>
        

       
     <div className="mt-5">
      <h1 className="text-center mb-5">MEET FUN PEOPLE. DO FUN THINGS.</h1>
      </div>
     <div md="12" className=" d-flex justify-content-center "id="activityTab">
        <Row>
          <CardGroup className="d-flex justify-content-center">
             <Col lg="3" md="7" className="mx-2 my-5 cardItem">
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
             <Col lg="3" md="7" className="mx-2 my-5 cardItem">
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
             <Col lg="3" md="7" className="mx-2 my-5 cardItem">
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