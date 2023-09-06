import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {



  // const user = {
  //   ...member,
  //   email: member.email.toLowerCase(),
  //   first_name: member.first_name.toLowerCase(),
  //   last_name: member.last_name.toLowerCase(),
  //   username: member.username.toLowerCase()
  // };
  return (
    <div className='p-5 container'>
        <h3 className='text-light'>Login</h3>

        <div className="">
          <Form className='text-start text-light'>
            <Form.Group className="mb-3" >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-light">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="button">
              Login
            </Button>
          </Form>
        </div>
    </div>
  );
}

export default Login;