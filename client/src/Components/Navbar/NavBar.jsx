import {Link , NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import user_icon from '../../assets/icons/user-icon.png'

function NavScrollExample() {
    const iconPage = 'https://d33bq1v1gicys9.cloudfront.net/300x300/e392ce0cd6e8787f235380b188441f61_avatar.jpg';
  return (
   <div className='w-100 bg-dark NAVBAR'>
         <div className='container '>
            <Navbar expand="lg" className="bg-dark NAVBAR">
  
  <Container fluid className='text-light'>
  <Link to="/" style={{textDecoration:'none' }} className='text-light'><img src={iconPage} alt="watch"  style={{width:'50px' , borderRadius:'50%'}} /></Link>
      <Navbar.Toggle aria-controls="navbarScroll" className='text-light'/>
      <Navbar.Collapse id="navbarScroll" className=''>
      <Nav
      className="me-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
      >
          <NavLink className='text-decoration-none mx-3 text-light' to="/collection">Collection</NavLink>
          <NavLink className='text-decoration-none mx-3 text-light' to="/gallery">Gallery</NavLink>
          <NavLink className='text-decoration-none mx-3 text-light' to="/contact">Contact</NavLink>
          {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown> */}
      
      </Nav>
      <Form className="d-flex">
          <NavLink className='text-decoration-none mx-2 text-light ' to="/registerlogin">
              <img style={{width:'40px'}} src={user_icon} alt="user" />
          </NavLink>
      </Form>
      </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
   </div>
  );
}

export default NavScrollExample;