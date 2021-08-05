import React, {useState} from 'react'
import DocsBlock from './DocsBlock'

export default function Docs() {
    const triple = (
        <svg width="3" height="13" viewBox="0 0 3 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="1.5" cy="1.5" r="1.5" fill="#C4C4C4"/>
        <circle cx="1.5" cy="6.5" r="1.5" fill="#C4C4C4"/>
        <circle cx="1.5" cy="11.5" r="1.5" fill="#C4C4C4"/>
        </svg>

    )

       
       

    return (
        <div className="docs">
            <div className="title">
                Документация 
            </div>
            <div className="subtitle">
                Мы рады нашему сотрудничеству, поэтому разработали Программу Привилегий для наших постоянных Клиентов.
               <br/> Сотрудничая с Demis Group, Вы получаете подарки, бонусы и скидки; и чем выше Ваш статус — тем больше возможностей
                Вы получаете.
            </div> 
            <DocsBlock/>  

           
        </div>
    )
}
