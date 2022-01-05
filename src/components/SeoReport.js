import React, {useState} from 'react'
import SeoSubmenu from './SeoSubmenu'
import Fancybox from "./fancybox.js";
// import { Fancybox, Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";

import {
    getFirestore,
    collection,
    query,
    addDoc,
    doc,
    getDocs,
    where
   } from 'firebase/firestore';
    import { getAuth } from 'firebase/auth';

export default function SeoReport() {
    // const data = [
    //     { 
            
    //         data:'нет отчетов'
    
    //     }
    // ]
    const [report, setReport] = useState([])
    const [choseDomen, setChoseDomen] = useState('')

    const db = getFirestore()
    // const chatRef = collection(db, 'ticket')
    const auth = getAuth();
    const userUid = auth.currentUser.uid

    const getActs = async () => {
        try {
            const chatRef = collection(db, 'users', userUid, 'seoreport')
            // const chatRef = doc(db, 'users', userUid, 'seoreport', choseDomen)
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
                    time: doc.data().time,
                    domen: doc.data().domen,
                    
                   
                  
                  
                }
               
                tmp.push(msg)
             
            });
            setReport(tmp)
            // console.log(report);
           
                    
         } catch (e) {
           console.error("Error adding document: ", e);
         }
    }
    getActs()
    // console.log(choseDomen);
    const changeDomenName = (e) =>{
        setChoseDomen(e.target.value)
        // getChoseActs()

        console.log(choseDomen, report.domen );
    }
    // const getChoseActs = async () => {
    //     try {
    //         // const chatRef = collection(db, 'users', userUid, 'seoreport')
    //         const chatRef = doc(db, 'users', userUid, 'seoreport')
    //         const q = query(chatRef, where("domen", "==", choseDomen));
    //         // const q = query(chatRef);
    //         const querySnapshot = await getDocs(q);
    //         const tmp = []

    //         querySnapshot.forEach((doc) => {
    //             // const utc = doc.data().time
    //             // console.log(utc);
    //             // const local = moment(utc).local().format('YYYY-MM-DD')
    //             console.log(doc.data());
                
    //             const msg = {
    //                 id: doc.id,
    //                 title: doc.data().title,
    //                 url: doc.data().url,
    //                 time: doc.data().time,
                    
                   
                  
                  
    //             }
               
    //             tmp.push(msg)
             
    //         });
    //         setReport(tmp)
    //         // console.log(report);
           
                    
    //      } catch (e) {
    //        console.error("Error adding document: ", e);
    //      }
    // }

    return (
        <div className="report">
            <div className="wrapper">
                <div className="title">
                    SEO - Отчеты
                </div>
                <div className="subtitle">
                    Ежемесячные отчеты:
                </div>
                
                <div className="general-block">
                    <div className="general-progects">
                            <div className="general-progects_row">
                                <div className="">Выберите домен </div>
                                <select  value={choseDomen} onChange={changeDomenName}>
                                {(report.length > 0)  ?  report.map((item, index )=>
                                    (
                                        <option value={item.domen}  key={`${item.id}`}> {item.domen}</option>
                                            

                                    )) : `  `}  
                                   
                                   
                                   
                                </select>
                            </div>
                           
                         
                            <div className="general-block_info">
                            В данном разделе Вы можете загрузить ежемесячные отчеты по своим сайтам за последние 12 месяцев начиная с апреля 2012 года
                            </div>
                        
                            <Fancybox options={{ infinite: false }}>

                       


                                
                                {(report.length > 0)  ?  report.map((item, index )=>
                                    (    (choseDomen == item.domen ) ? (
                                            <div className="inspection-acts" key={`${item.id}`}>
                                                <button 
                                                    data-fancybox="gallery"
                                                    data-src={item.url}
                                                    className="order_btn"
                                                    >
                                                    {item.title}
                                                </button> 
                                            </div> ) : ''

                                    )) : ` нет отчетов`}   
                                    

                                
                                
                                </Fancybox>


                    </div>
                
                </div>
            </div>

            <SeoSubmenu/>
        
       
        
    </div>
    )
}
