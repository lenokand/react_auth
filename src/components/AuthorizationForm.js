import React from 'react'
import { Link } from 'react-router-dom'

export default function AuthorizationForm(props) {

    //  function handleFormSubmit(e) {
    //     e.preventDefault();
    //     const data = {
    //         login: this.login,
    //         password: this.password
    //     }
    //     console.log(data, 2)
    // }

    return (
        <div className="form-block">
          <form  className="chat-form"
           onSubmit={props.handleFormSubmit}
           >
                <input placeholder="логин"  
                                    required
                                    // onChange={e => this.login = e.target.value}
                                    onChange={props.handleChangeLogin}
                                    value={props.login}
                                      />
                <input type="password" placeholder="пароль" 
                                    //  onChange={e => this.password = e.target.value} 
                                    required
                                    onChange={props.handleChangePassword}
                                    value={props.password} 
                                     />


                <button type="submit"> войти в кабинет </button>
            </form>
            <Link to="/forgotpassword">забыли пароль?</Link>
        </div>
    )
}
