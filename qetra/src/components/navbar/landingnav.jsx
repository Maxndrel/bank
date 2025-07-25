import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './landingnav.css'

const Landingnav = () => {
  return (
    <div>
      <Navbar expand="lg"  fixed="top" className="bg-body-tertiary">
      <Container>
          <Navbar.Brand href="#home">
            <img
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home" className='fw-bold'>QETRA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="mx-auto">
              <Nav.Link className="ms-3 fw-medium" href="#home">Home</Nav.Link>
              <Nav.Link className="ms-3 fw-medium" href="#about">About Us</Nav.Link>
              <Nav.Link className="ms-3 fw-medium" href="#Investment">Investment</Nav.Link>
              <Nav.Link  className="ms-3 fw-medium" href="#Contact">Contact US</Nav.Link>
            </Nav>
            
            <Nav className="">
              <button class="btn btn-success fw-bold">Get Started</button>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Landingnav
