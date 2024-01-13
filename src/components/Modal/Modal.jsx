import React, { useContext } from 'react'
import { ContainerModal } from './styles'
import { TodoContext } from '../../context/TodoContext';

export default function Modal() {
  const{openModal,setOpenModal}=useContext(TodoContext);
  const handleCloseModal = ()=>{
    setOpenModal(false)
  }
  if(openModal){
    return (
        <ContainerModal>
            <div>
                  <h2>Esse item já existe na lista!</h2>
                  <button onClick={handleCloseModal}>Fechar</button>
            </div>
        </ContainerModal>
    )
  }
}
