import React from 'react'

export default function Docs() {
    const triple = (
        <svg width="3" height="13" viewBox="0 0 3 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="1.5" cy="1.5" r="1.5" fill="#C4C4C4"/>
        <circle cx="1.5" cy="6.5" r="1.5" fill="#C4C4C4"/>
        <circle cx="1.5" cy="11.5" r="1.5" fill="#C4C4C4"/>
        </svg>

    )

    // let [visible, setVisible] = useState(false)
   

    // let openMenu = () => {
    //     setVisible(!visible)
    //     };


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
            {/* <div className="submenu"  style={{display: visible ? 'flex' : 'none'}}>Submenu</div> */}
            <div className="docs-block">
                <div className="block-item">
                    <div className="item-title">
                        Категория документов №1
                    </div>
                    <div className="item-rows">
                        <div className="item-row">
                            <div>Имя документа №1</div> 
                            <div>Номер документа</div> 
                            <div>Дата документа</div>
                            <buttom> {triple} </buttom>
                            
                        </div>
                    </div>

                </div>
                
            </div>

        </div>
    )
}
