import React, { Component, useState, useEffect } from 'react'
import DocsItem from './DocsItem'
import {    getFirestore, getDoc, setDoc, getDocs, collection, query,    doc} from 'firebase/firestore';
const triple = (
    <svg width="3" height="13" viewBox="0 0 3 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="1.5" cy="1.5" r="1.5" fill="#C4C4C4"/>
    <circle cx="1.5" cy="6.5" r="1.5" fill="#C4C4C4"/>
    <circle cx="1.5" cy="11.5" r="1.5" fill="#C4C4C4"/>
    </svg>

)

export default function  DocsBlock() {
    const [showModal, setshowModal] = useState(0)
    // const docsList = [
    //         {
    //             id: 1,
    //             name:'Имя документа №1',
    //             number: 'Номер документа',
    //             date: 'Дата документа',
    //             link:'https://firebasestorage.googleapis.com/v0/b/seo-cabinet-next.appspot.com/o/docs%2Fprice_02.03.2020.pdf?alt=media&token=0c5eb6ea-8876-427a-8478-873906171e32',
    //             show: false
    
    //         },
    //         {   id: 2,
    //             name:'Имя документа №3',
    //             number: 'Номер документа',
    //             date: 'Дата документа',
    //             link:'https://firebasestorage.googleapis.com/v0/b/seo-cabinet-next.appspot.com/o/docs%2Fprice_opniipkd.pdf?alt=media&token=71e9d314-072c-4ed4-9848-2ecd02d4b3e7',
    //             show: false
    //         },
    //     ]
    // docsList: [
    //     {
    //         id: 1,
    //         name:'Имя документа №1',
    //         number: 'Номер документа',
    //         date: 'Дата документа',
    //         link:'https://firebasestorage.googleapis.com/v0/b/seo-cabinet-next.appspot.com/o/docs%2Fprice_02.03.2020.pdf?alt=media&token=0c5eb6ea-8876-427a-8478-873906171e32',
    //         show: false

    //     },
    //     {   id: 2,
    //         name:'Имя документа №3',
    //         number: 'Номер документа',
    //         date: 'Дата документа',
    //         link:'https://firebasestorage.googleapis.com/v0/b/seo-cabinet-next.appspot.com/o/docs%2Fprice_opniipkd.pdf?alt=media&token=71e9d314-072c-4ed4-9848-2ecd02d4b3e7',
    //         show: false
    //     },
    // ]

    const docsList2 = [
        {
            id: 3,
            name:'-----',
            number: '-----',
            date: '-------',
            link:'/#',
            show: false

        },
        {   id: 4,
            name:'-----',
            number: '-----',
            date: '-------',
            link:'/#',
            show: false
        },
    ]

    // constructor(props) {
    //     super(props)
    //     this.state = {
            
    //         showModal: 0,
            
    
    //     }
    //     // this.handleShow = this.handleShow.bind(this)
    //     // this.handleShow2 = this.handleShow2.bind(this)
    //     // this.handleShowBlock = this.handleShowBlock.bind(this)
    //     // this.getDocsFirebase = this.getDocsFirebase.bind(this)
        
    // }
    let docList = []
    useEffect(() => { 

        let getDocsFirebase = async () => {
            const tmp = []
            const db = getFirestore()
    
            const q = query(collection(db, "docs"));
    
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
            //   console.log(doc.id, " => ", doc.data());
                let doc1 = {
                    id: doc.data().id,
                    name: doc.data().name,
                    number: doc.data().number,
                    date: doc.data().date,
                    link: doc.data().url,
                    show: false
                }
              tmp.push(doc1)
    
            });
            docList = tmp    
            console.log(docList, 1);  
        }
        getDocsFirebase()




    })
    
    
    
    const handleShowBlock = (id) => {
        
       

        if (showModal == id) {
            setshowModal(0)
        }
        else{
            setshowModal(id)
            
        }
      
    }
   
     return (
            <div className="docs-block">
                <div className="block-item">
                        <div className="item-title">
                            Категория документов №1
                        </div>
                       

                        {
                        (docList.length > 0) && docList.forEach((item, index ) =>
                                        (   
                                         
                                    <DocsItem item={item} showModal={showModal} id={item.id} name={item.name} number={item.number} date={item.date} link={item.link}  show={item.show} handleShow={handleShowBlock} key={item.id} triple={triple} />

                                    )) 
                                
                                }

                       

                    </div>
                    <div className="block-item">
                        <div className="item-title">
                            Категория документов №2
                        </div>

                        {docsList2.map((item, index )=>
                                        (   
                                    <DocsItem item={item} showModal={showModal} id={item.id}  name={item.name} number={item.number} date={item.date} link={item.link}  show={item.show} handleShow={handleShowBlock} key={item.id} triple={triple} />

                                    ))}
                    </div>


            </div>
        )
    
}
