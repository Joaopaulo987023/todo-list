
import { useState } from "react"
import Form from "./components/Form"
import { Container } from "./styles"
import TodoList from "./components/Lista/TodoList";



function App() {
  const[todos, setTodos]=useState([]);

  const addTask=(todo)=>{
    setTodos([...todos,todo])
    
  }
  const removeTask = (id)=>{
    console.log(id)
    const newList = todos.filter((todo)=>todo.id!==id);
    setTodos(newList);
    
}
  const isCompleted = (id)=>{
    const newTodos= [...todos];
    newTodos.map(todo=>todo.id === id ? (todo.checked = !todo.checked) : todo);
    setTodos(newTodos);
    
    
    
  }

  return (
   <div className="app">
      <Container>
      <Form addTask={addTask}/>
      <TodoList isCompleted={isCompleted} removeTask={removeTask}todos={todos}/>
    </Container>
   </div>
  )
  
}

export default App;
