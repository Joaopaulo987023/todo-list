import { useState } from "react"
import { Formulario } from "../styles" 



export default function Form({addTask}) {
  const[text, setText]=useState('');
  const handleSubmit = (e)=> {
    e.preventDefault()
    const obj={
      text: text,
      checked:false,
      id:Math.floor(Math.random()*10000),
    }
    addTask(obj)
    setText('');
  }
  return (
    <Formulario onSubmit={handleSubmit}>
        <input required type="text" value={text} name='text' placeholder="O que tenho que fazer"  onChange={(e)=>setText(e.target.value)}/>
        <button>Adicionar</button>
    </Formulario>
  )
  
}

