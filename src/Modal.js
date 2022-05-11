import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './Context';

const Modal = () => {
    const { closeModal, isModalOpen } = useGlobalContext(); 

  return (
    <article className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay' }`}>
      <div className="modal-content">
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes/>
        </button>
        <h3>modal content</h3>
      </div>
    </article>
  )
}

export default Modal
