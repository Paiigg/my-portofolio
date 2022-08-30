import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import LogoImage from '../assets/Logo.svg';

function NavigationBar() {
  return (
    <Navbar  expand="lg" sticky='top' bg='white' className='shadow-sm' variant='light'>
      <Container>
        <Navbar.Brand href="#home"><img src={LogoImage}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center custom-hover">
            <Nav.Link href="#home" className='text-custom'>Home</Nav.Link>
            <Nav.Link href="#skills" className='text-custom'>Skills</Nav.Link>
            <Nav.Link href="#about" className='text-custom'>About</Nav.Link>
            <Nav.Link href="#project" className='text-custom'>Project</Nav.Link>
            <Nav.Link href="#contact" className='text-custom'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;