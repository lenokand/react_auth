import React, {
    useContext,
    useState,

} from 'react'
import {
    useAuthState
} from 'react-firebase-hooks/auth';
import {
    Context
} from "..";
import moment from 'moment';

// import Loader from './Loader';

import avatarNull from '../img/avatar.png'; 



import {
    getFirestore,
    collection,
    getDoc,
    addDoc,
    doc, 
     query} from 'firebase/firestore';

export default function DialogFormSupport(props) {

  
    
    const {  auth  } = useContext(Context)
    const [user] = useAuthState(auth)

    const [newMsg, setNewMsg] = useState('')
   

 



    const sendMsg = async (e) => {
      e.preventDefault();
       
        try {
          const db = getFirestore()
      
          const chatRef = collection(db, 'users', props.uid, 'chat')
            // данные текущего юзера
              const docRef = doc(db, 'users', props.curentUserId); 
              const docSnap = await getDoc(docRef);

              if (docSnap.exists()) {
              
                const avatar = docSnap.data().photoURL ? docSnap.data().photoURL : avatarNull

                const u = query(chatRef);


                addDoc(chatRef, {
                
                    message: newMsg,
                    uid: props.curentUserId,
                    fileUpload: null,
                    displayName: docSnap.data().name,
                    photoURL: avatar,
                    timestamp: moment.utc().valueOf()

                  });
              
              } else {
             
                console.log("No such document!");
              }
            // 

        
        setNewMsg('')
      } catch (e) {
        console.error("Error document: ", e);
      }
       
      }


     

return ( 

    <form 
    // className = "chat-form "  
    className ={`chat-form  ${props.uid ==""? "disabled" : ""}`}
    
    onSubmit={sendMsg}
      >
    
    <input placeholder = "Напишите сообщение..."    required  value={newMsg}    onChange={(e) => setNewMsg(e.target.value)}/>

  
    <button type = "submit"   disabled={!newMsg}> {  props.send } </button>

       
    </form>

   
);
}