import React, {useState, useContext  } from 'react';
import avatar from '../img/avatar.png'; 
import arrow_down from '../img/arrow_down.svg';
import { Context } from '..';
import {  signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from "firebase/auth";
import {    getFirestore, getDoc,    doc} from 'firebase/firestore';


// let user = {
//             firstName: 'Мишустин',
//             patronymic: 'Виктор' ,
//              lastName: 'Андреевич'}


// function formatName(user) {
//                 return user.firstName + ' '+ user.patronymic + ' ' + user.lastName;
//          }

 function Autherisationnav() {

    const {auth} = useContext(Context)
    const [user1] = useAuthState(auth)
    // console.log(user1.uid)
    const db = getFirestore()

    try {
    const userRef = doc(db, 'users', user1.uid );
    getDoc(userRef).then(docSnap => {
        if (docSnap.exists()) {
        //   console.log("Document data:", docSnap.data().name);
            setuserName(docSnap.data().name)
        } else {
          console.log("No such document!");
        }
      })
} catch (error) {
     const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)

}

    let [visible, setVisible] = useState(false)
    let [userName, setuserName] = useState('')
   
    let openMenu = () => {
        setVisible(!visible)
        };
    const logout = () => {
        console.log('logout')
            signOut(auth)
          };

    return(
        <div className="autherisationnav">
            <div className="name">
        {userName}
           

            </div>

            <div className="avatar">
                <img src={avatar} alt="avatar"/>


            </div>

            {/* <div className="subbutton" onClick={openMenu}>

                <img src={arrow_down} alt="arrow_down"/>
               

            </div> */}
            <div className="submenu"  style={{display: visible ? 'flex' : 'none'}}>Submenu</div>
            <button className="active_btn" onClick={logout}>
                выйти
            </button>

        </div>

)

}
export default Autherisationnav;
