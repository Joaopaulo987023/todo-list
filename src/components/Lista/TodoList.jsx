import { Lista } from "./styles";
import Item from "./Item/Item";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";


export default function TodoList() {
  const{todos}=useContext(TodoContext);
  return (
    <Lista>
        {todos.map((todo)=>{
         return(<Item 
          key={todo.id}
          id={todo.id}
          text={todo.text}
          checked={todo.checked}
          
          />)
        }
        )}
    </Lista>
  )
}


