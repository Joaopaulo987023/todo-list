
import { useEffect, useState } from "react"
import Form from "./components/Formulario/Form"
import { ClearAll, Container } from "./styles"
import TodoList from "./components/Lista/TodoList";
import { Titulo } from "./styles";
import Modal from "./components/Modal/Modal";

const LOCAL_STORAGE_KEY="todo:savedTasks";

function App() {
  const[openModal, setOpenModal]=useState(false)
  const[todos, setTodos]=useState([]);
  const[text, setText]=useState('');

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
    if(todos.some(todo => todo.text === text)){
     //verificando se o ultimo item digitado já existe na lista
      setOpenModal(true);
      setTextAndSave([...todos])
    }else{
      setTextAndSave([...todos,todo])
    }
    
    
  }
  const removeTask = (id)=>{
    const newList = todos.filter((todo)=>todo.id!==id);
    setTextAndSave(newList);
    
}
  const isCompleted = (id)=>{
    const newTodos= [...todos];
    newTodos.map(todo=>todo.id === id ? (todo.checked = !todo.checked) : todo);
    setTextAndSave(newTodos);
    
  }

  const handleClick =()=>{
    setTextAndSave([])


  }
  const handleCloseModal = ()=>{
    setOpenModal(false)
  }
   
  return (
   <div >
      <Container>
        <Titulo>Lista de Tarefas</Titulo>
        <Form addTask={addTask} setText={setText} text={text}/>
        
        <TodoList isCompleted={isCompleted} removeTask={removeTask}todos={todos}/>
        {todos.length>0 && <ClearAll onClick={handleClick}>Limpar lista</ClearAll>}
        <Modal isOpen={openModal} handleCloseModal={handleCloseModal}/>
    </Container>
   </div>
  )
  
}

export default App;
