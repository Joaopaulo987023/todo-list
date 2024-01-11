import React from 'react'
import { ContainerModal } from './styles'

export default function Modal({isOpen,handleCloseModal}) {

  if(isOpen){
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
