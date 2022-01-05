import React, {useState} from 'react'
import InputMask from "react-input-mask";
import {
    getFirestore,
    collection,
   
    addDoc,
   } from 'firebase/firestore';
import moment from 'moment';

const exit = (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.2928 0.292787C12.1053 0.105316 11.851 0 11.5858 0C11.3206 0 11.0663 0.105316 10.8788 0.292787L6.29279 4.87879L1.70679 0.292787C1.51926 0.105316 1.26495 0 0.999786 0C0.734622 0 0.480314 0.105316 0.292787 0.292787C0.105316 0.480314 0 0.734622 0 0.999786C0 1.26495 0.105316 1.51926 0.292787 1.70679L4.87879 6.29279L0.292787 10.8788C0.105316 11.0663 0 11.3206 0 11.5858C0 11.851 0.105316 12.1053 0.292787 12.2928C0.480314 12.4803 0.734622 12.5856 0.999786 12.5856C1.26495 12.5856 1.51926 12.4803 1.70679 12.2928L6.29279 7.70679L10.8788 12.2928C11.0663 12.4803 11.3206 12.5856 11.5858 12.5856C11.851 12.5856 12.1053 12.4803 12.2928 12.2928C12.4803 12.1053 12.5856 11.851 12.5856 11.5858C12.5856 11.3206 12.4803 11.0663 12.2928 10.8788L7.70679 6.29279L12.2928 1.70679C12.4803 1.51926 12.5856 1.26495 12.5856 0.999786C12.5856 0.734622 12.4803 0.480314 12.2928 0.292787Z" fill="#181818"/>
    </svg>

)

export default function CallbackForm(props) {

    const db = getFirestore()
    const chatRef = collection(db, 'ticket')

    const [formName, setFormName] = useState('')
    const [formTel, setFormTel] = useState('')


    const sendMsg = async (e) => {
        e.preventDefault();
          // let bd_name = 'support1_' + user.uid
          // let bd_name = user.uid
          // const currentUser = []
          try {
            
            addDoc(chatRef, {
           // await addDoc(collection(db, 'support1_' + user.uid), {
             name: formName,
             tel: formTel,
             time:  moment.utc().valueOf()

           });
           console.log('sucsess')
           props.showModal= !props.showModal
                    
         } catch (e) {
           console.error("Error adding document: ", e);
         }
          
         setFormName('')
         setFormTel('')
         
        }
    return (
        <div className='callback-form' style={{display: (props.showModal) ? 'flex' : 'none'}}>
            {/* <div className="shadow"></div> */}
            <form onSubmit={sendMsg}>
            <button className='callback-exit'  onClick={props.handleShowBlock}>{exit}</button>
                <div className="form-title">
                    
                    Оставьте заявку,
                    <br/> <span className="bold_txt">и мы свяжемся с Вами</span> 
                </div>
                <input type="text" placeholder="имя"  
                                    required onChange={(e) => setFormTel(e.target.value)} value={formTel}
                                    // onChange={props.handleNewPhraseChange}
                                    // value={props.login}
                                      />
                <InputMask placeholder = "Телефон"  mask="+7 (999) 99-99-999" onChange={(e) => setFormName(e.target.value)} value={formName} required/>
                {/* <input type="tel" placeholder="телефон"  
                                    required
                                    // onChange={props.handleNewPhraseChange}
                                    // value={props.password} 
                                     /> */}


                <button type="submit" disabled={!formName || !formTel} > Отправить заявку </button>



            </form>
                
                
            



        </div>
    )
}
