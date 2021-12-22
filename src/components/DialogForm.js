import React, {
    useContext,
    useState,
    useEffect
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
    // getDocs,
    addDoc,
    // firestore,
    // Timestamp,
    orderBy,
    limit,
    onSnapshot, query} from 'firebase/firestore';
// import { Firestore } from 'firebase/firestore/lite';
import ScrollToBottom, { useScrollToBottom, useSticky } from 'react-scroll-to-bottom'
export default function DialogForm(props) {

  
    // const [newMsg, setNewMsg] = useState('')
    // const [messages, setMessages] = useState([])
    const {  auth  } = useContext(Context)
    const [user] = useAuthState(auth)
    // const [value, setValue] = useState('')

    // const chatRef = collection(db, 'message')
    // const q = query(chatRef, orderBy("timestamp", "asc"), limit(100));



    const [newMsg, setNewMsg] = useState('')
    const [messages, setMessages] = useState([])

    const db = getFirestore()
    const chatRef = collection(db, 'chat')

    const q = query(chatRef, orderBy("timestamp", "asc"), limit(100));
    
    const scrollToBottom = useScrollToBottom();
    // const [sticky] = useSticky();

    const sendMsg = async (e) => {
      e.preventDefault();
        setNewMsg('')
        try {
          await addDoc(collection(db, "chat"), {
            message: newMsg,
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            timestamp: moment.utc().valueOf()
          });
          
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    
      useEffect(() => { 
        const unsub = onSnapshot(q, (snapshot) => {
          const tmp = []
          snapshot.forEach(doc => {
            const utc = doc.data().timestamp

            // const uid = 'oponent'
            const uid = (user.uid == doc.data().uid) ? 'user' : 'oponent'
            const local = moment(utc).local().format('YYYY-MM-DD HH:mm:ss')
            const avatar = user.photoURL ? 'user.photoURL' : avatarNull
            const msg = {
              id: doc.id,
              message: doc.data().message,
              timestamp: local,
              photoURL: avatar,
              uid: uid,
              
            }
            tmp.push(msg)
          })
        //   props.chat = tmp
        props.getMessage(tmp)
        
          // setMessages(tmp)
          
        });
      })




//     useEffect(() => { 
//         const unsub = onSnapshot(q, (snapshot) => {
//           const tmp = []
//         snapshot.forEach(doc => {
//             const utc = doc.data().createdAt
//             const local = moment(utc).local().format('YYYY-MM-DD HH:mm:ss')
//             const msg = {
//               id: doc.id,
//               text: doc.data().text,
//               createdAt: local
//             }
//             tmp.push(msg)
//             // console.log(tmp)
//           })
//           setMessages(tmp)
          
//         });
//       })



// const sendMessage = async (e) => {
//     e.preventDefault();
//     try {
//         const docRef = await addDoc(collection(db, "messages"), {
//             uid: user.uid,
//             displayName: user.displayName,
//             photoURL: user.photoURL,
//             text: value,
//             // createdAt: [ firebase.db.FieldValue.serverTimestamp()]
//             // createdAt: serverTimestamp()
//             createdAt: moment.utc().valueOf()
//         });
//         console.log("Document written with ID: ", docRef.id);


//     } catch (e) {
//         console.error("Error adding document: ", e);
//     }


//     setValue('')
   
// }



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