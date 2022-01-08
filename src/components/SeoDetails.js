import React, {useState, useEffect}from 'react'
import SeoSubmenu from './SeoSubmenu'
import img from '../img/servece_img.png'
import { Link } from 'react-router-dom'

// import moment from 'moment';
import { 
    
       getFirestore,  getDocs, collection, query} from 'firebase/firestore';
export default function SeoDatails() {

    


    
    const [newNews, setNewNews] = useState([])
    const [newShow, setNewShow] = useState('0')

   

    const getNewsFirebase = async () => {
        try{
            const db = getFirestore()
            const tmp = []
            const chatRef = collection(db, 'important')
            const q = query(chatRef);
            const querySnapshot = await getDocs(q);
            
            querySnapshot.forEach((doc) => {
                // const utc = doc.data().time
                // console.log(utc);
                // const local = moment(utc).local().format('HH:mm:ss YYYY-MM-DD ')
                
                
                const msg = {
                    id: doc.id,
                    text: doc.data().text,
                    fulltext: doc.data().fulltext,
                    title: doc.data().title,
                    img: doc.data().img,
                    link: doc.data().link,
                    time: doc.data().time,
                             
                  
                }
               
                tmp.push(msg)
             
            });
            setNewNews(tmp)

        } catch (e) {
            

          
            console.error("Error adding document: ", e);


        }
      
    }
    // getNewsFirebase()
    useEffect(() => {
        getNewsFirebase()
        // console.log('mounted')
    }, []);
    
    const handleShow = ( id) => {
        
        // console.log(id);
       

        if (newShow == id) {
            setNewShow(0)
        }
        else{
            setNewShow(id)
        }
      
    }

    return (
        <div className="news">
            <div className="wrapper">
                <div className="title">
                SEO - Важно
                </div>
                
                
                <div className="services-block">

                  

                    {newNews.map((item, index )=>
                            (
                                    <div className="services-block_item" key={`${item.id}`}>
                                            <img src={item.img} alt="img"/>

                                            <div className="services-block_right">
                                                <div className="top-wrap">
                                                        <div className="services-block_title">
                                                            {item.title}
                                                        </div>
                                                        <div className="services-block_info" style={{display: (newShow !== item.id) ? 'flex' : 'none'}} >
                                                            {item.text}
                                                        </div>
                                                        <div className="services-block_info services-block_full_info" style={{display: (newShow === item.id) ? 'flex' : 'none'}} >
                                                            {item.fulltext}
                                                        </div>
                                                </div>
                                               
                                                <div className="services-block_action">
                                                <button onClick={() =>handleShow(item.id)} className="order_btn">  Читать </button>
                                                    <div className="time">{item.time}</div>
                                                  
                                                </div>

                                            </div>
                                    </div> 
        
                            ))}   
                
                
                </div>
            </div>

            <SeoSubmenu/>
    
   
    
        </div>
    )
}
