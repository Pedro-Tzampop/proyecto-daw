import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.scss';
import { useDispatch, useSelector } from 'react-redux';
import { 
  addGoal 
} from '../../Reducers/goalsSlice';
import {
  addTask
} from '../../Reducers/tasksSlice.js'
import { useRef, useState, useEffect } from 'react';


function Formulario() {

  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();
  const selectedOption = useSelector(state => state.option.selectedOption);
  const dispatch = useDispatch();

  const [buttonText, setButtonText] = useState('Add Goal');

  const addItem = (type) => { 
    if (type === 'goal') {
      dispatch(addGoal({ 'name': inputRefName.current.value, 'description': inputRefDescription.current.value, 'dueDate': inputRefDueDate.current.value }));
    } else if (type === 'task') {
      dispatch(addTask({ 'name': inputRefName.current.value, 'description': inputRefDescription.current.value, 'dueDate': inputRefDueDate.current.value }));
    }
  };
  
  const handleButtonClick = (e) => {
    e.preventDefault();
    addItem(selectedOption);
  };
  

  useEffect(() => {
    if (selectedOption === 'goals') {
      setButtonText('Add Goal');
    } else if (selectedOption === 'tasks') {
      setButtonText('Add Task');
    }
  }, [selectedOption]);


  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder='' ref={inputRefName} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} ref={inputRefDescription} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDueDate">
          <Form.Label>Due Date</Form.Label>
          <Form.Control type="Date"  ref={inputRefDueDate} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={(e) => handleButtonClick(e)}>
          {buttonText}
        </Button>
      </Form>
      </div>
  );
}

export default Formulario;