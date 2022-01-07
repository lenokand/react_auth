import React, {useState} from 'react'
import SeoSubmenu from './SeoSubmenu'
import { ResponsiveContainer, AreaChart, Area, Tooltip, LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import Fancybox from "./fancybox.js";
// import { Fancybox, Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";

import {
    getFirestore,
    collection,
    query,
    addDoc,
    doc,
    getDocs,
    where
   } from 'firebase/firestore';
    import { getAuth } from 'firebase/auth';

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
    // let thead = [
    //     {
    //         name: 'Период'
    //     },
    //     {
    //         name: 'Визиты'
    //     },
    //     {
    //         name: 'Просмотры'
    //     },
    //     {
    //         name: 'Посетители'
    //     },
    //     {
    //         name: 'Новые'
    //     },
    //     {
    //         name: 'Отказы'
    //     },
    //     {
    //         name: 'Глубина просмотра'
    //     },
    //     {
    //         name: 'Время на сайте'
    //     },
    // ]
    // let tr = [
    //     {
    //         name: 'янв 2021',
    //         data1: 7661,
    //         data2: 7662,
    //         data3: 7663,
    //         data4: 7664,
    //         data5: 7665,
    //         data6: 7666,
    //         data7: 767

    //     },
    //     {
    //         name: 'фев 2021',
    //         data1: 7661,
    //         data2: 7662,
    //         data3: 7663,
    //         data4: 7664,
    //         data5: 7665,
    //         data6: 7666,
    //         data7: 767

    //     },
    //     {
    //         name: 'мар 2021',
    //         data1: 7661,
    //         data2: 7662,
    //         data3: 7663,
    //         data4: 7664,
    //         data5: 7665,
    //         data6: 7666,
    //         data7: 767

    //     },
    //     {
    //         name: 'апр 2021',
    //         data1: 7661,
    //         data2: 7662,
    //         data3: 7663,
    //         data4: 7664,
    //         data5: 7665,
    //         data6: 7666,
    //         data7: 767

    //     },
    //     {
    //         name: 'май 2021',
    //         data1: 7661,
    //         data2: 7662,
    //         data3: 7663,
    //         data4: 7664,
    //         data5: 7665,
    //         data6: 7666,
    //         data7: 767

    //     },
    //     {
    //         name: 'июнь 2021',
    //         data1: 7661,
    //         data2: 7662,
    //         data3: 7663,
    //         data4: 7664,
    //         data5: 7665,
    //         data6: 7666,
    //         data7: 767

    //     },
    //     {
    //         name: 'июль 2021 ',
    //         data1: 7661,
    //         data2: 7662,
    //         data3: 7663,
    //         data4: 7664,
    //         data5: 7665,
    //         data6: 7666,
    //         data7: 767

    //     },
    //     {
    //         name: 'авг 2021',
    //         data1: 7661,
    //         data2: 7662,
    //         data3: 7663,
    //         data4: 7664,
    //         data5: 7665,
    //         data6: 7666,
    //         data7: 767

    //     },
    // ]


    const [report, setReport] = useState([])
    const [grafic, setGrafic] = useState([])
    // const [choseDomen, setChoseDomen] = useState('')

    const db = getFirestore()
    // const chatRef = collection(db, 'ticket')
    const auth = getAuth();
    if (auth){ 
        const userUid = auth.currentUser.uid
        const getActs = async () => {
            try {
                const chatRef = collection(db, 'users', userUid, 'seoindex')
                const graficRef = collection(db, 'users', userUid, 'seoindex')
                // const chatRef = doc(db, 'users', userUid, 'seoreport', choseDomen)
                const q = query(chatRef);
                const querySnapshot = await getDocs(q);
                let tmp = []
                let tmpgrafic = []
                let tempstring = []
                let graficstring = []
                querySnapshot.forEach((doc) => {
                    // const utc = doc.data().time
                    // console.log(utc);
                    // const local = moment(utc).local().format('YYYY-MM-DD')
                   
                    tempstring = doc.data().data
                    graficstring = doc.data().grafic
                    
                   
                   
                   
                 
                });
                // console.log(tempstring);
                tmp = JSON.parse(tempstring)
                tmpgrafic = JSON.parse(graficstring)
                // tmp = tempstring
    
    
                setReport(tmp)
                setGrafic(tmpgrafic)
                // console.log(tmp[0]);
               
                        
             } catch (e) {
               console.error("Error getting document: ", e);
             }
        }
        getActs()
    
    }

    


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
            
            <AreaChart data={grafic}>
                <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FF5F46" stopOpacity={0.6}></stop>
                        <stop offset="75%" stopColor="#FF5F46" stopOpacity={0.1}></stop>

                    </linearGradient>
                </defs>
                <Area dataKey="col2" stroke="#FF5F46" fill="url(#color)"/>

                <XAxis 
                  dataKey="col1"
                  
                 axisLine={false} 
                 tickLine={false} 
                  />

                <YAxis 
                dataKey="col3"
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

           
            {grafic.length >0 && renderLineChart}
          <div className='table-block'>
            
          <table>
          <tbody>

              {/* <tr>
              {thead.map((item, index )=>
                         (
                                <th key={index}>
                                {item.name}
                                </th> 
      
                        ))} 
              </tr> */}
              {report.length > 0 && report.map((row, index )=>
                         (


                                <tr key={index}>
                                    

                                    <td>{row.col1}</td>
                                    <td>{row.col2}</td>
                                    <td>{row.col3}</td>
                                    <td>{row.col4}</td>
                                    <td>{row.col5}</td>
                                    <td>{row.col6}</td>
                                    <td>{row.col7}</td>
                                    
                                   
                                   
                                </tr> 
      
                        ))} 
 </tbody>
          </table>
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
