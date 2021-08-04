import React from 'react'
import SeoSubmenu from './SeoSubmenu'

export default function SeoReport() {
    const data = [
        { 
            
            data:'нет отчетов'
    
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
                            <div className="general-progects_row">
                                <div className="">Выберите домен </div>
                                <select defaultValue={'DEFAULT'}>
                                    <option value="value1"  >demo-test.ru</option>
                                    <option  value="DEFAULT" >demo-test.ru2</option>
                                    <option value="value3">demo-test.ru3</option>
                                </select>
                            </div>
                           
                         
                            <div className="general-block_info">
                            В данном разделе Вы можете загрузить ежемесячные отчеты по своим сайтам за последние 12 месяцев начиная с апреля 2012 года
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
