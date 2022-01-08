import React, {useState, useEffect} from 'react'
import SeoSubmenu from './SeoSubmenu'
import Fancybox from "./fancybox.js";
// import { Fancybox, Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";

import {
    getFirestore,
    collection,
    query,
    addDoc,
    getDocs
   } from 'firebase/firestore';
    import { getAuth } from 'firebase/auth';
export default function SeoPosition() {
    
    

    const [acts, setActs] = useState([])
   
  
    


        const getActs = async () => {
            try {
                const auth = getAuth();
                const db = getFirestore()
                const userUid = auth.currentUser.uid
            
                const chatRef = collection(db, 'users', userUid, 'seoposition')
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
                        money: doc.data().urlmoney,
                        position: doc.data().urlposition,
                        
                        
                       
                      
                      
                    }
                   
                    tmp.push(msg)
                 
                });
                setActs(tmp)
                // console.log(acts);
                
                        
             } catch (e) {
               console.error("Error reading a document: ", e);
               const auth = getAuth();
               const db = getFirestore()
               const userUid = auth.currentUser.uid
               const docRef = await addDoc(collection(db, 'users', userUid, 'seoposition'), { });
              console.log("Document written with ID: ", docRef.id);
             }
        }
      
       

    
    useEffect(() => {
        getActs()
        // console.log('mounted')
    }, []);

return(
    <div className="position">
        <div className="wrapper">
            <div className="title">
                SEO - Позиции
            </div>
            <div className="general-block">
           

                    <div className="general-progects">
                        <div className="general-title">
                            Отчет по позициям:
                        </div> 

                        <Fancybox options={{ infinite: false }}>

                       
                               

                                    
                            {(acts.length > 0)  ?  acts.map((item, index )=>
                            (


                            <div className="inspection-acts" key={`${item.id}`}>
                            <button 
                            data-fancybox="gallery"
                            data-src={item.position }
                            className="order_btn"
                            >
                            Открыть документ
                            </button> 
                            </div> 

                            )) : `Документы не найдены.  `}   




                            </Fancybox>  
      
                    </div>
                    <div className="general-progects">
                        <div className="general-title">
                            Отчет по деньгам:
                        </div> 

                        <Fancybox options={{ infinite: false }}>

                       
                               

         
                                         {(acts.length > 0)  ?  acts.map((item, index )=>
                (


                        <div className="inspection-acts" key={`${item.id}`}>
                            <button 
                                data-fancybox="gallery"
                                data-src={item.money}
                                className="order_btn"
                                >
                               Открыть документ
                            </button> 
                        </div> 

                )) : `Документы не найдены.  `}   



                
                </Fancybox>

                      
      
                    </div>
                     

               
               
            </div>
        </div>

        <SeoSubmenu/>
        
       
        
    </div>
)
}
