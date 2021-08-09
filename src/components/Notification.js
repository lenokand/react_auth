import React from 'react'
import NotificationItem from './NotificationItem'

export default function Notification() {

    let dataNotif = [ 
        {
            id: 1,
            title: "Укрепление и развитие",
            text: "Внутренней структуры повышению качества условий активизации. Каждый из нас понимает очевидную вещь.",
            sign: true

    },
        {
            id: 2,
            title: "Укрепление и развитие 2",
            text: "Внутренней структуры повышению качества условий активизации. Каждый из нас понимает очевидную вещь. 2",
            sign: true

    },
        {
            id: 3,
            title: "Укрепление и развитие 3",
            text: "Внутренней структуры повышению качества условий активизации. Каждый из нас понимает очевидную вещь. 3",
            sign: false

    },

]

    return (
        <div className="notification">
        <div className="title">
             Оповещения 
        </div>
        <div className="notification-block">

            {dataNotif.map((item, index )=>
                                            (   
                        <NotificationItem title={item.title} text={item.text}  sign={item.sign} key={item.id}/>
                    
                    ))}
            
        </div>
       

       
    </div>
    )
}
