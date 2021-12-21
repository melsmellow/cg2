import React from "react";
import {Row, Col} from 'react-bootstrap'
import '../App.css'


import AppNavBar from '../components/AppNavBar'
import CarouselComp from '../components/CarouselComp'
import Footer from '../components/Footer'


function Home() {
  return (
  	<div>
  	<AppNavBar/>
  	<div id="mainBody">
   <CarouselComp/>
     <div md="6"className="text-center mt-5">
     	<Row className="justify-content-center">
     		<Col md="6" sm="12">
     		<h2>Title Here</h2>
     		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vitae consequuntur quam explicabo quis, sit eum molestiae, iusto porro. Facilis, explicabo eos deserunt labore totam nam necessitatibus, dolores adipisci eveniet.</p>
     		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vitae consequuntur quam explicabo quis, sit eum molestiae, iusto porro. Facilis, explicabo eos deserunt labore totam nam necessitatibus, dolores adipisci eveniet.</p>
     		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vitae consequuntur quam explicabo quis, sit eum molestiae, iusto porro. Facilis, explicabo eos deserunt labore totam nam necessitatibus, dolores adipisci eveniet.</p>
     		</Col>
     		<Col md="6" sm="12">
     		<h2>Title Here</h2>
     		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vitae consequuntur quam explicabo quis, sit eum molestiae, iusto porro. Facilis, explicabo eos deserunt labore totam nam necessitatibus, dolores adipisci eveniet.</p>
     		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vitae consequuntur quam explicabo quis, sit eum molestiae, iusto porro. Facilis, explicabo eos deserunt labore totam nam necessitatibus, dolores adipisci eveniet.</p>
     		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vitae consequuntur quam explicabo quis, sit eum molestiae, iusto porro. Facilis, explicabo eos deserunt labore totam nam necessitatibus, dolores adipisci eveniet.</p>
     		</Col>
     		<Col md="8" sm="12" >
     		<h2>Title Here</h2>
     		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vitae consequuntur quam explicabo quis, sit eum molestiae, iusto porro. Facilis, explicabo eos deserunt labore totam nam necessitatibus, dolores adipisci eveniet.</p>
     		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vitae consequuntur quam explicabo quis, sit eum molestiae, iusto porro. Facilis, explicabo eos deserunt labore totam nam necessitatibus, dolores adipisci eveniet.</p>
     		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vitae consequuntur quam explicabo quis, sit eum molestiae, iusto porro. Facilis, explicabo eos deserunt labore totam nam necessitatibus, dolores adipisci eveniet.</p>
     		</Col>
     	</Row>
     	
     </div>
   </div>
    <Footer/>
   </div>

  )
}

export default Home;