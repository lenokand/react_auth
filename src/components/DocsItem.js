import React from 'react'

export default function DocsItem(props) {
    return (
        <div className="item-rows" >
            <div className="item-row">
                <div className='doc-item-col'>{props.name}</div> 
                <div className='doc-item-col'>{props.number}</div> 
                <div className='doc-item-col'>{props.date}  </div>
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
