import React from 'react'
import SeoSubmenu from './SeoSubmenu'


export default function SeoIndex() {
    const data = [
        { 
            
            data:'data from backend'
    
        }
    ]
    return (
        <div className="index">
        <div className="wrapper">
            <div className="title">
                SEO - Показатели
            </div>
            
            <div className="general-block">
                <div className="general-progects">
                     
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
