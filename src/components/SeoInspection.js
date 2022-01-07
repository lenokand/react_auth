import React, {useState} from 'react'
import SeoSubmenu from './SeoSubmenu'
import moment from 'moment';
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

    export default function SeoInspection() {
    const data = [
        { 
            
            data:'data from backend'
    
        }
    ]
    const db = getFirestore()
    const chatRef = collection(db, 'ticket')

    const [formDate, setFormDate] = useState('')
    const [formType, setFormType] = useState('')
    const [acts, setActs] = useState([])
    const auth = getAuth();
    if (auth){
        
    }
    const userUid = auth.currentUser.uid


    const getActs = async () => {
        try {
            const chatRef = collection(db, 'users', userUid, 'seoinspection')
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
                    url: doc.data().url,
                    
                   
                  
                  
                }
               
                tmp.push(msg)
             
            });
            setActs(tmp)
            // console.log(acts);
           
                    
         } catch (e) {
           console.error("Error adding document: ", e);
         }
    }
    getActs()
    const sendMsg = async (e) => {
        e.preventDefault();
          // let bd_name = 'support1_' + user.uid
          // let bd_name = user.uid
          // const currentUser = []
          try {
            
            addDoc(chatRef, {
           // await addDoc(collection(db, 'support1_' + user.uid), {
             period: formDate,
             type: formType,
             uid: userUid,
             time:  moment.utc().valueOf()
           });
           console.log('sucsess')
           
                    
         } catch (e) {
           console.error("Error adding document: ", e);
         }
          
         setFormDate('')
         setFormType('')
         
        }


    return (
        <div className="inspection">
        <div className="wrapper">
            <div className="title">
                 SEO - Инспекция
            </div>
            <div className="subtitle">
           <p>Уважаемые партнеры!</p> 

           <p> В данном разделе Вы можете ознакомиться с закрывающими документами за каждый период работы с Digitalrex.</p>

           <p>Закрывающие документы представлены такими первичными бухгалтерскими документами, как акт выполненных работ и счет-фактура за каждый период работы.</p> 

           <p>Мы надеемся, что функционал данного раздела сделает взаимодействие между нашими компаниями еще более комфортным для Вас и Вашей бухгалтерии.</p> 

           <p>Если Вы хотите провести сверку приходов и расходов, у Вас есть возможность заказать акт сверки. После Вашего запроса, в течение 1 дня мы предоставим Вам документы.</p> 
            </div>
            
            <div className="inspection-block">
               <form onSubmit={sendMsg}>
                   <div className="form-row">
                       <button type="submit" className="order_btn"> Заказать </button>
                      
                       <div> за период: </div>
                       <select value={formDate}  onChange={(e) => setFormDate(e.target.value)}>
                            <option value="За прошедшие 3 месяца">
                            За прошедшие 3 месяца
                           </option>
                           <option value="За прошедшие 6 месяцев">
                            За прошедшие 6 месяцев
                           </option>
                       </select>
                   </div>

                   {/* <div className="form-row">
                        Вывести закрывающие документы (акт выполненных работ и счет-фактура):
                   </div> */}

                   <select value={formType}  onChange={(e) => setFormType(e.target.value)}>
                            <option value="Заказать акт сверки">
                            Заказать акт сверки
                           </option >
                           <option value="Заказать счет фактуру">
                           Заказать счет фактуру
                           </option>

                          
                    </select>
               </form>

               <div className="form-result">Ранее заказанные документы: </div>
               
               <Fancybox options={{ infinite: false }}>

                       


                        <p>
                        {(acts.length > 0)  ?  acts.map((item, index )=>
                            (
                                    <div className="inspection-acts" key={`${item.id}`}>
                                        <button 
                                            data-fancybox="gallery"
                                            data-src={item.url}
                                            className="order_btn"
                                            >
                                            {item.title}
                                        </button> 
                                    </div> 
        
                            )) : `За данный период документов не найдено. `}   
                            

                          
                        </p>
                        </Fancybox>
              



               
            </div>
        </div>

        <SeoSubmenu/>
        
       
        
    </div>
    )
}
