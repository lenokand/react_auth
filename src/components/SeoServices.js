import React, {useState, useEffect} from 'react'
import SeoSubmenu from './SeoSubmenu'
// import img from '../img/servece_img.png'
// import { Link } from 'react-router-dom'
import { getFirestore,  getDocs, collection, query } from 'firebase/firestore';
import CallbackForm from './CallbackForm';

export default function SeoServices() {
 
    // const data = [
    //     { 
    //         id: 1,
    //         img: img,
    //         title:'Дополнительные регионы продвижения',
    //         text: 'Дополнительные регионы продвижения — услуга, направленная на привлечение дополнительных целевых посетителей за счет продвижения в поисковой выдаче Вашего сайта в соответствующих регионах.             Особенно актуально при необходимости привлечения большего количества посетителей; при открытии новых офисов и филиалов; при расширении географии деятельности.',
    //         link: '#'
    
    //     },
    //     { 
    //         id: 2,
    //         img: img,
    //         title:'2 Дополнительные регионы продвижения',
    //         text: '2 Дополнительные регионы продвижения — услуга, направленная на привлечение дополнительных целевых посетителей за счет продвижения в поисковой выдаче Вашего сайта в соответствующих регионах.             Особенно актуально при необходимости привлечения большего количества посетителей; при открытии новых офисов и филиалов; при расширении географии деятельности.',
    //         link: '#'
    
    //     },
    // ]

 

    
    const [newNews, setNewNews] = useState([])
    const [newShow, setNewShow] = useState('0')
    const [showModal, setshowModal] = useState(false)

   

    const getNewsFirebase = async () => {
       try{
        const db = getFirestore()
        const tmp = []
        const chatRef = collection(db, 'important')
        const q = query(chatRef);
        const querySnapshot = await getDocs(q);
        
        querySnapshot.forEach((doc) => {
            const utc = doc.data().time
         
            
            
            const msg = {
                id: doc.id,
                text: doc.data().text,
                fulltext: doc.data().fulltext,
                title: doc.data().title,
                img: doc.data().img,
                link: doc.data().link,
                // time: local,
               
              
              
            }
           
            tmp.push(msg)
         
        });
        setNewNews(tmp)

        } catch (e) {
            

          
            console.error("Error adding document: ", e);


        }
       
    }
    useEffect(() => {
        getNewsFirebase()
      }, []);
    
    // useEffect(()=>{
    //     getNewsFirebase()
        
    //     console.log(11);
    // })
    const handleShow = ( id) => {
        
        if (newShow == id) {
            setNewShow(0)
        }
        else{
            setNewShow(id)
        }
      
    }
   const  handleShowBlock = (e) => {
      
        
        setshowModal(!showModal)
     //    console.log();
     }

    return (
        <div className="services">
            <div className="wrapper">
                <div className="title">
                    SEO - Услуги
                </div>
                
                
                <div className="services-block">

                    {newNews.map((item, index )=>
                            (
                                    <div className="services-block_item" key={`${item.id}`}>
                                            <img src={item.img} alt="img"/>

                                            <div className="services-block_right">
                                                <div className="services-block_right">
                                                    <div className="services-block_title">
                                                        {item.title}
                                                    </div>
                                                    <div className="services-block_info"  style={{display: (newShow !== item.id) ? 'flex' : 'none'}}>
                                                        {item.text}
                                                    </div>
                                                    <div className="services-block_info services-block_full_info" style={{display: (newShow === item.id) ? 'flex' : 'none'}} >
                                                            {item.fulltext}
                                                    </div>
                                                </div>
                                                
                                                <div className="services-block_action">
                                                <button onClick={() =>handleShow(item.id)} className="learnmore">  Узнать больше </button>

                                                 
                                                    <button className="order_btn" onClick={handleShowBlock}>Заказать</button>
                                                </div>

                                            </div>
                                    </div> 
        
                            ))}   
                
                
                </div>
            </div>

            <SeoSubmenu/>
                        

            <CallbackForm showModal={showModal} handleShowBlock={handleShowBlock}/>
   
    
        </div>
    )
}
