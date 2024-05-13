import logo from './logo.svg';
import './App.scss';
import Item from './Components/Item/Item';
import Formulario from './Components/Formulario/Formulario';
import Menu from './Components/Menu/Menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddingMobileButton from './Components/AddingMobileButton/AddingMobileButton'
import { useSelector } from 'react-redux';

const tareas =[{
  name:'Terminar proyecto de curso',
  description:'Realizar todas las actividades del curso',
  dueDate:'15-05-2025'
},
{
  name:'Realizar tarea 2',
  description:'Realizar tarea número dos',
  dueDate:'15-06-2025'
},
{
  name:'Tarea3',
  description:'Realizar tarea número tres',
  dueDate:'15-04-2025'
}]

function App() {
  const goals = useSelector((state)=>state.goals.value);
  return (
    <div className="App">
      <Menu/>
      <Container>
        <Row>
          <Col xs={0} md={0}  className='d-none d-sm-block d-sm-none d-md-block '><Formulario/></Col>
          <Col xs ={0}  sm ={0}>
            <Row className='d-md-none'>
              <div className='bg-transparent overlapping-div ' >
                <AddingMobileButton className='float-left'/>
              </div>
            </Row>
              <Col>
                { goals.map((tarea,index)=>(
                <Item key={index} name={tarea.name} description={tarea.description} dueDate={tarea.dueDate}></Item>
                )) }
              </Col>
          </Col>
        </Row>
      </Container> 
    </div>
  );
}

export default App;
