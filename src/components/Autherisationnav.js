import React, {useState  } from 'react';
import avatar from '../img/avatar.png'; 
// import arrow_down from '../img/arrow_down.svg';
// import { Context } from '..';
import {  signOut } from 'firebase/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { getAuth } from "firebase/auth";
import {    getFirestore, getDoc, setDoc,    doc} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// let user = {
//             firstName: 'Мишустин',
//             patronymic: 'Виктор' ,
//              lastName: 'Андреевич'}


// function formatName(user) {
//                 return user.firstName + ' '+ user.patronymic + ' ' + user.lastName;
//          }

 function Autherisationnav() {

    let [visible, setVisible] = useState(false)
    let [userName, setuserName] = useState('')
    let [userAvatar, setuserAvatar] = useState('')

    // const {auth} = useContext(Context)
    // const [user1] = useAuthState(auth)
    // console.log(user1.uid)
  
    // const chatRef = collection(db, 'ticket')
    

    try {
        const db = getFirestore()
        const auth = getAuth();
   
    const userUid = auth.currentUser.uid
    const userRef = doc(db, 'users', userUid );
    getDoc(userRef).then(docSnap => {
        if (docSnap.exists()) {
        //   console.log("Document data:", docSnap.data().name);
            setuserName(docSnap.data().name)
            if(docSnap.data().photoURL){
                (docSnap.data().photoURL.length > 0) ? setuserAvatar(docSnap.data().photoURL) :  setuserAvatar(avatar)
            } else {
                setuserAvatar(avatar)
            }
            
        } else {
          console.log("No such document!");

           setDoc(doc(db, "users", userUid ), {
            uid: userUid,
            role: "user"
            
         });

        }
      })
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)

        }

   
   
        // let openMenu = () => {
        //     setVisible(!visible)
        //     };
        const logout = () => {
            console.log('logout')
            const auth = getAuth();
                signOut(auth)
            };
        
    return(
        <div className="autherisationnav">
            <div className="name">
            {userName? userName : "User"  }
           

            </div>

            <div className="avatar">
                <img src={userAvatar} alt="avatar"/>


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
