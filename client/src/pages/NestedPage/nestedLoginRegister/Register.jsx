import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function Register() {
  const [ member , setMember ] = useState({});
  const [showPassword, setShowPassword] = useState(false); // Added state for password visibility
  const navigate = useNavigate()
  const controller = (e) => {
    setMember({...member, [e.target.name] : e.target.value})
  }

// Show password ---------------------------
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

// -------------------------
 

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };


  const createUser = () => {
    if (!isValidEmail(member.email)) {
      // Handle invalid email format
      return;
    }

    if (member.password.length < 8) {
      // Handle short password
      return;
    }

    const user = {
      ...member,
      first_name: member.first_name.toLowerCase(),
      email: member.email.toLowerCase(),
      last_name: member.last_name.toLowerCase(),
      username: member.username.toLowerCase()
    };
  
    axios.post('http://localhost:5000/api/users',member);
    navigate('/registerlogin/login');
  }

  // ----------------------------------
  return (
    <div className='p-5'>
        <h3 className='text-light'>Register</h3>
       
          <div className="container">
          <Form className='text-start text-light'>
            <Form.Group className="mb-3" >
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={(e) => controller(e, 'email')} name='email' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Firstname</Form.Label>
              <Form.Control onChange={(e) => controller(e, 'first_name')} name='first_name' type="text" placeholder="Enter firstname" />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Lastname</Form.Label>
              <Form.Control onChange={(e) => controller(e, 'last_name')} name='last_name' type="text" placeholder="Enter lastname" />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Username</Form.Label>
              <Form.Control onChange={(e) => controller(e, 'username')} name='username' type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={(e) => controller(e, 'password')} name='password'  type={showPassword ? 'text' : 'password'} placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" >
            <Form.Check
              type="checkbox"
              label="Show password" // Change the label accordingly
              onChange={togglePasswordVisibility}
              checked={showPassword}
            />
          </Form.Group>
       
            <Form.Group className="mb-3" >
              <Form.Check  type="checkbox" label="Check me out" />
            </Form.Group>
            <Button onClick={createUser} variant="primary" type="button">
              Register
            </Button>
          </Form>
          </div>
    </div>
  );
}

export default Register;