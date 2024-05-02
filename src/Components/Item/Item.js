import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss'

function Item() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className='fw-bold'>
          Name
        </Card.Text>
        <Card.Text>Realizar proyecto</Card.Text>
        <Card.Text className='fw-bold'>
          Description
        </Card.Text>
        <Card.Text>
          Elaborar proyecto del curso de DAW.
        </Card.Text>
        <Button variant="info">Edit</Button>
        <Button variant="info">Remove</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;