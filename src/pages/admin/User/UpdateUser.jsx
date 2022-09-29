import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function UpdateUser() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name </Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
        <Form.Text className="text-muted">
          We'll never share your Name with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" />
        <Form.Text className="text-muted">
          We'll never share your Username with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="Text" placeholder="Enter Address" />
        <Form.Text className="text-muted">
          We'll never share your Address with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicActive">
        <Form.Label>Active</Form.Label>
        <Form.Control type="Text" placeholder="Enter Active" />
        <Form.Text className="text-muted">
          We'll never share your Active with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="Text" placeholder="Enter Phone" />
        <Form.Text className="text-muted">
          We'll never share your Phone with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAvata">
        <Form.Label>Avata</Form.Label>
        <Form.Control type="file" placeholder="Enter Avata" />
        <Form.Text className="text-muted">
          We'll never share your Avata with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default UpdateUser;