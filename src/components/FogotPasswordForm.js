import React from 'react'
import { Link } from 'react-router-dom'

export default function FogotPasswordForm(props) {
    return (
        <div className="form-block ">

          <form  className="chat-form"
           onSubmit={props.handleFormSubmitPassword}
           >
                <input type="email" placeholder="адрес Электронной почты"  
                                    required
                                    onChange={props.handleChangeEmail}
                                    value={props.email}
                                      />
             


                <button type="submit"> отправить </button>
            </form>
            <Link to="/">авторизация</Link>
        </div>
    )
}
