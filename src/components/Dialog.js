import React, { Component } from 'react'
// import ChatForm from './ChatForm';
import UserInfo from './UserInfo';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
  import moment from 'moment';

import avatar1 from '../img/avatar1.png'; 
import DialogForm from './DialogForm';
// import { getFirestore, collection, getDocs, addDoc, firestore, Timestamp, serverTimestamp } from 'firebase/firestore';                
// import { initializeApp } from 'firebase/app';
// import { getDatabase } from "firebase/database";

// import { getAuth } from "firebase/auth";
// import { Firestore, getFirestore } from '@firebase/firestore/dist/lite';
import ScrollToBottom, { useScrollToBottom, useSticky } from 'react-scroll-to-bottom'
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    firestore,
    Timestamp,
    onSnapshot} from 'firebase/firestore';
const staple = (<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.1586 7.17985C17.0177 7.03903 16.8267 6.95992 16.6275 6.95992C16.4283 6.95992 16.2373 7.03903 16.0964 7.17985L7.91462 15.3969C7.56586 15.7457 7.15181 16.0224 6.69612 16.2112C6.24042 16.4 5.752 16.4972 5.25874 16.4972C4.26256 16.4973 3.30716 16.1017 2.60271 15.3973C1.89825 14.6929 1.50245 13.7376 1.50238 12.7414C1.50231 11.7452 1.89798 10.7898 2.60233 10.0854L10.5264 2.12897C10.9502 1.71199 11.5215 1.47933 12.116 1.48168C12.7105 1.48403 13.28 1.7212 13.7004 2.14152C14.1208 2.56183 14.3581 3.13125 14.3606 3.72574C14.3631 4.32023 14.1306 4.89161 13.7137 5.31544L5.78956 13.2719C5.64664 13.4088 5.45638 13.4852 5.25848 13.4852C5.06057 13.4852 4.87031 13.4088 4.7274 13.2719C4.58657 13.131 4.50746 12.94 4.50746 12.7408C4.50746 12.5416 4.58657 12.3506 4.7274 12.2097L11.7824 5.12239C11.9192 4.98072 11.995 4.79097 11.9932 4.59401C11.9915 4.39706 11.9125 4.20865 11.7733 4.06938C11.634 3.93011 11.4456 3.85111 11.2486 3.8494C11.0517 3.84768 10.8619 3.9234 10.7203 4.06023L3.66524 11.1475C3.45594 11.3568 3.28991 11.6052 3.17664 11.8787C3.06337 12.1521 3.00506 12.4452 3.00506 12.7412C3.00506 13.0371 3.06337 13.3302 3.17664 13.6036C3.28991 13.8771 3.45594 14.1255 3.66524 14.3348C4.09462 14.7445 4.66533 14.9731 5.25885 14.9731C5.85237 14.9731 6.42308 14.7445 6.85246 14.3348L14.7758 6.3776C15.4654 5.67022 15.8485 4.71965 15.8422 3.7318C15.8359 2.74395 15.4406 1.79836 14.742 1.09988C14.0434 0.401397 13.0978 0.00626345 12.1099 7.38232e-05C11.1221 -0.00611581 10.1716 0.377137 9.46429 1.06681L1.54017 9.02322C0.554016 10.0094 -1.46949e-08 11.3469 0 12.7415C1.46949e-08 14.1362 0.554016 15.4737 1.54017 16.4598C2.52633 17.446 3.86384 18 5.25848 18C6.65311 18 7.99062 17.446 8.97678 16.4598L17.1586 8.24501C17.2287 8.17521 17.2844 8.09222 17.3224 8.00082C17.3604 7.90942 17.38 7.81141 17.38 7.71243C17.38 7.61345 17.3604 7.51544 17.3224 7.42404C17.2844 7.33264 17.2287 7.24965 17.1586 7.17985Z" fill="#7E7E7E"/>
</svg>)
const send = (<svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.6187 7.13944L2.78746 0.155459C2.07838 -0.138796 1.27731 -0.00935135 0.696907 0.493107C0.116505 0.995647 -0.126249 1.76995 0.0634561 2.51382L1.56158 8.38882H8.89661C9.23414 8.38882 9.50782 8.66246 9.50782 9.00002C9.50782 9.33755 9.23418 9.61123 8.89661 9.61123H1.56158L0.0634561 15.4862C-0.126249 16.2301 0.116464 17.0044 0.696907 17.5069C1.27849 18.0104 2.07965 18.1382 2.7875 17.8445L19.6187 10.8606C20.385 10.5426 20.861 9.8297 20.861 9.00002C20.861 8.17035 20.385 7.45736 19.6187 7.13944Z" fill="#FF5F46"/>
</svg>)


export default class Dialog  extends Component {

    constructor(props) {
        
        super(props)
        this.state = {
            send : (<svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6187 7.13944L2.78746 0.155459C2.07838 -0.138796 1.27731 -0.00935135 0.696907 0.493107C0.116505 0.995647 -0.126249 1.76995 0.0634561 2.51382L1.56158 8.38882H8.89661C9.23414 8.38882 9.50782 8.66246 9.50782 9.00002C9.50782 9.33755 9.23418 9.61123 8.89661 9.61123H1.56158L0.0634561 15.4862C-0.126249 16.2301 0.116464 17.0044 0.696907 17.5069C1.27849 18.0104 2.07965 18.1382 2.7875 17.8445L19.6187 10.8606C20.385 10.5426 20.861 9.8297 20.861 9.00002C20.861 8.17035 20.385 7.45736 19.6187 7.13944Z" fill="#FF5F46"/>
                    </svg>),
            newPhrase: '',

            dialogMenu: [
                {
                    avatar: avatar1,
                    name: 'Виктор Мишустин',
                    lastMessege: 'Ну ладно, спасибо',
                    time: "9:35",
                    status: '4',
                    online:'online'
        
                },
                {
                    avatar: avatar1,
                    name: 'Сергей Скударнов',
                    lastMessege: 'Так, я не понял..?',
                    time: "8:42",
                    status: '1',
                    online:''
        
                },
                {
                    avatar: avatar1,
                    name: 'Сергей Скударнов',
                    lastMessege: 'Так, я не понял..?',
                    time: "8:42",
                    status: '1',
                    online:''
        
                },
                {
                    avatar: avatar1,
                    name: 'Сергей Скударнов',
                    lastMessege: 'Так, я не понял..?',
                    time: "8:42",
                    status: '1',
                    online:''
        
                },
        
        
            ],
            chat: [
                {
                id: 1,
                avatar : avatar1,
                message: 'Разнообразный и богатый опыт консультация с широким активом влечет за собой процесс внедрения и модернизации систем массового участия. Задача организации, в особенности',
                time: '9:35',
                status: 'oponent'
            },
                { id: 2,
                avatar : avatar1,
                message: 'Привет',
                time: '9:38',
                status: 'user'
            },
                {id: 3,
                avatar : avatar1,
                message: 'Ты меня уже достал.. не пиши мне больше',
                time: '9:38',
                status: 'user'
            },
                {id: 4,
                avatar : avatar1,
                message: 'ты издеваешься надо мной??',
                time: '9:41',
                status: 'oponent'
            },
            ],
            msg: [

            ],
            // currentUserId:''


        }
        
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleNewPhraseChange = this.handleNewPhraseChange.bind(this)
        this.getMessage = this.getMessage.bind(this)
        // this.getMessageMetod = this.getMessageMetod.bind(this)

    }
    handleNewPhraseChange(e) {
        this.setState({
            newPhrase: e.target.value
        })
    }

    handleFormSubmit(e) {
        e.preventDefault()
        let date= new Date()
        let usertime = date.getHours() +":"+ (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes() )
       
        let phrase = {
            id: Date.now(),
            avatar: avatar1,
            message: this.state.newPhrase,
            time: usertime ,
            status: 'user'
        }
        let tmp = this.state.chat
        tmp.push(phrase)
        this.setState({
            chat: tmp,
            newPhrase: ''
        })
        // const {auth} = useContext(Context)
        // const auth = getAuth();
        // const [value, setValue] = useState('')
        // const[ message, loading ] =useCollectionData()

        // Firestore
        // const firestore = getFirestore(firebaseApp);


    }

   
    // getMessage()
            getMessage(tmp) {
            
                // ScrollToBottom()
                // console.log(1)
                this.setState({
                    msg: tmp
                   
                })
                
            }
         
       

         
    render() {

     
        return (
            <div className="dialog">
                <div className="title">
                    Диалог с технической поддержкой
                </div>
                <div className="subtitle">
                    Ваши диалоги:
                </div>
                <div className="dialog-block">
                    <div className="left-block">
                        <div className="dialog-row autor">
                            
                            <img src={avatar1}  className="dialog-avatar"/>
                            
                            <div className="autor-name"> Виктор Мишустин</div>
                                             
                        </div>
    
                       
                            {/* {this.state.dialogMenu.map((item, index )=>
                                        (  <Link to={`/dialog/${index + 1}`}   key={index} >
    
    
                                            <div className={`dialog-row ${item.online}`}>
                                                                    
                                                <img src={item.avatar}  className="dialog-avatar"/>
    
                                                    <div className="dialog-preveiw">
                                                        <div className="diallog-oponent"> {item.name}</div>
                                                        <div className="last-message">{item.lastMessege} </div>
                                                    </div>
                                                <div className="dialog-info">
                                                    <div className="diallog-time">{item.time} </div>
                                                    <div className="diallog-status"> {item.status}</div>
                                                </div>
    
                                            </div>
    
                                            </Link>
                                    ))} */}
                      
    
    
                    </div>
    
                    <div className="right-block">
                        <UserInfo dialogMenu={this.state.dialogMenu}/>
    
                        {/* <div className="chat-block "> */}
                        <ScrollToBottom className="chat-block" >
                                    {/* {this.state.chat.map((item, index )=>
                                                (   
                                                    <div className={`chat-row ${item.status}`} key={item.id}>
                                                        <img src={item.avatar}  className="chat-avatar"/>
                
                                                        <div className="wrapper">
                                                            <div className="chat-message"> {item.message}</div>  
                                                            <div className="time-message ">{item.time}</div>
                                                        </div>
                                                    </div>
            
            
                                            ))} */}
                                     {this.state.msg.length > 0 && 
                                        this.state.msg.map( (message, index) => (
                                            <div className={`chat-row  ${message.uid}`} key={message.id}>
                                            <img src={`${message.photoURL}`}  className="chat-avatar"/>
    
                                            <div className="wrapper">
                                                <div className="chat-message"> {message.message}</div>  
                                                <div className="time-message ">{message.timestamp}</div>
                                            </div>
                                            </div>



                                        ))
                                    }
                       
        
                            {/* <div className="chat-row oponent">
                                <img src={avatar1}  className="chat-avatar"/>
                                <div className="wrapper">
                                    <div className="chat-message"> Разнообразный и богатый опыт консультация с широким
                                        активом влечет за собой процесс внедрения и модернизации
                                        систем массового участия. Задача организации,
                                        в особенности</div>  
                                    <div className="time-message ">9:35</div>
                                </div>
                            </div>
                            <div className="chat-row user">
                                <img src={avatar1}  className="chat-avatar"/>
                                <div className="wrapper">
                                    <div className="chat-message"> Разнообразный и богатый опыт консультация с широким
                                        активом влечет за собой процесс внедрения и модернизации
                                        систем массового участия. Задача организации,
                                        в особенности</div>  
                                    <div className="time-message ">9:35</div>
                                </div>
                            </div> */}
        </ScrollToBottom>
                          
                        {/* </div> */}
                        {/* <ChatForm/> */}
                        

                        <DialogForm
                            // newPhrase={this.state.newPhrase} 
                            // handleNewPhraseChange={this.handleNewPhraseChange} 
                            getMessage={this.getMessage} 
                            // handleFormSubmit={this.handleFormSubmit} 
                            send={this.state.send} 
                            // chat = {this.state.chat}
                            />
                       
    
    
                    </div>
    
    
                </div>
                
    
    
    
    
            </div>
        )
    }
   
}
