import React from 'react'
import SeoSubmenu from './SeoSubmenu'
import { ResponsiveContainer, AreaChart, Area, Tooltip, LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


export default function SeoIndex() {
    const data = [
        { 
            
            date: '01.07.2021', value: 400, pv: 2400, amt: 2400
    
        },
        { 
            
            date: '01.08.2021', value: 120, pv: 2400, amt: 2400
    
        },
        { 
                                        
            date: '01.09.2021', value: 320, pv: 2200, amt: 2400
    
        },
        
        { 
                                        
            date: '01.09.2021', value: 20, pv: 220, amt: 240
    
        },
        
        { 
                                        
            date: '01.10.2021', value: 50, pv: 220, amt: 240
    
        },
        { 
                                        
            date: '01.11.2021', value: 70, pv: 220, amt: 240
    
        },
    ]
    let thead = [
        {
            name: 'Период'
        },
        {
            name: 'Визиты'
        },
        {
            name: 'Просмотры'
        },
        {
            name: 'Посетители'
        },
        {
            name: 'Новые'
        },
        {
            name: 'Отказы'
        },
        {
            name: 'Глубина просмотра'
        },
        {
            name: 'Время на сайте'
        },
    ]
    let tr = [
        {
            name: 'Период',
            data1: 7661,
            data2: 7662,
            data3: 7663,
            data4: 7664,
            data5: 7665,
            data6: 7666,
            data7: 767

        },
        {
            name: 'Визиты',
            data1: 7661,
            data2: 7662,
            data3: 7663,
            data4: 7664,
            data5: 7665,
            data6: 7666,
            data7: 767

        },
        {
            name: 'Просмотры',
            data1: 7661,
            data2: 7662,
            data3: 7663,
            data4: 7664,
            data5: 7665,
            data6: 7666,
            data7: 767

        },
        {
            name: 'Посетители',
            data1: 7661,
            data2: 7662,
            data3: 7663,
            data4: 7664,
            data5: 7665,
            data6: 7666,
            data7: 767

        },
        {
            name: 'Новые',
            data1: 7661,
            data2: 7662,
            data3: 7663,
            data4: 7664,
            data5: 7665,
            data6: 7666,
            data7: 767

        },
        {
            name: 'Отказы',
            data1: 7661,
            data2: 7662,
            data3: 7663,
            data4: 7664,
            data5: 7665,
            data6: 7666,
            data7: 767

        },
        {
            name: 'Глубина просмотра',
            data1: 7661,
            data2: 7662,
            data3: 7663,
            data4: 7664,
            data5: 7665,
            data6: 7666,
            data7: 767

        },
        {
            name: 'Время на сайте',
            data1: 7661,
            data2: 7662,
            data3: 7663,
            data4: 7664,
            data5: 7665,
            data6: 7666,
            data7: 767

        },
    ]

    // function TableGenerate(row)  {
    //     return <td> {row.name} </td>
    //     // {row.map((td, index )=>
    //     //     (
    //     //            <td key={index}>
    //     //            {td}
    //     //            </td> 

    //     //    ))} 
        
    //     // <td>{row.name} {row.data1}</td>
        
    // }

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="my-tooltip">
              <p className="label">{`${label} `}</p>
              <p className="label">{` ${payload[0].value}`}</p>
         
            </div>
          );
        }
      
        return null;
      };

    
    
    const renderLineChart = (
        <ResponsiveContainer  width="100%" height={450}>
            
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FF5F46" stopOpacity={0.6}></stop>
                        <stop offset="75%" stopColor="#FF5F46" stopOpacity={0.1}></stop>

                    </linearGradient>
                </defs>
                <Area dataKey="value" stroke="#FF5F46" fill="url(#color)"/>

                <XAxis 
                  dataKey="date"
                  
                 axisLine={false} 
                 tickLine={false} 
                  />

                <YAxis 
                dataKey="value"
                 axisLine={false} 
                 tickLine={false} 
                 tickCount={5}
                 />

                <Tooltip content={<CustomTooltip />} />

                <CartesianGrid strokeDasharray="3 3"/>

            </AreaChart>

            
        </ResponsiveContainer>
        
      );
      

    return (
        <div className="index">
        <div className="wrapper">
            <div className="title">
                SEO - Показатели
            </div>

            <div className="subtitle">
                Данные из сервисов статистики
            
                <br/> Данные обновляются каждое первое число месяца. В текущем месяце можно посмотреть данные за предыдущий месяц и ранее.
               <br/> *Данные доступны с момента установки счетчикаю
            </div>
            

            <div className="index-block_title">
                Посещаемость - Яндекс Метрика
            </div>

           
            {renderLineChart}
          
          <table>
              <tr>
              {thead.map((item, index )=>
                         (
                                <th key={index}>
                                {item.name}
                                </th> 
      
                        ))} 
              </tr>
              {tr.map((row, index )=>
                         (
                                <tr key={index}>
                                {/* {TableGenerate(row)} */}

                                    <td>{row.name}</td>
                                    <td>{row.data1}</td>
                                    <td>{row.data2}</td>
                                    <td>{row.data3}</td>
                                    <td>{row.data4}</td>
                                    <td>{row.data5}</td>
                                    <td>{row.data6}</td>
                                    <td>{row.data7}</td>
                                   
                                   
                                </tr> 
      
                        ))} 

          </table>
         
            
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
