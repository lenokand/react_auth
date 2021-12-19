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





import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    firestore,
    Timestamp,
    orderBy,
    limit,
    onSnapshot, query} from 'firebase/firestore';
// import { Firestore } from 'firebase/firestore/lite';

export default function DialogForm(props) {

  
    const [newMsg, setNewMsg] = useState('')
    const [messages, setMessages] = useState([])
    const {   auth,    db  } = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')

    const chatRef = collection(db, 'message')
    const q = query(chatRef, orderBy("timestamp", "asc"), limit(100));

    useEffect(() => { 
        const unsub = onSnapshot(q, (snapshot) => {
          const tmp = []
          snapshot.forEach(doc => {
            const utc = doc.data().timestamp
            const local = moment(utc).local().format('YYYY-MM-DD HH:mm:ss')
            const msg = {
              id: doc.id,
              message: doc.data().message,
              timestamp: local
            }
            tmp.push(msg)
            console.log(tmp)
          })
          setMessages(tmp)
          
        });
      })



const sendMessage = async (e) => {
    e.preventDefault();
    // console.log(value);

    try {
        const docRef = await addDoc(collection(db, "messages"), {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            // createdAt: [ firebase.db.FieldValue.serverTimestamp()]
            // createdAt: serverTimestamp()
            createdAt: moment.utc().valueOf()
        });
        console.log("Document written with ID: ", docRef.id);


    } catch (e) {
        console.error("Error adding document: ", e);
    }


    setValue('')
   
}



return ( 

    <form className = "chat-form"   onSubmit = { sendMessage } >
    <input placeholder = "Напишите сообщение..."    required onChange = {  e => setValue(e.target.value)    }    value = {        value    }    />


    <button type = "submit" > {  props.send } </button>

        < div >
         {messages.length > 0 && 
            messages.map( (message) => (
              <div key={message.id}>
                <hr />
                <h5>
                  {message.timestamp}
                </h5>
                <p>
                  {message.message}
                </p>
              </div>
            ))
          } 
          </div> 
    </form>

   
);
}