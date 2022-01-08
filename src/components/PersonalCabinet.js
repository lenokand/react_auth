import React, {useState, useEffect} from "react";
import SeoSubmenu from './SeoSubmenu'; 
import managerAvatar from '../img/manager.png'; 
import reveiwImg from '../img/reveiw.png'; 

import supportImg from '../img/support.png'; 
import privelegiiImg from '../img/privelegii.png';
import {
   
    Link
  } from "react-router-dom";

  import { getAuth } from 'firebase/auth';
  import {
    getFirestore,
    // collection,
    // getDocs,
   
    getDoc,
    // addDoc,
    // firestore,
    // Timestamp,
    doc,
    // query,
    // orderBy,
    // limit,
    // onSnapshot, query, 
    setDoc, updateDoc} from 'firebase/firestore';
  import ModalProps from "./ModalProps";
 
   

    const home = ( <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.2675 7.53968L12.9467 1.21802C12.1644 0.438012 11.1047 0 10 0C8.89528 0 7.83563 0.438012 7.05334 1.21802L0.732509 7.53968C0.499531 7.77117 0.314818 8.0466 0.189079 8.35C0.0633393 8.65341 -0.000925333 8.97875 1.00662e-05 9.30718V17.488C1.00662e-05 18.151 0.263402 18.7869 0.732242 19.2558C1.20108 19.7246 1.83697 19.988 2.50001 19.988H17.5C18.163 19.988 18.7989 19.7246 19.2678 19.2558C19.7366 18.7869 20 18.151 20 17.488V9.30718C20.0009 8.97875 19.9367 8.65341 19.8109 8.35C19.6852 8.0466 19.5005 7.77117 19.2675 7.53968ZM12.5 18.3213H7.5V15.043C7.5 14.38 7.76339 13.7441 8.23223 13.2752C8.70108 12.8064 9.33696 12.543 10 12.543C10.663 12.543 11.2989 12.8064 11.7678 13.2752C12.2366 13.7441 12.5 14.38 12.5 15.043V18.3213ZM18.3333 17.488C18.3333 17.709 18.2455 17.921 18.0892 18.0773C17.933 18.2335 17.721 18.3213 17.5 18.3213H14.1667V15.043C14.1667 13.9379 13.7277 12.8781 12.9463 12.0967C12.1649 11.3153 11.1051 10.8763 10 10.8763C8.89493 10.8763 7.83513 11.3153 7.05372 12.0967C6.27232 12.8781 5.83334 13.9379 5.83334 15.043V18.3213H2.50001C2.27899 18.3213 2.06703 18.2335 1.91075 18.0773C1.75447 17.921 1.66668 17.709 1.66668 17.488V9.30718C1.66745 9.08633 1.75517 8.87467 1.91084 8.71801L8.23167 2.39885C8.70142 1.93129 9.33722 1.66881 10 1.66881C10.6628 1.66881 11.2986 1.93129 11.7683 2.39885L18.0892 8.72051C18.2442 8.87655 18.3319 9.0872 18.3333 9.30718V17.488Z" />
                    </svg>)

    // handleShowModal(id) {
            
        

    //     if (this.state.showModal == id) {
    //         this.setState({showModal : 0 })
    //     }
    //     else{
    //         this.setState({showModal : id})
    //     }
    
    // }

    function PersonalCabinet() {
      let [showModal, setVisible] = useState(false)
      let [mngName, setmngName] = useState({})
      function toggleModal(e) {
        return (
            setVisible(!showModal),
            console.log(showModal)
        )
        }

    
   
        const subnavigation = [
        // {
        //     title: 'Ваш менеджер',
        //     img: managerAvatar,
        //     subtitle: 'Скударнов Сергей Александрович',
        //     butonSign: 'Связаться',
        //     route: ''
        // },
        // {
        //     title: 'Отзывы',
        //     img: reveiwImg,
        //     subtitle: 'Отзывы об услугах и опыт наших клиентов',
        //     butonSign: 'Смотреть',
        //     route: ''
        // },
        {
            title: 'Тех. поддержка',
            img: supportImg,
            subtitle: 'Быстро решаем возникшие проблемы',
            butonSign: 'Обратиться',
            route: '/dialog'
        },
        {
            title: 'Привелегии',
            img: privelegiiImg,
            subtitle: 'Программа Привилегий для наших постоянных Клиентов',
            // butonSign: 'Ознакомиться',
            route: ''
        },
    ]
        const getDocFromFb = async () =>{
            const auth = getAuth();
            const userUid = auth.currentUser.uid
            const db = getFirestore()
            const docRef = doc(db, 'users', userUid )
            const docSnap = await getDoc(docRef);
        
            if (docSnap.exists()) {
                // console.log("Document data:", docSnap.data());
                try {
                const managerId = docSnap.data().manager
                const mngRef = doc(db, 'managers', managerId )
                const mngSnap = await getDoc(mngRef);
                const tmp = {
                    name: mngSnap.data().name,
                    tel: mngSnap.data().tel,
                    photo: mngSnap.data().photo,
                    id: mngSnap.id,

                }
                setmngName(tmp)
            } catch (e) {
                console.error("Error reading a document: ", e);
            }
                // console.log(tmp );
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
    }
    useEffect(() => {
        getDocFromFb() 
    }, []);
   
    // console.log(mngName, 1 );
    return(
        <section className="personal-cabinet">
            <div className="title">Личный кабинет по SEO</div>
            <div className="content-block" >
             <SeoSubmenu/>

                <div className="seo-subnavigation " >
                            <div className="subnavigation_item item-manager">
                                <div className="wrapper">
                                    <div className="block-title">
                                    Ваш менеджер
                                    </div>
                                    {mngName.photo ? <img src={mngName.photo} className="block-image" alt="admin"/> : ''}
                                    
                                    
                                    <div className="block-subtitle ">
                                    <span className="bold_txt">   {mngName.name? mngName.name : '' }</span>
                                        {/* <span className="bold_txt">Скударнов</span>
                                        <br/> Сергей
                                        <br/> Александрович     */}
                                    </div>

                               
                                </div>
                                {mngName.tel? <a href={'tel:'+mngName.tel} target="_blank">                                        
                                        <div className="active_btn" >Связаться</div>
                                    </a> : ''}
                                    
                               
                            </div>
                            <ModalProps showModal={showModal} toggleModal={toggleModal}/>

                            <div className="subnavigation_item"   >
                                    <div className="wrapper">
                                        <div className="block-title">Отзывы</div>
                                        <img src={reveiwImg} className="block-image" alt="admin"/>
                                      
                                        <div className="block-subtitle">Отзывы об услугах и опыт наших клиентов</div>

                                
                                    </div>
                                    <button className="active_btn" onClick={toggleModal} >Смотреть</button>
                                
                            </div>

                       {subnavigation.map((item, index )=>
                            (<div className="subnavigation_item"  key={index} >
                                    <div className="wrapper">
                                        <div className="block-title">{item.title}</div>
                                        <img src={item.img} className="block-image" alt="admin"/>
                                        {/* <div className="block-image"></div> */}
                                        <div className="block-subtitle">{item.subtitle}</div>

                                
                                    </div>
                                    {item.butonSign? <Link to={item.route}><div className="active_btn">{item.butonSign}</div></Link> : ''}  
                                
                            </div>
                        ))}

                        

                </div>            

            </div>


            {/* <div className="modalPage" style={{display: showModal  ? 'flex' : 'none'}}>
                        Модаьное окно 

                        <button onClick={toggleModal}>OK</button>
            </div> */}

        </section>
        
    )}

    export default PersonalCabinet;