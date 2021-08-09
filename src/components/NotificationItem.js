import React from 'react'

export default function NotificationItem(props) {
    return (
        <div className="notification-row">
            <div className="notification-row_title">
                {props.title}
            </div>
            <div className="notification-row_text">
                {props.text}
            </div>

            <div className="notification_sign" style=  {{ display: (props.sign) ? "block" : "none"}}>

            </div>
            
            
        </div>
    )
}
