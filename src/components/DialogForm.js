import React, { useContext, useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from "..";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Loader from './Loader';



// import firebase from "firebase"
import firebase from 'firebase/compat/app';
// import firebase from 'firebase/app';
// import * as firebase from 'firebase'


import { getFirestore, collection, getDocs, addDoc, firestore, Timestamp, serverTimestamp } from 'firebase/firestore';
// import { Firestore } from 'firebase/firestore/lite';

export default function DialogForm(props) {

    // useEffect(() => {
    //     getMessageMetod(db)
    //    });
console.log(firebase)
    const {auth, db} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue ] = useState('')
    // console.log(firestore)
//     async function test () {
//         try {
//             const docRef = await addDoc(collection(db, "users"), {
//               first: "Ada",
//               last: "Lovelace",
//               born: 1815
//             });
//             console.log("Document written with ID: ", docRef.id);
//           } catch (e) {
//             console.error("Error adding document: ", e);
//           }
//     }
//    test()

    // async function getCities(db) {
    //     const citiesCol = collection(db, 'messages');
    //     const citySnapshot = await getDocs(citiesCol);
    //     const cityList = citySnapshot.docs.map(doc => doc.data());
    //     return cityList;
    //   }
    //    const massive =  getCities(db)
    //   console.log(massive)



    const [message, loading] = useCollectionData(


        // async function getMessage(db) {
        //     const messageCol = collection(db, 'messages');
        //     const messageSnapshot = await getDocs(messageCol);
        //     const messageList = messageSnapshot.docs.map(doc => doc.data());
        //     return messageList;
        //   }



     



        // db.collection('messages').orderBy('createdAt')
    )

    
    let messageList = []

     async function getMessageMetod(db) {

            const messageCol = collection(db, 'messages');
            const messageSnapshot = await getDocs(messageCol);
             messageList = messageSnapshot.docs.map(doc => doc.data(
                console.log(doc.data().text)


            ));

            
            // const querySnapshot = await getDocs(collection(db, "messages"));
            // querySnapshot.forEach((doc) => {
            //   console.log((doc.id), doc.data());
            // });

            return messageList;
          }
         
          

        //   let messagesL = getMessageMetod(db)
          
            // console.log(getMessageMetod(db))
            // console.log(getMessageMetod(db));
            // messageSnapshot.this._snapshot.docs.forEach(n => {
            //     {n.}
            // })
// console.log(collection(db, 'messages'))


        if (loading) {
            return <Loader/>
        }

        const sendMessage = async (e) => {
        e.preventDefault();
        // console.log(value);

        try { const docRef = await addDoc(collection(db, "messages"), {
            uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
                text: value,
                // createdAt: [ firebase.db.FieldValue.serverTimestamp()]
        });
        console.log("Document written with ID: ", docRef.id);
        

      } catch (e) {
        console.error("Error adding document: ", e);
      }

        
        
        // db.collection('messages').add({
        //     uid: user.uid,
        //     displayName: user.displayName,
        //     photoURL: user.photoURL,
        //     text: value,
        //     // createdAt: firebase.db.FieldValue.serverTimestamp()
        // })
        setValue('')
        getMessageMetod(db) 
    }
    
    

    return (
        <form  className="chat-form" onSubmit={sendMessage}>
        <input placeholder="Напишите сообщение..."  
                            required
                            onChange={e => setValue(e.target.value)}
                            value={value}  />


        <button type="submit"> {props.send}  </button>

        <div>
            {/* {messagesL.map(message =>
                <div>
                    {message.text}
                </div>)} */}
        </div>
        </form>
        // <form  className="chat-form" onSubmit={props.handleFormSubmit}>
        // <input placeholder="Напишите сообщение..."  
        //                     required
        //                     onChange={props.handleNewPhraseChange}
        //                     value={props.newPhrase}  />


        // <button type="submit"> {props.send}  </button>
        // </form>
    )
}
