import React from 'react'
import SeoSubmenu from '.././SeoSubmenu'
import SimpleMap from '.././SimpleMap'
// import { YMaps, Map, Placemark } from "react-yandex-maps";

const location = (<svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.38021 5.00168C7.72094 5.00168 7.07647 5.19717 6.52831 5.56345C5.98015 5.92972 5.5529 6.45031 5.30061 7.0594C5.04832 7.66849 4.98231 8.33871 5.11093 8.98531C5.23954 9.63192 5.55701 10.2259 6.02319 10.692C6.48936 11.1582 7.08331 11.4757 7.72991 11.6043C8.37651 11.7329 9.04673 11.6669 9.65582 11.4146C10.2649 11.1623 10.7855 10.7351 11.1518 10.1869C11.518 9.63875 11.7135 8.99428 11.7135 8.33501C11.7135 7.45096 11.3624 6.60311 10.7372 5.97799C10.1121 5.35287 9.26427 5.00168 8.38021 5.00168ZM8.38021 10.0017C8.05057 10.0017 7.72834 9.90393 7.45426 9.7208C7.18018 9.53766 6.96656 9.27736 6.84041 8.97282C6.71426 8.66827 6.68126 8.33316 6.74557 8.00986C6.80988 7.68656 6.96861 7.38959 7.2017 7.1565C7.43479 6.92341 7.73176 6.76468 8.05506 6.70037C8.37836 6.63606 8.71347 6.66907 9.01802 6.79521C9.32256 6.92136 9.58286 7.13498 9.76599 7.40906C9.94913 7.68314 10.0469 8.00538 10.0469 8.33501C10.0469 8.77704 9.87128 9.20096 9.55872 9.51352C9.24616 9.82608 8.82224 10.0017 8.38021 10.0017Z" fill="#FF5F46"/>
<path d="M8.37917 20.0017C7.67745 20.0053 6.98509 19.8407 6.36005 19.5217C5.73502 19.2027 5.1955 18.7387 4.78667 18.1683C1.61083 13.7875 0 10.4942 0 8.37917C0 6.15687 0.882802 4.0256 2.4542 2.4542C4.0256 0.882803 6.15687 0 8.37917 0C10.6015 0 12.7327 0.882803 14.3041 2.4542C15.8755 4.0256 16.7583 6.15687 16.7583 8.37917C16.7583 10.4942 15.1475 13.7875 11.9717 18.1683C11.5628 18.7387 11.0233 19.2027 10.3983 19.5217C9.77324 19.8407 9.08088 20.0053 8.37917 20.0017ZM8.37917 1.81917C6.63951 1.82115 4.97168 2.51311 3.74156 3.74323C2.51144 4.97335 1.81948 6.64118 1.8175 8.38083C1.8175 10.0558 3.395 13.1533 6.25833 17.1025C6.50141 17.4373 6.82031 17.7098 7.18893 17.8977C7.55755 18.0856 7.96542 18.1836 8.37917 18.1836C8.79291 18.1836 9.20078 18.0856 9.5694 17.8977C9.93802 17.7098 10.2569 17.4373 10.5 17.1025C13.3633 13.1533 14.9408 10.0558 14.9408 8.38083C14.9388 6.64118 14.2469 4.97335 13.0168 3.74323C11.7867 2.51311 10.1188 1.82115 8.37917 1.81917Z" fill="#FF5F46"/>
</svg>)

const phone2 = (<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5954 21.01C19.9572 21.01 21.0651 19.8968 21.0651 18.5285V15.2198C21.0651 14.864 20.8376 14.5481 20.5001 14.4353L15.5489 12.781C15.3065 12.7 15.0405 12.7356 14.8279 12.8773L12.7224 14.281C10.4626 13.2087 7.79184 10.5616 6.72954 8.34202L8.13274 6.23721C8.27441 6.02469 8.30998 5.75856 8.22903 5.51626L6.5747 0.565009C6.46193 0.227526 6.146 0 5.79016 0H2.4815C1.1132 0 0 1.10791 0 2.46975C0 7.03995 2.07806 11.7305 5.70138 15.3386C9.32072 18.9429 14.0205 21.01 18.5954 21.01ZM2.4815 1.65433H5.19443L6.53168 5.65649L5.10196 7.80105C4.95086 8.0277 4.92103 8.31417 5.02222 8.56706C5.57228 9.9422 6.67307 11.4888 8.12177 12.9221C9.56093 14.3459 11.1151 15.4346 12.4981 15.9878C12.7509 16.0889 13.0375 16.0591 13.2641 15.908L15.4087 14.4783L19.4108 15.8156V18.5285C19.4108 18.9923 19.0527 19.3557 18.5954 19.3557C9.88738 19.3557 1.65433 11.1494 1.65433 2.46975C1.65433 2.01249 2.01768 1.65433 2.4815 1.65433Z" fill="#FF5F46"/>
</svg>)

const mail2 = (<svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8333 0H4.16667C3.062 0.00132321 2.00296 0.440735 1.22185 1.22185C0.440735 2.00296 0.00132321 3.062 0 4.16667L0 10C0.00132321 11.1047 0.440735 12.1637 1.22185 12.9448C2.00296 13.7259 3.062 14.1653 4.16667 14.1667H15.8333C16.938 14.1653 17.997 13.7259 18.7782 12.9448C19.5593 12.1637 19.9987 11.1047 20 10V4.16667C19.9987 3.062 19.5593 2.00296 18.7782 1.22185C17.997 0.440735 16.938 0.00132321 15.8333 0ZM4.16667 1.66667H15.8333C16.3323 1.66765 16.8196 1.81793 17.2325 2.09817C17.6453 2.37841 17.9649 2.77579 18.15 3.23917L11.7683 7.955C11.2987 8.42276 10.6628 8.68539 10 8.68539C9.33715 8.68539 8.70131 8.42276 8.23167 7.955L1.85 3.23917C2.03512 2.77579 2.35468 2.37841 2.76754 2.09817C3.1804 1.81793 3.66768 1.66765 4.16667 1.66667ZM15.8333 12.5H4.16667C3.50363 12.5 2.86774 12.2366 2.3989 11.7678C1.93006 11.2989 1.66667 10.663 1.66667 10V5.41667L7.05333 9.13333C7.83552 9.91355 8.89521 10.3517 10 10.3517C11.1048 10.3517 12.1645 9.91355 12.9467 9.13333L18.3333 5.41667V10C18.3333 10.663 18.0699 11.2989 17.6011 11.7678C17.1323 12.2366 16.4964 12.5 15.8333 12.5Z" fill="#FF5F46"/>
</svg>)

export default function SeoContacts() {
    return (
        <div className="contacts">
            <div className="wrapper">
                <div className="title">
                    SEO - Контакты
                </div>

                <div className="contacts-row adres">
                    <div className="image">{location}</div>
                    <div>
                        <span className="bold_txt"> Москва, ул. Большая Почтовая, 26в, 
                        <br/>стр.2,
                    бизнес-центр Post Plaza, 2-й этаж. </span>
                    
                    <br/>ст. метро «Бауманская» или «Электрозаводская»
                    <br/>Перед приездом сообщите, пожалуйста, о своем визите.
                    </div>
                </div>

                <div className="contacts-row">
                    <div className="image">{phone2}</div>
                    <div>
                        <a href="tel:+7 (495) 223-66-59">
                        +7 (495) 223-66-59
                        </a>
                         
                    </div>
                </div>

                <div className="contacts-row">
                    <div className="image">{mail2}</div>
                    <div>
                        e-mail:&nbsp; 
                        <a href="mailto:info@demis.ru">
                         info@demis.ru
                        </a> 
                    </div>
                </div>
                <div className="map-row">
                {/* <SimpleMap/> */}

               
                    
                    <iframe src="https://yandex.ua/map-widget/v1/-/CCUiF2a7wD" 
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen={true} style={{position: 'relative'}} >

                    </iframe>
                    </div>

            
                
              
            </div>

            <SeoSubmenu/>
    
   
    
        </div>
    )
}
