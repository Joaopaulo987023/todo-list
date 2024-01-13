
import { useContext } from "react"
import Form from "./components/Formulario/Form"
import { ClearAll, Container } from "./styles"
import TodoList from "./components/Lista/TodoList";
import { Titulo } from "./styles";
import Modal from "./components/Modal/Modal";

import { TodoContext } from "./context/TodoContext";
function App() {
  const {todos,ClickRemove}=useContext(TodoContext);
  return (
   <>
      <Container>
        <Titulo>Lista de Tarefas</Titulo>
        <Form />
        <TodoList/>
        {todos.length>1 && <ClearAll onClick={ClickRemove}>Limpar lista</ClearAll>}
        <Modal/>
    </Container>
   </>
  )
  
}

export default App;
