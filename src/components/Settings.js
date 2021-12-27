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
// import moment from 'moment';

import InputMask from "react-input-mask";
import {
    getFirestore,
    collection,
    // getDocs,
    getDoc,
    // addDoc,
    // firestore,
    // Timestamp,
    doc,
    // orderBy,
    // limit,
    // onSnapshot, query, 
    setDoc, updateDoc} from 'firebase/firestore';
// import { Firestore } from 'firebase/firestore/lite';
// import ScrollToBottom, { useScrollToBottom, useSticky } from 'react-scroll-to-bottom'
import ImageUploading from 'react-images-uploading';

import Uploady from "@rpldy/uploady";
import { asUploadButton } from "@rpldy/upload-button";

import { getStorage, ref, uploadBytesResumable  } from "firebase/storage";

export default function Settings() {
    const {  auth  } = useContext(Context)
    const { firebaseApp   } = useContext(Context)
    
    const [user] = useAuthState(auth)

    // const [imageList, setimageList] = useState('')
    const [newImg, setNewImg] = useState('')
    const [newName, setNewName] = useState('')
    const [newTel, setNewTel] = useState('')
    // const [messages, setMessages] = useState([])
    const db = getFirestore()
    const docRef = collection(db, 'users')
    
    // const storage = getStorage(firebaseApp);

    // try {
    //     const docUserSettings = collection(db, 'users', user.uid)
    //     getDoc(docUserSettings).then(docSnap => {
    //         if (docSnap.exists()) {
    //         //   console.log("Document data:", docSnap.data().name);
    //             console.log(docSnap.data().uid)
    //         } else {
    //           console.log("No such document!");
    //         }
    //       })
    // } catch (error) {
    //      const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorMessage)
    
    // }


        


    const sendSettings = async (e) => {
        e.preventDefault();
        setNewImg('')
        try {

            const userRef = doc(db, 'users', user.uid );

            if(newImg.length > 0){
                await   updateDoc(userRef, { photoURL: newImg});
                setNewImg('')
            }
            if(newName.length > 0){
                await   updateDoc(userRef, { name: newName});
                setNewName('')
            }
            if(newTel.length > 0){
                await   updateDoc(userRef, { phone: newTel});
                setNewTel('')
            }
            
         

            console.log("Document written with ID: ", userRef.id)
        //   ScrollToBottom()
        } catch (e) {
            await setDoc(doc(db, "users", user.uid ), {
               uid: user.uid,
            //    photoURL: (newImg.length > 0)? newImg:''
       
            });

            console.log('заполните форму повторно');
            const userRef = doc(db, 'users', user.uid );
              if(newImg.length > 0){
                  await   updateDoc(userRef, { photoURL: newImg});
                  setNewImg('')
              }
              
            if(newName.length > 0){
                await   updateDoc(userRef, { name: newName});
                setNewName('')

            }
            if(newTel.length > 0){
                await   updateDoc(userRef, { phone: newTel});
                setNewTel('')
            }
          console.error("Error adding document: ", docRef.id);


        }
      }

    

    const [images, setImages] = useState(null);
    const maxNumber = 69;
  
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      // console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };


    // загрузка в сторедж
    // const storage = getStorage();
    // const storageRef = ref(storage, 'images/mountains.jpg');
    // const mountainImagesRef = ref(storage, 'images/mountains.jpg');
    // const uploadTask = uploadBytesResumable(storageRef, images);




    return (
        <div className="settings">
            <div className="title">
                Настройки
            </div>
            <div className='subtitle'>
            Текущие настройки 
            </div>

            <div>

            </div>


            
            <form className = "settings_form"  onSubmit={sendSettings}  >
                {/* <div className='settings_row'>
                <input placeholder = "Укажите путь аватарки..." type="file"   value={newImg}    onChange={(e) => setNewImg(e.target.value)}/>
                </div> */}
                 <div className='settings_row'>
                    
                    <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              // onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <button className='drug_img'
                  style={isDragging ? { color: 'red' } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Нажмите или перетащите сюда картинку
                </button>
                &nbsp;
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image['data_url']} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                      <button className='active_btn' onClick={() => onImageUpdate(index)}>Update</button>
                      <button className='active_btn' onClick={() => onImageRemove(index)}>Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
                    </div>
                <div className='settings_row'>
                <input placeholder = "Укажите имя"    value={newName}    onChange={(e) => setNewName(e.target.value)}/>
                </div>
                <div className='settings_row'>
                {/* <input placeholder = "Телефон"  mask="99/99/9999"    value={newTel}    onChange={(e) => setNewTel(e.target.value)}/> */}
                <InputMask placeholder = "Телефон"  mask="+7 (999) 99-99-999" onChange={(e) => setNewTel(e.target.value)} value={newTel} />
                </div>
               
                
                

                <button className='active_btn' type = "submit"  disabled={!newImg & !newName & !newTel}> Сохранить </button>

                    < div > 
                    
            
                    </div> 



                </form>




        </div>
    )
}
