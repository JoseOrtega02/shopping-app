import React from 'react'
import {Modal} from './bodylists/Modal.jsx'



export  function HeaderSide() {

const showModal = () =>{
  const modal = document.getElementById('modal')
  
  modal.style.display = 'block'
}

  return (
    <div className="side__header">
      <button onClick={showModal}>Add List</button>
      <Modal/>
    </div>
  )
}
