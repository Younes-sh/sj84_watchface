import { Link , NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import user_icon from '../assets/icons/user-icon.png'


function BasicExample() {
  const iconPage = 'https://d33bq1v1gicys9.cloudfront.net/300x300/e392ce0cd6e8787f235380b188441f61_avatar.jpg';
  return (
    <Navbar navbar-expand-lg   className="w-100   bg-dark position-fixed  NAVBAR">
    
        <Link to="/" style={{textDecoration:'none' }} className='text-light'><img src={iconPage} alt="watch"  style={{width:'30px' , borderRadius:'50%'}} /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-bg-light'/>
        <Navbar.Collapse id="basic-navbar-nav" className='navbar-expand-lg text-light'>
          <Nav className="me-auto  ">
            <NavLink className='text-decoration-none mx-3 text-light' to="/collection">Collection</NavLink>
            <NavLink className='text-decoration-none mx-3 text-light' to="/gallery">Gallery</NavLink>
            <NavLink className='text-decoration-none mx-3 text-light' to="/contact">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
 
        <NavLink className='text-decoration-none mx-2 text-light ' to="/registerlogin">
          <img style={{width:'40px'}} src={user_icon} alt="user" />
        </NavLink>
      
    </Navbar>
  );
}

export default BasicExample;