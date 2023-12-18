import { useState,useRef } from "react"
import { Formulario } from "../styles" 



export default function Form({addTask}) {


  const[text, setText]=useState('');

  const handleChange=(e)=>{
    const valor = e.target.value;
    const valorComLetraMaiusculas = valor.charAt(0).toUpperCase() + valor.slice(1);
    setText(valorComLetraMaiusculas);
    
  }


  const inputRef=useRef();
  const handleClickButton=()=>{
    inputRef.current.focus();
  }
  const handleKeyDown=(event)=>{
    if(event.key==='Enter'){
      inputRef.current.focus();
    }
  }
  const handleSubmit = (e)=> {
    e.preventDefault()
    const obj={
      text: text,
      checked:false,
      id:Math.floor(Math.random()*10000),
    }
    addTask(obj);
    setText('');

  }
  return (
    <Formulario onKeyDown={handleKeyDown} onSubmit={handleSubmit} >
        <input 
        ref={inputRef} 
        required 
        type="text" 
        autoFocus 
        value={text} 
        name='text' 
        placeholder="O que tenho que fazer"  
        onChange={handleChange}/>

        <button onClick={handleClickButton}>Adicionar</button>
    </Formulario>
  )
  
}

