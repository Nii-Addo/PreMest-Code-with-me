import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom";


const Navigation = () => {
    return(
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand >React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link>
          <Link to="/"> Home</Link> 
      </Nav.Link>

      <Nav.Link>
      <Link to="/newpost"> New Post</Link> 
      </Nav.Link>

      <Nav.Link>
      <Link to="/login"> Login</Link> 
      </Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
} 
export default Navigation;