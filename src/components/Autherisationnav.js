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
return(
    <div className="autherisationnav">
        <div className="name">

           {formatName(user)}

        </div>

        <div className="avatar">
            <img src={avatar} alt="avatar"/>


        </div>

        <div> 
            <img src={arrow_down} alt="arrow_down"/>
        </div>
        <button className="active_btn">
            выйти
        </button>

    </div>

)

}
export default Autherisationnav;
