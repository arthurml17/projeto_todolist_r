import FormTodo from './components/FormTodo';
import TodoItem from './components/TodoItem';
import FormLogin from  './components/FormLogin';

import { Container } from '@mui/material';

function App() {
  var validaLogin;
  if(validaLogin === true){
    return (
      <Container maxWidth="xs" style={{marginTop:" 5em "}}>
        <FormTodo />
        <TodoItem />
      </Container>
    );
  }else{
    return (
      <Container maxWidth="xs" style={{marginTop:" 5em "}}>
        <FormLogin />
      </Container>
    );
  }

  
}

export default App;
