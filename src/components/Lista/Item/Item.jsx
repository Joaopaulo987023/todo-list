import React, { useContext } from 'react';
import { Imagem, ItemLista } from './styles';
import Img from "../../../img/checked.png";
import Img2 from '../../../img/trash.png';
import { TodoContext } from '../../../context/TodoContext';
export default function Item({text,id,checked}) {
  
  const{todos, setTextAndSave}=useContext(TodoContext);
  const isCompleted = (id)=>{
    const newTodos= [...todos];
    newTodos.map(todo=>todo.id === id ? (todo.checked = !todo.checked) : todo);
    setTextAndSave(newTodos);
    
  }
  const removeTask = (id)=>{
    const newList = todos.filter((todo)=>todo.id!==id);
    setTextAndSave(newList);
    
}
  return (
    <ItemLista checked={checked} >
        <Imagem onClick={()=>isCompleted(id)} src={Img} alt="Feito" />
        <p>
          {text}
        </p>
        <Imagem onClick={()=>removeTask(id)} src={Img2} alt="Lixeira" />
    </ItemLista>
  )
}
