import React from 'react'
import SeoSubmenu from './SeoSubmenu'

export default function SeoInspection() {
    const data = [
        { 
            
            data:'data from backend'
    
        }
    ]
    return (
        <div className="inspection">
        <div className="wrapper">
            <div className="title">
                 SEO - Инспекция
            </div>
            <div className="subtitle">
           <p>Уважаемые партнеры!</p> 

           <p> В данном разделе Вы можете ознакомиться с закрывающими документами за каждый период работы с Digitalrex.</p>

           <p>Закрывающие документы представлены такими первичными бухгалтерскими документами, как акт выполненных работ и счет-фактура за каждый период работы.</p> 

           <p>Мы надеемся, что функционал данного раздела сделает взаимодействие между нашими компаниями еще более комфортным для Вас и Вашей бухгалтерии.</p> 

           <p>Если Вы хотите провести сверку приходов и расходов, у Вас есть возможность заказать акт сверки. После Вашего запроса, в течение 1 дня мы предоставим Вам документы.</p> 
            </div>
            
            <div className="inspection-block">
               <form>
                   <div className="form-row">
                       <button type="submit" className="order_btn"> Заказать </button>
                       <div> за период: </div>
                       <select defaultValue={'DEFAULT'}>
                            <option value="За прошедшие 3 месяца">
                            За прошедшие 3 месяца
                           </option>
                           <option value="DEFAULT">
                            За прошедшие 6 месяцев
                           </option>
                       </select>
                   </div>

                   <div className="form-row">
                        Вывести закрывающие документы (акт выполненных работ и счет-фактура):
                   </div>

                   <select defaultValue={'DEFAULT'}>
                            <option value="Заказать акт сверки">
                            Заказать акт сверки
                           </option >
                           <option value="DEFAULT">
                            Счет фактура
                           </option>

                          
                    </select>
               </form>
               <div className="form-result">За выбранный период документов не найдено. </div>



               
            </div>
        </div>

        <SeoSubmenu/>
        
       
        
    </div>
    )
}
