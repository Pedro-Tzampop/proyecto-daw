import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { changeOption } from '../../Reducers/optionSlice';
import React from 'react';
import { useDispatch } from 'react-redux';

function Menu() {
  const dispatch = useDispatch();

  const changeOptionFunc = (option) => {
    dispatch(changeOption(option));
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={() => changeOptionFunc('tasks')}>Tasks</Nav.Link>
            <Nav.Link href="#link" onClick={() => changeOptionFunc('goals')}>Goals</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;