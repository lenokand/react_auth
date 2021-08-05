import React from 'react'
import SeoSubmenu from './SeoSubmenu'
import img from '../img/servece_img.png'
import { Link } from 'react-router-dom'

export default function SeoServices() {
 
    const data = [
        { 
            id: 1,
            img: img,
            title:'Дополнительные регионы продвижения',
            text: 'Дополнительные регионы продвижения — услуга, направленная на привлечение дополнительных целевых посетителей за счет продвижения в поисковой выдаче Вашего сайта в соответствующих регионах.             Особенно актуально при необходимости привлечения большего количества посетителей; при открытии новых офисов и филиалов; при расширении географии деятельности.',
            link: '#'
    
        },
        { 
            id: 2,
            img: img,
            title:'2 Дополнительные регионы продвижения',
            text: '2 Дополнительные регионы продвижения — услуга, направленная на привлечение дополнительных целевых посетителей за счет продвижения в поисковой выдаче Вашего сайта в соответствующих регионах.             Особенно актуально при необходимости привлечения большего количества посетителей; при открытии новых офисов и филиалов; при расширении географии деятельности.',
            link: '#'
    
        },
    ]
    return (
        <div className="services">
            <div className="wrapper">
                <div className="title">
                    SEO - Услуги
                </div>
                
                
                <div className="services-block">

                    {data.map((item, index )=>
                            (
                                    <div className="services-block_item" key={`${item.id}`}>
                                            <img src={item.img} alt="img"/>

                                            <div className="services-block_right">
                                                <div className="services-block_right">
                                                    <div className="services-block_title">
                                                        {item.title}
                                                    </div>
                                                    <div className="services-block_info">
                                                        {item.text}
                                                    </div>
                                                </div>
                                                
                                                <div className="services-block_action">
                                                    <Link to={`${item.link}`}  className="learnmore"> Узнать больше </Link>
                                                    <button className="order_btn">Заказать</button>
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
