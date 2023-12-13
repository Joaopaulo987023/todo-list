import React from 'react';
import { Imagem, ItemLista } from '../../../styles';
import Img from "../../../img/checked.png";
import Img2 from '../../../img/trash.png';
export default function Item({text,id,removeTask,isCompleted,checked}) {
  
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
