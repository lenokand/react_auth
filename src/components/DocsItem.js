import React from 'react'

export default function DocsItem(props) {
    return (
        <div className="item-rows" >
            <div className="item-row">
                <div>{props.name}</div> 
                <div>{props.number}</div> 
                <div>{props.date}  </div>
                <button onClick={() => props.handleShow(props.id)}> {props.triple} </button>

                    <div className="settings" style={{display: (props.show) ? 'flex' : 'none'}}>
                        <div>
                            <a href="props.link">Посмотреть</a>
                            
                        </div>
                        <div>
                        <a href="props.link">
                            Скачать</a>
                        </div>
                        <div>
                        <a href="props.link">Отправить </a>
                            
                        </div>
                    </div>

            </div>
     </div>

    )
}
