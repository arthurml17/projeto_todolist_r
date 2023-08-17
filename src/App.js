import Form from './components/Form';
import TodoItem from './components/TodoItem';
import { Container } from '@mui/material';

function App() {
  var validaLogin;
  if(validaLogin === true){
    return (
      <Container maxWidth="xs" style={{marginTop:" 5em "}}>
        <Form />
        <TodoItem />
      </Container>
    );
  }else{
    return (
      <Container maxWidth="xs" style={{marginTop:" 5em "}}>
        <Form />
        <TodoItem />
      </Container>
    );
  }

  
}

export default App;
