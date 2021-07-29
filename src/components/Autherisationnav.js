import React, {useState} from 'react';
import avatar from '../img/avatar.png'; 
import arrow_down from '../img/arrow_down.svg';
let user = {
            firstName: 'Мишустин',
            patronymic: 'Виктор' ,
             lastName: 'Андреевич'}


function formatName(user) {
                return user.firstName + ' '+ user.patronymic + ' ' + user.lastName;
         }


function Autherisationnav() {

    let [visible, setVisible] = useState(false)
   

    let openMenu = () => {
        setVisible(!visible)
        };


    return(
        <div className="autherisationnav">
            <div className="name">

            {formatName(user)}

            </div>

            <div className="avatar">
                <img src={avatar} alt="avatar"/>


            </div>

            <div className="subbutton" onClick={openMenu}>

                <img src={arrow_down} alt="arrow_down"/>
               

            </div>
            <div className="submenu"  style={{display: visible ? 'flex' : 'none'}}>Submenu</div>
            <button className="active_btn">
                выйти
            </button>

        </div>

)

}
export default Autherisationnav;
