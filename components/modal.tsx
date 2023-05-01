import React from 'react'

interface ModalProps {
  modalTitle?: string
  reset: () => void
}

const Modal = (props: ModalProps) => {
  return (
    <div className={`modal ${props.modalTitle ? "show" : ""}`}>
      <div className="modal__title">{props.modalTitle}</div>
      <button onClick={props.reset}>New Game</button>
    </div>
  )
}

export default Modal