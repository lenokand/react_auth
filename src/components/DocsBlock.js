import React, { Component } from 'react'
import DocsItem from './DocsItem'
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
            docsList: [
                {
                    id: 1,
                    name:'Имя документа №2',
                    number: 'Номер документа',
                    date: 'Дата документа',
                    link:'/#',
                    show: false
    
                },
                {   id: 2,
                    name:'Имя документа №3',
                    number: 'Номер документа',
                    date: 'Дата документа',
                    link:'/#',
                    show: false
                },
            ],
            docsList2: [
                {
                    id: 3,
                    name:'Имя документа №4',
                    number: 'Номер документа',
                    date: 'Дата документа',
                    link:'/#',
                    show: false
    
                },
                {   id: 4,
                    name:'Имя документа №5',
                    number: 'Номер документа',
                    date: 'Дата документа',
                    link:'/#',
                    show: false
                },
            ]
    
        }
        // this.handleShow = this.handleShow.bind(this)
        // this.handleShow2 = this.handleShow2.bind(this)
        this.handleShowBlock = this.handleShowBlock.bind(this)
        
    }

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

                        {this.state.docsList.map((item, index )=>
                                        (   
                                    <DocsItem item={item} showModal={this.state.showModal} id={item.id} name={item.name} number={item.number} date={item.date} link={item.link}  show={item.show} handleShow={this.handleShowBlock} key={item.id} triple={triple} />

                                    ))}

                       

                    </div>
                    <div className="block-item">
                        <div className="item-title">
                            Категория документов №2
                        </div>

                        {this.state.docsList2.map((item, index )=>
                                        (   
                                    <DocsItem item={item} showModal={this.state.showModal} id={item.id}  name={item.name} number={item.number} date={item.date} link={item.link}  show={item.show} handleShow={this.handleShowBlock} key={item.id} triple={triple} />

                                    ))}
                    </div>


                </div>
        )
    }
}
