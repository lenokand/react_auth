import React from 'react'
import SeoSubmenu from './SeoSubmenu'

export default function SeoServices() {
    const data = [
        { 
            
            data:'data from backend'
    
        }
    ]
    return (
        <div className="services">
            <div className="wrapper">
                <div className="title">
                    SEO - Услуги
                </div>
                
                
                <div className="services-block">
                    {data.map((item, index )=>
                            (
                                    <div className="services-block_item">
                                    {item.data}
                                    </div> 
        
                            ))}   
                
                
                </div>
            </div>

            <SeoSubmenu/>
    
   
    
        </div>
    )
}
