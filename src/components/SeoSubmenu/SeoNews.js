import React, {useState, useEffect } from 'react'
import SeoSubmenu from '.././SeoSubmenu'
import img from '../../img/servece_img.png'
import { Link } from 'react-router-dom'
// import moment from 'moment';
import { orderBy,   getFirestore,  getDocs, collection, query, onSnapshot } from 'firebase/firestore';

export default function SeoNews() {

    // const data = [
    //     { 
    //         id: 1,
    //         img: img,
    //         title:'Изменились требования к размеру превью для видео',
    //         text: 'Видео — яркий визуальный контент, с ним ваш сайт будет привлекать больше внимания в поисковой выдаче. Чтобы ваши ролики отобразились в результатах поиска, они должны индексироваться Яндекс.Видео.О том, как улучшить поиск по вашим видеороликам, можно почитать здесь. После загрузки информации о ваших видеоматериалах, они вместе с заголовками, описаниями ... ',
    //         time: '03.11.2021',
    //         link: '#'
    
    //     },
    //     { 
    //         id: 3,
    //         img: img,
    //         title:'Не зменились требования к размеру превью для видео',
    //         text: 'Видео — яркий визуальный контент, с ним ваш сайт будет привлекать больше внимания в поисковой выдаче. Чтобы ваши ролики отобразились в результатах поиска, они должны индексироваться Яндекс.Видео.О том, как улучшить поиск по вашим видеороликам, можно почитать здесь. После загрузки информации о ваших видеоматериалах, они вместе с заголовками, описаниями ... ',
    //         time: '04.11.2021',
    //         link: '#'
    
    //     },
    //     { 
    //         id: 2,
    //         img: img,
    //         title:'2 Дополнительные регионы продвижения',
    //         text: '2 Дополнительные регионы продвижения — услуга, направленная на привлечение дополнительных целевых посетителей за счет продвижения в поисковой выдаче Вашего сайта в соответствующих регионах.             Особенно актуально при необходимости привлечения большего количества посетителей; при открытии новых офисов и филиалов; при расширении географии деятельности.',
    //         time: '06.11.2021',
    //         link: '#'
    
    //     },
    // ]
   

    
    const [newNews, setNewNews] = useState([])
    const [newShow, setNewShow] = useState('0')

   
  

    const getNewsFirebase = async () => {
       
        try{
            const db = getFirestore()
            const tmp = []
            const chatRef = collection(db, 'news')
            const q = query(chatRef);
          const querySnapshot = await getDocs(q);
          
          querySnapshot.forEach((doc) => {
              // const utc = doc.data().time
              // console.log(utc);
              // const local = moment(utc).local().format('YYYY-MM-DD')
              
              
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

        
        }  catch (e) {
            console.error("Error document: ", e);
          }
         
    }
    
        useEffect(() => {
            getNewsFirebase()
            // console.log('mounted')
        }, []);
   
    // useEffect(()=>{
    //     getNewsFirebase()
        
    //     console.log(11);
    // })
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
                    SEO - Новости
                </div>
                
                
                <div className="services-block">

                  

                    {newNews.map((item, index )=>
                            (
                                    <div className="services-block_item" key={`${item.id}`}>
                                        {item.img ? <img src={item.img} alt="img"/> : ""}
                                            

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
