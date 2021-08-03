import React from 'react'
import SeoSubmenu from './SeoSubmenu'

export default function SeoReport() {
    const data = [
        { 
            
            data:'data from backend'
    
        }
    ]
    return (
        <div className="report">
            <div className="wrapper">
                <div className="title">
                    SEO - Отчеты
                </div>
                <div className="subtitle">
                    Ежемесячные отчеты:
                </div>
                
                <div className="general-block">
                    <div className="general-progects">
                        
                            {data.map((item, index )=>
                            (
                                    <div className="general-body">
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
