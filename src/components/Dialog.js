import React from 'react'
import avatar1 from '../img/avatar1.png'; 

export default function Dialog() {
    return (
        <div className="dialog">
            <div className="title">
                Диалог с технической поддержкой
            </div>
            <div className="subtitle">
                Ваши диалоги:
            </div>
            <div className="dialog-block">
                <div className="left-block">
                    <div className="dialog-row autor">
                        
                            <img src={avatar1}  className="dialog-avatar"/>
                        
                            <div className="autor-name"> Виктор Мишустин</div>
                                
                        
                        
                    
                    </div>
                    <div className="dialog-row">
                        
                            <img src={avatar1}  className="dialog-avatar"/>
                            <div className="dialog-preveiw">
                                <div className="diallog-oponent"> Виктор Мишустин</div>
                                <div className="last-message"> Ну ладно, спасибо</div>
                            </div>
                            <div className="dialog-info">
                                <div className="diallog-time"> 9:35</div>
                                <div className="diallog-status"> 4</div>
                            </div>
                    
                    </div>


                </div>

                <div className="right-block">



                </div>


            </div>
            




        </div>
    )
}
