import React from 'react'
import SeoSubmenu from './SeoSubmenu'

export default function SeoPosition() {
    const data = [
        { 
            
            data:'data from backend'
    
        }
    ]
return(
    <div className="position">
        <div className="wrapper">
            <div className="title">
                SEO - Позиции
            </div>
            
            <div className="general-block">
                    <div className="general-progects">
                        <div className="general-title">
                            Отчет по позициям:
                        </div> 

                        {data.map((item, index )=>
                         (
                                <div className="general-body" key={index}>
                                {item.data}
                                </div> 
      
                        ))}    
      
                    </div>
                    <div className="general-progects">
                        <div className="general-title">
                            Отчет по деньгам:
                        </div> 

                        {data.map((item, index )=>
                         (
                                <div className="general-body" key={index}>
                                {item.data}
                                </div> 
      
                        ))}    
      
                    </div>
                     

               
               
            </div>
        </div>

        <SeoSubmenu/>
        
       
        
    </div>
)
}
