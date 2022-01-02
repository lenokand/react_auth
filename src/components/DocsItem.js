import React from 'react'

export default function DocsItem(props) {
    return (
        <div className="item-rows" >
            <div className="item-row">
                <div>{props.name}</div> 
                <div>{props.number}</div> 
                <div>{props.date}  </div>
                {/* <button onClick={() => props.handleShow(props.id)}> {props.triple} </button> */}
                <button onClick={() => props.handleShow(props.id)}> {props.triple} </button>

                    {/* <div className="settings" style={{display: (props.show) ? 'flex' : 'none'}}> */}
                    <div className="settings" style={{display: (props.showModal === props.id) ? 'flex' : 'none'}}>
                        <a className='settings_item' href={props.link} target="_blank">
                           Посмотреть
                           
                        </a>
                        <a className='settings_item' href="#" download={props.link}>
                       
                            Скачать
                        </a>
                        <a className='settings_item' href="props.link" >
                        Отправить 
                            
                        </a>
                    </div>

            </div>
     </div>

    )
}
