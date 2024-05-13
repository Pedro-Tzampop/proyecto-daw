import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss'
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteGoal } from '../../Reducers/goalsSlice';

function Item(props) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(deleteGoal(props.id));
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className='fw-bold'>
          Name
        </Card.Text>
        <Card.Text>{props.name}</Card.Text>
        <Card.Text className='fw-bold'>
          Description
        </Card.Text>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Text className='fw-bold'>
          Due Date
        </Card.Text>
        <Card.Text>
          {props.dueDate}
        </Card.Text>
        <Button variant="info">Edit</Button>
        <Button variant="info" onClick={handleRemove}>Remove</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;