import React from 'react'
import { Navbar, Nav, Container , Form , FormControl , Button } from 'react-bootstrap';

function Header() {
  return (
    <Container 
        fluid  
        className="px-0 py-1 bg-dark"
        style={{
          borderBottom : "1px solid #d5d2d29e"
        }}
    >
       <Navbar expand="lg">
       <Container>
            <Navbar.Brand 
              href="#"
              className="text-white"  
            >EnsetGeeksTodoList</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
        </Container>
        </Navbar>
    </Container>
  )
}


export default Header