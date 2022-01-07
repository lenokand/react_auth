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
    getDocs,
   
    getDoc,
    // addDoc,
    // firestore,
    // Timestamp,
    doc,
    query,
    // orderBy,
    // limit,
    // onSnapshot, query, 
    setDoc, updateDoc} from 'firebase/firestore';
    import { getAuth } from 'firebase/auth';
    // import moment from 'moment';


// import { Firestore } from 'firebase/firestore/lite';
// import ScrollToBottom, { useScrollToBottom, useSticky } from 'react-scroll-to-bottom'
import ImageUploading from 'react-images-uploading';

import Uploady from "@rpldy/uploady";

import { asUploadButton } from "@rpldy/upload-button";

import { getStorage, ref, uploadBytesResumable, uploadBytes, getDownloadURL } from "firebase/storage";

export default function Settings() {
    // const {  auth  } = useContext(Context)
    // const { firebaseApp   } = useContext(Context)
    
    // const [user] = useAuthState(auth)
    
    const auth2 = getAuth();
    const userUid = auth2.currentUser.uid
    // console.log(auth.currentUser.uid);
    // const db = getFirestore()

    // const [imageList, setimageList] = useState('')
    const [newImg, setNewImg] = useState('')
    const [newName, setNewName] = useState('')
    const [newTel, setNewTel] = useState('')
    const [newUserInfo, setNewUserInfo] = useState({})
    // const [messages, setMessages] = useState([])
    const db = getFirestore()
   


    
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
   
    const getSettingsFirebase = async () => {
       
      const docRef = doc(db, 'users', userUid)
      
      // const q = query(docRef);
      // console.log(q);


      const querySnapshot = await getDoc(docRef);

      if (querySnapshot.exists()) {
        // console.log("Document data:", querySnapshot.data());
        const tmp ={
          userName: querySnapshot.data().name,
          photoURL: querySnapshot.data().photoURL,
          phone: querySnapshot.data().phone,
          role: querySnapshot.data().role,
        }
     
        setNewUserInfo(tmp)
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      

      // querySnapshot.forEach((doc) => {
        

          
       
      // });
  
  }

  getSettingsFirebase()

        
    // const getSettings = async () => {
       
        
    //   try {

    //       const userRef = doc(db, 'users', userUid );
    //       const docSnap = await getDoc(userRef);
    //       if (docSnap.exists()) {
    //         // console.log("Document data:", docSnap.data());

    //         const tmp ={
    //           userName: docSnap.data().name,
    //           photoURL: docSnap.data().photoURL,
    //           phone: docSnap.data().phone,
    //           role: docSnap.data().role,
    //         }

    //         setNewUserInfo(tmp)

    //       } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //       }
        
    //   } catch (e) {
          
         
    //       console.error("Error getting document: ", docRef.id);

    //   }
    // }
    // getSettings()
    // console.log(newUserInfo);
    // console.log(newUserInfo.role == "user" );
   
   
    
    const sendSettings = async (e) => {
        e.preventDefault();
        
        try {

            const userRef = doc(db, 'users', userUid );
            console.log(newImg);

            if(newImg){
                
                // console.log(newImg.name, newImg);


                const storage = getStorage();
                const storageRef = ref(storage);     
                // Points to 'images'
                const imagesRef = ref(storageRef, userUid);
                const fileName = newImg.name;
                const checkname = fileName.split('.')
                const lengthchn = checkname.length - 1


                if (checkname[lengthchn] == 'png'){

                  // console.log('png')
                  const spaceRef = ref(imagesRef, 'avatar.png');
                  
                  uploadBytes(spaceRef, newImg).then((snapshot) => {
                  console.log('Uploaded a file!');
                  console.log(newImg.name, newImg);
                  setNewImg('')

                });


                getDownloadURL(ref(storage, userUid + `/avatar.png`))
                .then((url) => {
                  // `url` is the download URL for 'images/stars.jpg'
                 updateDoc(userRef, { photoURL: url});
                 console.log('upl scs', url);
                })
                .catch((error) => {
                  // Handle any errors
                  console.log('getDownloadURL error');
                });

                } else {


                  const spaceRef = ref(imagesRef, 'avatar.jpg');
                  
                uploadBytes(spaceRef, newImg).then((snapshot) => {
                  console.log('Uploaded a file!');
                  console.log(newImg.name, newImg);
                  setNewImg('')

                });

                getDownloadURL(ref(storage, userUid + `/avatar.jpg`))
                .then((url) => {
                  // `url` is the download URL for 'images/stars.jpg'
                 updateDoc(userRef, { photoURL: url});
                 console.log('upl scs');
                })
                .catch((error) => {
                  // Handle any errors
                  console.log('getDownloadURL error');
                });
                }
                

                // const spaceRef = ref(imagesRef, fileName);
                

                // uploadBytes(spaceRef, newImg).then((snapshot) => {
                //   console.log('Uploaded a file!');
                //   console.log(newImg.name, newImg);
                //   setNewImg('')

                // });
                // console.log(user.uid + `/avatar.jpg`)

              
               
                
                
                // const mountainImagesRef = ref(storage, 'images/mountains4.jpg');
                // const uploadTask = uploadBytesResumable(storageRef, newImg);
            }

            // плагин
            // if(images.length > 0){
            //     await   updateDoc(userRef, { photoURL: images});
            
            //         const storage = getStorage();

            //         const storageRef = ref(storage);     
            //     //     // Points to 'images'
            //         const imagesRef = ref(storageRef, 'images');
            //         const fileName = images[0].file.name;
    
            //         const spaceRef = ref(imagesRef, fileName);
    
            //         uploadBytes(spaceRef, newImg).then((snapshot) => {
            //           console.log('Uploaded a blob or file!');
            //           console.log(images[0].file.name, images[0]);
    
            //         });



            //     // const storage = getStorage();
            //     // const storageRef = ref(storage, `images/${images[0].file.name}`);
            //     // const mountainImagesRef = ref(storage, `images/${images[0].file.name}`);
            //     // const uploadTask = uploadBytesResumable(storageRef, images);
            //     setImages('')
            // }
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
            

            console.log('заполните форму повторно');
            console.error("Error adding document: ", e);


        }
      }
  
    
      // ImageUploading
    // const [images, setImages] = useState(null);
    // const maxNumber = 1;
  
    // const onChange = (imageList, addUpdateIndex) => {
    //   // data for submit
    //   // console.log(imageList, addUpdateIndex);
    //   // console.log(imageList[0].file.name);
    //   setImages(imageList);

    // };

    const onChangeImg = (e) => {
           if (e.target.files[0]) {
            setNewImg(e.target.files[0]);

            // console.log( newImg.name == '851880-3.jpg', newImg.name, newImg, e.target.files[0])
           }
     
      
    };


   

    


    return (
        <div className="settings">
            <div className="title">
                Настройки
            </div>
            <div className='subtitle'>
           
            </div>

            <div>

            </div>


            
            <form className = "settings_form"  
            // onSubmit={sendSettings}
             >

                <div className='settings_row row_title'>
                    <div className='settings_col'>
                    Текущие настройки 
                    </div>
                    <div className='settings_col'>
                      Введите новые данные для изменения
                    </div>

                </div>
                <div className='settings_row'>
                  <div className='settings_col'>
                  <div className='settings_wrapper'>
                    {newUserInfo.photoURL ? <img src={newUserInfo.photoURL} alt="avatar"/> : "Добавьте фото"}
                  
                  <div>
                  {newUserInfo.role == "user" ? 'Клиент' : ''}
                  {newUserInfo.role == "support" ? 'Администратор' : ''}
                  </div>
                  
                    
                  </div>
                    

                 
                    {/* <img src="" className="current-avatar" alt=""> */}


                  </div>
                  <div className='settings_col'>


                  <input placeholder = "Укажите путь аватарки..." type="file"   
                  // value={newImg}    
                  // onChange={(e) => setNewImg(e.target.value)}
                  onChange={onChangeImg}
                  />
                  
                  </div>
        


                </div>
                 <div className='settings_row'>
               
                    {/* <ImageUploading
                      multiple
                      value={images}
                      onChange={onChange}
                      maxNumber={maxNumber}
                      dataURLKey="data_url" 
                    >
                          {({
                            imageList,
                            onImageUpload,
                            onImageRemoveAll,
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
                                    <button className='active_btn' onClick={() => onImageUpdate(index)}>Обновить</button>
                                    <button className='active_btn' onClick={() => onImageRemove(index)}>Очистить</button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
          </ImageUploading> */}
          
                    </div>
                <div className='settings_row'>
                <div className='settings_col'>
                 {newUserInfo.userName? newUserInfo.userName : "Укажите имя"}


                  </div>
                  <div className='settings_col'>
                  <input placeholder = "Укажите имя"    value={newName}    onChange={(e) => setNewName(e.target.value)}/>
                    
                  </div>
                
                </div>
                <div className='settings_row'>
                <div className='settings_col'>
                 {newUserInfo.phone ? newUserInfo.phone : "Укажите телефон"}


                  </div>
                  <div className='settings_col'>
                  <InputMask placeholder = "Телефон"  mask="+7 (999) 99-99-999" onChange={(e) => setNewTel(e.target.value)} value={newTel} />


                  </div>
               
                </div>
               
                <div className='settings_row'>
                  
                  <button className='active_btn' type = "submit"  disabled={!newImg & !newName & !newTel} onClick={sendSettings}> Сохранить изменения</button>


                  
               
                </div>
                

               




                </form>


                < div  className='settings_instraction'> 
                    
            После изменения личных данных необходимо обновить страницу
                </div> 


        </div>
    )
}
