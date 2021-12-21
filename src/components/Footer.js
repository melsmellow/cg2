import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../App.css'

const FooterPage = () => {
  return (
    <MDBFooter id="footer"  className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol id="footer-title" md="5" className="text-center">
            <h1 className="title">Company name</h1>
            <p id="">
              Sample company tag line
            </p>
          </MDBCol>
          <MDBCol md="2" className="text-center">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
           <MDBCol md="2" className="text-center">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="2" className="text-center">
            <h5 className="title">Social Media</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Logo one</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Logo two</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Logo 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href=""> Company name here </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;