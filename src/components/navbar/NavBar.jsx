/** @format */

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaLaptopCode } from "react-icons/fa";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>
          <h3>
            NA<span id='te'>TE</span>
            <FaLaptopCode />
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#about'>About Me</Nav.Link>
            <NavDropdown title='Skills' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Services</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Resume</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Portfolio</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>Blog</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href='#deets'>Contact</Nav.Link>
            <Nav.Link eventKey={2} href='#memes'>
              Hire Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
