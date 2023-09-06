import { Link , NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import user_icon from '../assets/icons/user-icon.png'


function BasicExample() {
  const iconPage = 'https://d33bq1v1gicys9.cloudfront.net/300x300/e392ce0cd6e8787f235380b188441f61_avatar.jpg';
  return (
    <Navbar expand="lg"  className= "bg-dark position-fixed w-100 NAVBAR">
      <Container>
        <Link to="/" style={{textDecoration:'none' }} className='text-light'><img src={iconPage} alt="SJ"  style={{width:'50px' , borderRadius:'50%'}} /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-bg-light'/>
        <Navbar.Collapse id="basic-navbar-nav" className=''>
          <Nav className="me-auto NAVBAR">
            <NavLink className='text-decoration-none mx-3 text-light' to="/collection">Collection</NavLink>
            <NavLink className='text-decoration-none mx-3 text-light' to="/gallery">Gallery</NavLink>
            <NavLink className='text-decoration-none mx-3 text-light' to="/contact">Contact</NavLink>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item to="/action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item to="/action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item to="/action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="/action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
 
        <NavLink className='text-decoration-none mx-3 text-light ' to="/registerlogin">
          <img style={{width:'50px'}} src={user_icon} alt="user" />
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default BasicExample;