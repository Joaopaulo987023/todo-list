
import { useEffect, useState } from "react"
import Form from "./components/Form"
import { Container } from "./styles"
import TodoList from "./components/Lista/TodoList";
import { Titulo } from "./styles";

const LOCAL_STORAGE_KEY="todo:savedTasks";

function App() {
  const[todos, setTodos]=useState([]);

  const setTextAndSave = (newsTask)=>{
    setTodos(newsTask);
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(newsTask))

  }
  const loadSavedTask=()=>{
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(saved){
      setTodos(JSON.parse(saved))
    }
  }
  useEffect(()=>{
    loadSavedTask()
  },[])
  const addTask=(todo)=>{
    setTextAndSave([...todos,todo])
    
  }
  const removeTask = (id)=>{
    console.log(id)
    const newList = todos.filter((todo)=>todo.id!==id);
    setTextAndSave(newList);
    
}
  const isCompleted = (id)=>{
    const newTodos= [...todos];
    newTodos.map(todo=>todo.id === id ? (todo.checked = !todo.checked) : todo);
    setTextAndSave(newTodos);
    
  }

  return (
   <div >
      <Container>
        <Titulo>To do List</Titulo>
      <Form addTask={addTask}/>
      <TodoList isCompleted={isCompleted} removeTask={removeTask}todos={todos}/>
    </Container>
   </div>
  )
  
}

export default App;
