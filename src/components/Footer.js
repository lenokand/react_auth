import logo_white from '../img/logo_white.svg'; 
import wapp from '../img/wapp.png'; 
import phone from '../img/phone.png'; 
import mail from '../img/mail.png'; 
import geo from '../img/geo.png'; 
const arrow_right = (<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.76434 3.35003L1.70706 0.292746C1.51946 0.105241 1.26507 -6.25938e-05 0.999833 -5.95929e-08C0.734598 6.24747e-05 0.480251 0.105486 0.292746 0.293079C0.105242 0.480673 -6.2419e-05 0.735069 1.15264e-07 1.0003C6.26495e-05 1.26554 0.105487 1.51988 0.29308 1.70739L3.35036 4.764C3.3814 4.79497 3.40603 4.83175 3.42284 4.87225C3.43964 4.91274 3.44829 4.95615 3.44829 5C3.44829 5.04384 3.43964 5.08726 3.42284 5.12775C3.40603 5.16825 3.3814 5.20503 3.35036 5.236L0.293081 8.29261C0.105488 8.48011 6.33025e-05 8.73446 8.14594e-07 8.9997C-6.16733e-05 9.26493 0.105242 9.51933 0.292747 9.70692C0.480252 9.89451 0.734599 9.99994 0.999833 10C1.26507 10.0001 1.51946 9.89476 1.70706 9.70725L4.76434 6.64997C5.20115 6.21195 5.44645 5.6186 5.44645 5C5.44645 4.3814 5.20115 3.78804 4.76434 3.35003Z" fill="#FF5F46"/>
</svg>
)


function Footer() {
    return(
        <footer >
        <div className="container">

        <div className="footer_row">
            <div className="footer_col logo_white">
                <img src={logo_white} className="logo_white" alt="logo"/>
            </div>

            <div className="footer_col">
                <div className="col_title">
                Меню сайта
                </div>

                <div className="col_content foter_menu">
                
                <div className="content_left">
                    <div className="menu_item">
                        {arrow_right}
                        <span>Главная </span>
                    </div>
                    <div className="menu_item">
                        {arrow_right}
                        <span>О нас </span>
                    </div>
                    <div className="menu_item">
                        {arrow_right}
                        <span>Портфолио </span>
                    </div>
                    <div className="menu_item">
                        {arrow_right}
                        <span>Отзывы </span>
                    </div>
                
                </div>
                <div className="content_right">
                
                    <div className="menu_item">
                    {arrow_right}
                    <span>Вакансии </span>
                    </div>
                    <div className="menu_item">
                    {arrow_right}
                    <span>Блог </span>
                    </div>
                    <div className="menu_item">
                    {arrow_right}
                    <span>Контакты </span>
                    </div>
                   

                </div>

                </div>
            </div>


            <div className="footer_col">
                <div className="col_title">
                    Наши услуги
                </div>
                <div className="col_content">
                
                        <div className="menu_item">
                            {arrow_right}
                            <span>CEO продвижение </span>
                        </div>
                        <div className="menu_item">
                            {arrow_right}
                            <span>SMM продвижение </span>
                        </div>
                        <div className="menu_item">
                            {arrow_right}
                            <span>Настройка контекстной рекламы </span>
                        </div>
                        <div className="menu_item">
                            {arrow_right}
                            <span>Разработка сайтов под ключ </span>
                        </div>
               

                </div>
                
            </div>
            <div className="footer_col">
                <div className="col_title">
                    Наши контакты
                </div>
                <div className="col_content">
                
                        <div className="menu_item">
                        <img src={phone}  alt="phone"/>
                        <a>+7 (499) 403-17-10 </a>
                        </div>
                        <div className="menu_item">
                        <img src={wapp} alt="logo"/>
                        
                        <a>+7 (925) 957-17-81 </a>
                        </div>
                        <div className="menu_item">
                        <img src={mail}  alt="mail"/>
                        <a>info@digitalre.ru </a>
                        </div>
                        
               

                </div>
                
            </div>
            <div className="footer_col adress">
                <div className="col_title">
                    Наш офис
                </div>
                <div className="col_content">
                
                        <div className="menu_item">
                            <img src={geo}  alt="geo"/>
                            <span>г. Москва, 22-ой км.
                                    домовладение 4,
                                    Киевское ш.
                                    БЦ Румянцево </span>
                        </div>
                        
                        
               

                </div>
                
            </div>
            
           
            

        </div>

        <div className="footer_row">
            <div>
            Digital Rex - Создание сайтов © 2016 - 2021

            </div>
            <div>
                
            Политика конфидециальности
            </div>

        </div>
        
        </div>
        <div> 
            
        </div>
        </footer>
        
    )}

    export default Footer;