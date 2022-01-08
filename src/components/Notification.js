import React, { useState, useEffect} from 'react'
import NotificationItem from './NotificationItem'
import { orderBy,   getFirestore,  getDocs, collection, query, onSnapshot } from 'firebase/firestore';
import moment from 'moment';
export default function Notification() {

//     let dataNotif = [ 
//         {
//             id: 1,
//             title: "Укрепление и развитие",
//             text: "Внутренней структуры повышению качества условий активизации. Каждый из нас понимает очевидную вещь.",
//             sign: true

//     },
//         {
//             id: 2,
//             title: "Укрепление и развитие 2",
//             text: "Внутренней структуры повышению качества условий активизации. Каждый из нас понимает очевидную вещь. 2",
//             sign: true

//     },
//         {
//             id: 3,
//             title: "Укрепление и развитие 3",
//             text: "Внутренней структуры повышению качества условий активизации. Каждый из нас понимает очевидную вещь. 3",
//             sign: false

//     },

// ]
 

    const [newNtf, setNewNtf] = useState([])
    const tmp = []

    // const getDocs1Firebase = async () => {
    
    

    // const q = query(collection(db, "alert"));

    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((alert) => {
     
    //     let alert1 = {
    //         text: alert.data().text,
    //         title: alert.data().title,
    //         sign: alert.data().sign,
        
    //     }
    //   tmp.push(alert1)
    // console.log(alert1);
     
    // });
  
    // // this.setState({docList0: tmp })
    // // console.log(this.state.docList0, "fff");
    // // return tmp
    // }


       

    
    //     useEffect(() => { 
         

    //   })

    
   const getDocs1Firebase = async () => {
    try{
        const db = getFirestore()
        const chatRef = collection(db, 'alert')
        // const q = query(chatRef, orderBy("timestamp", "asc"));
        const q = query(chatRef);
        const querySnapshot = await getDocs(q);
        
        querySnapshot.forEach((doc) => {
            const utc = doc.data().timestamp
            const local = moment(utc).local().format('YYYY-MM-DD HH:mm:ss')
            
            
            const msg = {
                id: doc.id,
                text: doc.data().text,
                title: doc.data().title,
                sign: doc.data().sign,
                timestamp: local,
              
              
            }
           
            tmp.push(msg)
         
        });
        setNewNtf(tmp)

    } catch (e) {
        

      
        console.error("Error adding document: ", e);


    }
       
    }
    useEffect(() => {
        getDocs1Firebase()
    }, []);
    






    //   const unsub = onSnapshot(q, (snapshot) => {
         
    //     snapshot.forEach(doc => {
    //       const utc = doc.data().timestamp
    //       const local = moment(utc).local().format('YYYY-MM-DD HH:mm:ss')
          
          
    //       const msg = {
    //           id: doc.id,
    //           text: doc.data().text,
    //           title: doc.data().title,
    //           sign: doc.data().sign,
    //           timestamp: local,
            
            
    //       }
    //       tmp.push(msg)
    //     })
    //     setNewNtf(tmp)
      
    //   });
    return (
        <div className="notification">
        <div className="title">
             Оповещения 
        </div>
        <div className="notification-block">

            {newNtf.map((item, index )=>
                                            (   
                        <NotificationItem title={item.title} text={item.text}  sign={item.sign} key={item.id}/>
                    
                    ))}
            
        </div>
       

       
    </div>
    )
}
