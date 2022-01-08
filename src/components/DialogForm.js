import React, {
    useContext,
    useState,
    // useEffect
} from 'react'
import {
    useAuthState
} from 'react-firebase-hooks/auth';
import {
    Context
} from "..";
import moment from 'moment';
// import {
//     useCollectionData
// } from 'react-firebase-hooks/firestore';
import Loader from './Loader';
// import {
//     getDatabase,
//     ref,
//     onDisconnect,
//     serverTimestamp,
//     orderByChild,
   
// } from "firebase/database";
import avatarNull from '../img/avatar.png'; 



import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    where, 
     query} from 'firebase/firestore';
// import { Firestore } from 'firebase/firestore/lite';
// import ScrollToBottom, { useScrollToBottom, useSticky } from 'react-scroll-to-bottom'
export default function DialogForm(props) {

  
    // const [newMsg, setNewMsg] = useState('')
    // const [messages, setMessages] = useState([])
    const {  auth  } = useContext(Context)
    const [user] = useAuthState(auth)

    const [newMsg, setNewMsg] = useState('')
    // const [messages, setMessages] = useState([])

 



    const sendMsg = async (e) => {
      e.preventDefault();
        // let bd_name = 'support1_' + user.uid
        // let bd_name = user.uid
        // const currentUser = []
        try {
          const db = getFirestore()
      
          // const scrollToBottom = useScrollToBottom();
         
          
          const chatRef = collection(db, 'chat')
       
          const u = query(collection(db, 'users'), where("uid", "==", user.uid) );


        const querySnapshot = await getDocs(u);
        querySnapshot.forEach((doc) => {
        //  currentUser = doc.data()
        const avatar = doc.data().photoURL ? doc.data().photoURL : avatarNull
        try {
        
          
           addDoc(chatRef, {
          // await addDoc(collection(db, 'support1_' + user.uid), {
            message: newMsg,
            uid: doc.data().uid,
            fileUpload: null,
            displayName: doc.data().name,
            photoURL: avatar,
            timestamp: moment.utc().valueOf()
          });
                   
        } catch (e) {
          console.error("Error adding document: ", e);
        }

        });
        
        setNewMsg('')
      } catch (e) {
        console.error("Error document: ", e);
      }
       
      }


    // const chatRef = collection(db, 'support1_' + user.uid)

    // const q = query(chatRef, orderBy("timestamp", "asc"), limit(150));

    
    //   useEffect(
        
        
    //     () => { 
    //       const unsub = onSnapshot(q, (snapshot) => {
    //       const tmp = []
    //       snapshot.forEach(doc => {
    //         const utc = doc.data().timestamp

    //         // const uid = 'oponent'
    //         const uid = (user.uid == doc.data().uid) ? 'user' : 'oponent'

    //         const local = moment(utc).local().format('YYYY-MM-DD HH:mm:ss')
    //         const avatar = doc.data().photoURL ? doc.data().photoURL : avatarNull
            
    //         const msg = {
    //           id: doc.id,
    //           message: doc.data().message,
    //           fileUpload:  doc.data().fileUpload,
    //           timestamp: local,
    //           photoURL: avatar,
    //           fileUpload: doc.data().fileUpload,
    //           displayName: doc.data().displayName,
    //           uid: uid,
              
    //         }
    //         tmp.push(msg)
    //       })
    //     //   props.chat = tmp
    //     props.getMessage(tmp)
        
    //       // setMessages(tmp)
          
    //     });

        

    //   })
     

return ( 

    <form className = "chat-form"  
    onSubmit={sendMsg}
      >
    {/* <input placeholder = "Напишите сообщение..."    required onChange = {  e => setValue(e.target.value)    }    value = {        value    }    /> */}
    <input placeholder = "Напишите сообщение..."    required  value={newMsg}    onChange={(e) => setNewMsg(e.target.value)}/>


    <button type = "submit"   disabled={!newMsg}> {  props.send } </button>

       
    </form>

   
);
}