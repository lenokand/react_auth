
import React, { Component } from 'react'
import logo_white from '../img/logo_white.svg'; 
import human_img from '../img/human_img.png'; 
import CallbackForm from './CallbackForm';
import AuthorizationForm from './AuthorizationForm';
import { Switch, Route } from 'react-router';
import FogotPasswordForm from './FogotPasswordForm';
import Footer from './Footer';
import { Context } from '..';
const phone_orange =(<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.1869 19.1421L20.2088 19.1186C20.7474 18.5158 21.0318 17.728 21.0027 16.9202C20.9735 16.1124 20.6329 15.3472 20.0523 14.7848C18.9067 13.6798 17.9457 13.0413 17.0301 12.7768C15.7686 12.4121 14.6011 12.7439 13.5571 13.7628L12.449 14.8584C11.1661 14.1209 9.98795 13.2144 8.94631 12.1632L8.89153 12.1085L8.83675 12.0553C7.78335 11.015 6.87379 9.83858 6.13224 8.55723L7.22782 7.44757C8.24671 6.40364 8.57851 5.23607 8.21384 3.97459C7.94934 3.059 7.31077 2.09645 6.2058 0.952357C5.6434 0.371751 4.8782 0.0312144 4.0704 0.00204127C3.2626 -0.0271318 2.47483 0.25732 1.87201 0.795846L1.84854 0.817758C1.83736 0.826855 1.82689 0.836796 1.81723 0.847495C0.621489 2.04793 -0.0108158 3.73356 0.000139995 5.72281C0.0173562 9.09719 1.87827 12.9552 4.95998 16.0432C8.04794 19.1296 11.9059 20.9826 15.2772 20.9999C17.2633 21.0108 18.9489 20.3738 20.1541 19.1734C20.1659 19.1638 20.1768 19.1534 20.1869 19.1421Z" fill="#FF5F46"/>
    </svg>
    )

export default function AutorisationF() {
    return (
        <div>
        <div className="autorisation"> 
        {/* <div className="autorisation-side_block"></div> */}
        <div className="vertical-text"> для клиентов </div>
           <div className="container">
               
                <header> 
                    <div> 
                        <img src={logo_white }/>
                    </div>
                    <div className="header-contacts"> 
                        <div className="header-contacts_row">
                            {phone_orange}
                            <a href="tel:+7(499)403-17-10">+7 (499) 403-17-10</a>
                        </div>
                        <div className="header-contacts_row">
                            <button
                             onClick={this.handleShowBlock}
                             >
                                Заказать звонок
                            </button>
                        </div>
                        

                    </div>

                </header>

               




          </div> 
          <div className="main-block">
                    <div className="main-block_info">
                       

                        <Switch>
                            <Route exact path='/login'>
                            <div className="main-block_title">Личный кабинет
                          
                            <br/>  для клиентов
                           
                            <br/> <span className="bold_txt">Digital Rex</span> </div>


                                <AuthorizationForm 
                                handleFormSubmit={this.handleFormSubmit}
                                handleChangeLogin={this.handleChangeLogin}
                                handleChangePassword={this.handleChangePassword}
                                login={this.state.login}
                                password={this.state.password}
                                />
                            </Route>


                            <Route exact path='/forgotpassword'>
                                <div className="main-block_title">Страница
                                   <br/> <span className="bold_txt">восстановления</span> </div>
                                <div className="main-block_subtitle">
                                Для получения письма с новыми данными, укажите адрес электронной почты 
                                {/* {this.state.email} */}
                                </div>
                                
                                <FogotPasswordForm 
                                handleFormSubmitPassword={this.handleFormSubmitPassword}
                                handleChangeEmail={this.handleChangeEmail}
                                email={this.state.email}
                                />
                            </Route>

                            
                        </Switch>
                       


                    </div>
                    <img src={human_img}/>
                </div>
            <CallbackForm showModal={this.state.showModal} handleShowBlock={this.handleShowBlock}/>




        </div>
        <Footer/>
        </div>
    )
}
