import React, { Component } from 'react'
import DocsItem from './DocsItem'
import {    getFirestore,  getDocs, collection, query } from 'firebase/firestore';
const triple = (
    <svg width="3" height="13" viewBox="0 0 3 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="1.5" cy="1.5" r="1.5" fill="#C4C4C4"/>
    <circle cx="1.5" cy="6.5" r="1.5" fill="#C4C4C4"/>
    <circle cx="1.5" cy="11.5" r="1.5" fill="#C4C4C4"/>
    </svg>

)

export default class DocsBlock extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
            showModal: 0,
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
            // ],
            // docsList2: [
            //     {
            //         id: 3,
            //         name:'-----',
            //         number: '-----',
            //         date: '-------',
            //         link:'/#',
            //         show: false
    
            //     },
            //     {   id: 4,
            //         name:'-----',
            //         number: '-----',
            //         date: '-------',
            //         link:'/#',
            //         show: false
            //     },
            // ],
            docList0: [],
            docList02: []
    
        }
        // this.handleShow = this.handleShow.bind(this)
        // this.handleShow2 = this.handleShow2.bind(this)
        this.handleShowBlock = this.handleShowBlock.bind(this)
        this.getDocs1Firebase = this.getDocs1Firebase.bind(this)
        this.getDocs1Firebase2 = this.getDocs1Firebase2.bind(this)
        
    }

     componentDidMount(){
    
      this.getDocs1Firebase()
      this.getDocs1Firebase2()
     
    }
    //    this.getDocsFirebase()

    //   const db = getFirestore()

    //   const querySnapshot =  getDocs(collection(db, 'docs')).then(querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
    //   })      
    //   );
    // getDocsFirebase =  () => {
    //     const q = query(collection(db, "docs"));
    //     const db = getFirestore()
    //     const tmp = []
    //     const unsub = onSnapshot(q, (snapshot) => {
       
    //     snapshot.forEach(doc => {
                   
    //         let doc1 = {
    //                     id: doc.data().id,
    //                     name: doc.data().name,
    //                     number: doc.data().number,
    //                     date: doc.data().date,
    //                     link: doc.data().url,
    //                     show: false
    //                 }
    //       tmp.push(doc1)
    //     })
    //     console.log(tmp, 22);
    //     });
    //     // console.log(tmp, 22);
    //     this.setState({docList0: tmp })
    //     console.log(this.state.docList0, "fff");
    //     // return tmp
    // }


     getDocs1Firebase = async () => {
        const tmp = []
        const db = getFirestore()

        const q = query(collection(db, "docs"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
         
            let doc1 = {
                id: doc.data().id,
                name: doc.data().name,
                number: doc.data().number,
                date: doc.data().date,
                link: doc.data().url,
                show: false
            }
          tmp.push(doc1)
        // console.log(doc1);
         
        });
        // console.log(tmp, 22);
        this.setState({docList0: tmp })
        // console.log(this.state.docList0, "fff");
        // return tmp
    }
    getDocs1Firebase2 = async () => {
        const tmp2 = []
        const db = getFirestore()

        const q = query(collection(db, "docs2"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
         
            let doc1 = {
                id: doc.data().id,
                name: doc.data().name,
                number: doc.data().number,
                date: doc.data().date,
                link: doc.data().url,
                show: false
            }
          tmp2.push(doc1)
        // console.log(doc1);
         
        });
        // console.log(tmp, 22);
        this.setState({docList02: tmp2 })
        // console.log(this.state.docList0, "fff");
        // return tmp
    }
    
    
    //     const docRef = collection(db, 'docs')

    //    const bbb = await getDoc(docRef).then(docSnap => {
    //                                 if (docSnap.exists()) {
                                                                        
    //                                     console.log(docSnap.data().name);          
                                        
    //                                 } else {
    //                                   console.log("No such document!");
    //                                 }
    //                               })

       
    // }
    // handleShow(id) {
    //     let tmp = this.state.docsList

    //     let foundIndex = tmp.findIndex((item, index) => item.id === id)
    //     tmp[foundIndex].show = !tmp[foundIndex].show
       
    //     this.setState({
    //         docsList: tmp,
    //     })
    // }
    // handleShow2(id) {
    //     console.log(this.state.docsList2)
    //     let tmp2 = this.state.docsList2

    //     let foundIndex = tmp2.findIndex((item, index) => item.id === id)
    //     tmp2[foundIndex].show = !tmp2[foundIndex].show
       
    //     this.setState({
    //         docsList2: tmp2,
    //     })
    // }
    handleShowBlock(id) {
        
       

        if (this.state.showModal == id) {
            this.setState({showModal : 0 })
        }
        else{
            this.setState({showModal : id})
        }
      
    }

    render() {
           
        return (
            <div className="docs-block">
                <div className="block-item">
                        <div className="item-title">
                            Категория документов №1
                        </div>
                        
                        { this.state.docList0.length > 0 && this.state.docList0.map((item, index )=>
                                        (   
                                    <DocsItem item={item} showModal={this.state.showModal} id={item.id} name={item.name} number={item.number} date={item.date} link={item.link}  show={item.show} handleShow={this.handleShowBlock} key={item.id} triple={triple} />

                                    )) 
                                    
                                    
                                    
                                    }

                       

                    </div>
                    <div className="block-item">
                        <div className="item-title">
                            Категория документов №2
                        </div>

                        {this.state.docList02.length > 0 && this.state.docList02.map((item, index )=>
                                        (   
                                    <DocsItem item={item} showModal={this.state.showModal} id={item.id}  name={item.name} number={item.number} date={item.date} link={item.link}  show={item.show} handleShow={this.handleShowBlock} key={item.id} triple={triple} />

                                    ))}
                    </div>


                </div>
        )
    }
}
