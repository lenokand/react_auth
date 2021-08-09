import React from 'react'

export default function ModalProps(props) {
  return (
    <div className="modalPage" style={{display: (props.showModal) ? 'flex' : 'none'}}>
        Раздел находится в разработке

        <button onClick={props.toggleModal} className="active_btn">OK</button>
    </div>
  )
}

