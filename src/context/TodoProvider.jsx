import React, { useState } from 'react'
import { TodoContext } from './TodoContext'


const LOCAL_STORAGE_KEY="todo:savedTasks";
export default function TodoProvider({children}) {

  const[openModal, setOpenModal]=useState(false);
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
 const ClickRemove = () =>{
    setTextAndSave([]);
} 
  const value = {
    openModal,
    setOpenModal,
    todos,
    setTodos,
    text, 
    setText,
    setTextAndSave,
    loadSavedTask,
    ClickRemove
  }  

  return (
    <TodoContext.Provider value={value}>
        {children}
    </TodoContext.Provider>
  )
}
