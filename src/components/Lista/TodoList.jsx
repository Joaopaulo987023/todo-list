import { Lista } from "../../styles";
import Item from "./Item/Item";


export default function TodoList({todos, removeTask,isCompleted}) {
  
  return (
    <Lista>
        {todos.map((todo)=>{
         return(<Item 
          removeTask={removeTask}
          isCompleted={isCompleted} 
          key={todo.id}
          id={todo.id}
          text={todo.text}
          
          />)
        }
        )}
    </Lista>
  )
}


