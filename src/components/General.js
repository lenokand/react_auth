import React, {useState, useEffect} from 'react'

import SeoSubmenu from './SeoSubmenu'
import "@fancyapps/ui/dist/fancybox.css";
import Fancybox from "./fancybox.js";

import {
    getFirestore,
    collection,
    query,
    addDoc,
    getDocs
   } from 'firebase/firestore';
    import { getAuth } from 'firebase/auth';
function General() {
    const data = [
        { 
            title: 'Ваши проекты:',
            data:'data from backend'
    
        },
        { 
            title: 'Динамика позиций за текущий месяц:',
            data:'data from backend'
    
        },
    ]

  

    const [acts, setActs] = useState([])
   


    const getActs = async () => {
        try {
            const db = getFirestore()
            const auth = getAuth();
            const userUid = auth.currentUser.uid
            const chatRef = collection(db, 'users', userUid, 'seogeneral')
            const q = query(chatRef);
            const querySnapshot = await getDocs(q);
            const tmp = []

            querySnapshot.forEach((doc) => {
                // const utc = doc.data().time
                // console.log(utc);
                // const local = moment(utc).local().format('YYYY-MM-DD')
                
                
                const msg = {
                    id: doc.id,
                    title: doc.data().title,
                    dinamic: doc.data().dinamic
                    
                    
                   
                  
                  
                }
               
                tmp.push(msg)
             
            });
            setActs(tmp)
            // console.log(acts);
            
                    
         } catch (e) {
           console.error("Error reading a document: ", e);
           const db = getFirestore()
           const auth = getAuth();
           const userUid = auth.currentUser.uid
           const docRef = await addDoc(collection(db, 'users', userUid, 'seogeneral'), { });
          console.log("Document written with ID: ", docRef.id);
         }
    }
    useEffect(() => {
        getActs()
    }, []);
    

return(
    <div className="general">
        <div className="wrapper">
            <div className="title">
                SEO - Общее
            </div>
            
            <div className="general-block">
            <Fancybox options={{ infinite: false }}>

                       
                               

                                                    
                {(acts.length > 0)  ?  acts.map((item, index )=>
                (

                    <div className="general-progects" key={item.id}>
                                <div className="general-title">
                                    {item.title}
                                </div> 

                                <div className="general-body">
                                        <button 
                                        data-fancybox="gallery"
                                        data-src={item.dinamic }
                                        className="fancy-img"
                                        >
                                            <img src={item.dinamic}/>
                                        </button> 
                                        <div>
                                        Нажмите, что бы развернуть документ
                                        </div>
                                </div> 
      
                            </div>
             

                )) : `Документы не найдены.  `}   




                </Fancybox>  

                 

               
               
            </div>
        </div>

        <SeoSubmenu/>
        
       
        
    </div>
)
}

export default General;