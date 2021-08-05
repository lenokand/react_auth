import React from 'react'
import SeoSubmenu from './SeoSubmenu'
import img from '../img/servece_img.png'
import { Link } from 'react-router-dom'

export default function SeoNews() {

    const data = [
        { 
            id: 1,
            img: img,
            title:'Изменились требования к размеру превью для видео',
            text: 'Видео — яркий визуальный контент, с ним ваш сайт будет привлекать больше внимания в поисковой выдаче. Чтобы ваши ролики отобразились в результатах поиска, они должны индексироваться Яндекс.Видео.О том, как улучшить поиск по вашим видеороликам, можно почитать здесь. После загрузки информации о ваших видеоматериалах, они вместе с заголовками, описаниями ... ',
            time: '03.11.2021',
            link: '#'
    
        },
        { 
            id: 3,
            img: img,
            title:'Не зменились требования к размеру превью для видео',
            text: 'Видео — яркий визуальный контент, с ним ваш сайт будет привлекать больше внимания в поисковой выдаче. Чтобы ваши ролики отобразились в результатах поиска, они должны индексироваться Яндекс.Видео.О том, как улучшить поиск по вашим видеороликам, можно почитать здесь. После загрузки информации о ваших видеоматериалах, они вместе с заголовками, описаниями ... ',
            time: '04.11.2021',
            link: '#'
    
        },
        { 
            id: 2,
            img: img,
            title:'2 Дополнительные регионы продвижения',
            text: '2 Дополнительные регионы продвижения — услуга, направленная на привлечение дополнительных целевых посетителей за счет продвижения в поисковой выдаче Вашего сайта в соответствующих регионах.             Особенно актуально при необходимости привлечения большего количества посетителей; при открытии новых офисов и филиалов; при расширении географии деятельности.',
            time: '06.11.2021',
            link: '#'
    
        },
    ]

    return (
        <div className="news">
            <div className="wrapper">
                <div className="title">
                    SEO - Новости
                </div>
                
                
                <div className="services-block">

                  

                    {data.map((item, index )=>
                            (
                                    <div className="services-block_item" key={`${item.id}`}>
                                            <img src={item.img} alt="img"/>

                                            <div className="services-block_right">
                                                <div className="top-wrap">
                                                        <div className="services-block_title">
                                                            {item.title}
                                                        </div>
                                                        <div className="services-block_info">
                                                            {item.text}
                                                        </div>
                                                </div>
                                               
                                                <div className="services-block_action">
                                                    <Link to={`${item.link}`}  className="order_btn">  Читать </Link>
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
