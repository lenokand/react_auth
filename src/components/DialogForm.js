import React from 'react'

export default function DialogForm(props) {
    return (
        <form  className="chat-form" onSubmit={props.handleFormSubmit}>
        <input placeholder="Напишите сообщение..."  
                            required
                            onChange={props.handleNewPhraseChange}
                            value={props.newPhrase}  />


        <button type="submit"> {props.send}  </button>
        </form>
    )
}
