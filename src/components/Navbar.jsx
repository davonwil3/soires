import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import {  NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';


function Navbars(props){


return(

    <Navbar  expand="lg" variant='light' className="nav justify-content-between">
  
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" >
      <Nav >
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#About-us">AboutUs</Nav.Link>
        <Nav.Link href="#Services">Services</Nav.Link>
        <Nav.Link href="#Contact">Contact</Nav.Link>
        
      </Nav>
    
    </Navbar.Collapse>
    
    <Navbar.Brand href="#home"><img src='../assets/sierralogo.png' class="logo-pic" /></Navbar.Brand>
  </Navbar>




)





}


export default Navbars;