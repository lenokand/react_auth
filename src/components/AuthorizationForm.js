import React, {useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '..';
import { FirebaseApp } from '@firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function AuthorizationForm(props) {

    // const {auth} = useContext(Context) 
  

    //  function handleFormSubmit(e) {
    //     e.preventDefault();
    //     const data = {
    //         login: this.login,
    //         password: this.password
    //     }
    //     console.log(data)
    //     let email = data.login
    //     let password = data.password

    //     const auth = getAuth();
    //         signInWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             // Signed in 
    //             console.log('auth = true')
    //             const user = userCredential.user;
    //             // ...
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             console.log(errorMessage)
    //         });                                                   
    // }

    return (
        <div className="form-block">
          <form  className="chat-form"
           onSubmit={props.handleFormSubmit}
           >
                <input placeholder="логин"  
                                    // required
                                    // onChange={e => this.login = e.target.value}
                                    onChange={props.handleChangeLogin}
                                    value={props.login}
                                      />
                <input type="password" placeholder="пароль" 
                                    //  onChange={e => this.password = e.target.value} 
                                    // required
                                    onChange={props.handleChangePassword}
                                    value={props.password} 
                                     />


                <button type="submit"> войти в кабинет </button>
            </form>
            <Link to="/forgotpassword">забыли пароль?</Link>
        </div>
    )
}
