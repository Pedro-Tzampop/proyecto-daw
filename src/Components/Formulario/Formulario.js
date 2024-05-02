import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formulario() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="Text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDueDate">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="Date"/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Goal
      </Button>
    </Form>
  );
}

export default Formulario;