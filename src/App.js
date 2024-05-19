import React from 'react';
import './App.scss';
import Item from './Components/Item/Item';
import Formulario from './Components/Formulario/Formulario';
import Menu from './Components/Menu/Menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddingMobileButton from './Components/AddingMobileButton/AddingMobileButton';
import { useSelector } from 'react-redux';

function App() {
  const goals = useSelector((state) => state.goals.value);
  const tasks = useSelector((state) => state.tasks.value);
  const selectedOption = useSelector((state) => state.option.value);

  return (
    <div className="App">
      <Menu />
      <Container>
        <Row>
          <Col xs={0} md={0} className='d-none d-sm-block d-sm-none d-md-block'>
            <Formulario />
          </Col>
          <Col xs={0} sm={0}>
            <Row className='d-md-none'>
              <div className='bg-transparent overlapping-div'>
                <AddingMobileButton className='float-left' />
              </div>
            </Row>
            <Col>
              {selectedOption === 'goals' && goals.map((goal) => (
                <Item
                  key={goal.id} // Usa el id único como clave
                  id={goal.id} // Pasa el id al componente Item
                  name={goal.name}
                  description={goal.description}
                  dueDate={goal.dueDate}
                />
              ))}
              {selectedOption === 'tasks' && tasks.map((task) => (
                <Item
                  key={task.id} // Usa el id único como clave
                  id={task.id} // Pasa el id al componente Item
                  name={task.name}
                  description={task.description}
                  dueDate={task.dueDate}
                />
              ))}
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;


