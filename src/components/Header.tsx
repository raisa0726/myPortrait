import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { VFC } from 'react'
import styled from 'styled-components';

const Header: VFC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <i className="bi me-2 bi-house-door-fill"></i>
          Raisa's site
        </Navbar.Brand>
        <Nav variant="pills">
          <Nav.Item>
            <Nav.Link className='nav-link' href='/blog'>blog</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='nav-link' href='/about'>about</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='nav-link' href='/helpme'>Help me</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
