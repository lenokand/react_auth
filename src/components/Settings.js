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


import {
    getFirestore,
    collection,
    // getDocs,
    addDoc,
    // firestore,
    // Timestamp,
    doc,
    orderBy,
    limit,
    onSnapshot, query, setDoc, updateDoc} from 'firebase/firestore';
// import { Firestore } from 'firebase/firestore/lite';
import ScrollToBottom, { useScrollToBottom, useSticky } from 'react-scroll-to-bottom'
// import ImageUploading from 'react-images-uploading';

import Uploady from "@rpldy/uploady";
import { asUploadButton } from "@rpldy/upload-button";


export default function Settings() {
    const {  auth  } = useContext(Context)
    const [user] = useAuthState(auth)

    const [newImg, setNewImg] = useState('')
    // const [messages, setMessages] = useState([])
    const db = getFirestore()
    const docRef = collection(db, 'users')

    // const [images, setImages] = React.useState([]);
    // const maxNumber = 1;

    // const onChange = (imageList, addUpdateIndex) => {
    //     // data for submit
    //     console.log(imageList, addUpdateIndex);
    //     setImages(imageList);
    //   };  
    // const q = query(chatRef, orderBy("timestamp", "asc"), limit(100));

//    try {
//     const cityRef = doc(db, 'users', user.uid );


//     console.log(user.uid, cityRef)

//     setDoc(cityRef, { photoURL: true});
    
//         // ScrollToBottom()
//       } catch (e) {
//         console.error("Error adding document: ", e);
      
//       }




       

    // const cityRef = doc(db, 'users', user.uid );


    const sendSettings = async (e) => {
        e.preventDefault();
        setNewImg('')
        try {

            const userRef = doc(db, 'users', user.uid );

            if(newImg.length > 0){
                await   updateDoc(userRef, { photoURL: newImg});
            }
            
         

            console.log("Document written with ID: ", userRef.id)
        //   ScrollToBottom()
        } catch (e) {
            await setDoc(doc(db, "users", user.uid ), {
               uid: user.uid,
               photoURL: (newImg.length > 0)? newImg:''
            });
          
            const userRef = doc(db, 'users', user.uid );
              if(newImg.length > 0){
                  await   updateDoc(userRef, { photoURL: newImg});
              }
              


          console.error("Error adding document: ", docRef.id);


        }
      }

      const DivUploadButton = asUploadButton((props) => {
        return <div {...props} style={{ cursor: "pointer" }}>
            DIV Upload Button
        </div>
    });



    return (
        <div className="settings">
            <div className="title">
                Настройки
            </div>
            <form className = "settings_form"  onSubmit={sendSettings}  >
                
                <input placeholder = "Укажите путь аватарки..." type="file"   value={newImg}    onChange={(e) => setNewImg(e.target.value)}/>


                <button type = "submit"  disabled={!newImg}> Сохранить </button>

                    < div > 
                    {/* <Uploady destination={{ url: "https://reactauth.demo.digitalrex.ru/static/media/" }}>
                    <DivUploadButton/>
                        </Uploady> */}
            
                    </div> 



                </form>




        </div>
    )
}
