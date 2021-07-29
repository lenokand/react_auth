import managerAvatar from '../img/manager.png'; 
import reveiwImg from '../img/reveiw.png'; 

import supportImg from '../img/support.png'; 
import privelegiiImg from '../img/privelegii.png'; 

const home = ( <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.2675 7.53968L12.9467 1.21802C12.1644 0.438012 11.1047 0 10 0C8.89528 0 7.83563 0.438012 7.05334 1.21802L0.732509 7.53968C0.499531 7.77117 0.314818 8.0466 0.189079 8.35C0.0633393 8.65341 -0.000925333 8.97875 1.00662e-05 9.30718V17.488C1.00662e-05 18.151 0.263402 18.7869 0.732242 19.2558C1.20108 19.7246 1.83697 19.988 2.50001 19.988H17.5C18.163 19.988 18.7989 19.7246 19.2678 19.2558C19.7366 18.7869 20 18.151 20 17.488V9.30718C20.0009 8.97875 19.9367 8.65341 19.8109 8.35C19.6852 8.0466 19.5005 7.77117 19.2675 7.53968ZM12.5 18.3213H7.5V15.043C7.5 14.38 7.76339 13.7441 8.23223 13.2752C8.70108 12.8064 9.33696 12.543 10 12.543C10.663 12.543 11.2989 12.8064 11.7678 13.2752C12.2366 13.7441 12.5 14.38 12.5 15.043V18.3213ZM18.3333 17.488C18.3333 17.709 18.2455 17.921 18.0892 18.0773C17.933 18.2335 17.721 18.3213 17.5 18.3213H14.1667V15.043C14.1667 13.9379 13.7277 12.8781 12.9463 12.0967C12.1649 11.3153 11.1051 10.8763 10 10.8763C8.89493 10.8763 7.83513 11.3153 7.05372 12.0967C6.27232 12.8781 5.83334 13.9379 5.83334 15.043V18.3213H2.50001C2.27899 18.3213 2.06703 18.2335 1.91075 18.0773C1.75447 17.921 1.66668 17.709 1.66668 17.488V9.30718C1.66745 9.08633 1.75517 8.87467 1.91084 8.71801L8.23167 2.39885C8.70142 1.93129 9.33722 1.66881 10 1.66881C10.6628 1.66881 11.2986 1.93129 11.7683 2.39885L18.0892 8.72051C18.2442 8.87655 18.3319 9.0872 18.3333 9.30718V17.488Z" />
                </svg>)
function PersonalCabinet() {


    const navigation = [
        {
            icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.75 14.5833H1.66667C1.22464 14.5833 0.800716 14.7589 0.488155 15.0715C0.175595 15.3841 0 15.808 0 16.25V18.3333C0 18.7754 0.175595 19.1993 0.488155 19.5119C0.800716 19.8244 1.22464 20 1.66667 20H3.75C4.19203 20 4.61595 19.8244 4.92851 19.5119C5.24107 19.1993 5.41667 18.7754 5.41667 18.3333V16.25C5.41667 15.808 5.24107 15.3841 4.92851 15.0715C4.61595 14.7589 4.19203 14.5833 3.75 14.5833ZM3.75 18.3333H1.66667V16.25H3.75V18.3333Z" fill="white"/>
            <path d="M18.333 14.5833H16.2497C15.8076 14.5833 15.3837 14.7589 15.0712 15.0715C14.7586 15.3841 14.583 15.808 14.583 16.25V18.3333C14.583 18.7754 14.7586 19.1993 15.0712 19.5119C15.3837 19.8244 15.8076 20 16.2497 20H18.333C18.775 20 19.199 19.8244 19.5115 19.5119C19.8241 19.1993 19.9997 18.7754 19.9997 18.3333V16.25C19.9997 15.808 19.8241 15.3841 19.5115 15.0715C19.199 14.7589 18.775 14.5833 18.333 14.5833ZM18.333 18.3333H16.2497V16.25H18.333V18.3333Z" fill="white"/>
            <path d="M3.75 7.29167H1.66667C1.22464 7.29167 0.800716 7.46727 0.488155 7.77983C0.175595 8.09239 0 8.51631 0 8.95834V11.0417C0 11.4837 0.175595 11.9076 0.488155 12.2202C0.800716 12.5327 1.22464 12.7083 1.66667 12.7083H3.75C4.19203 12.7083 4.61595 12.5327 4.92851 12.2202C5.24107 11.9076 5.41667 11.4837 5.41667 11.0417V8.95834C5.41667 8.51631 5.24107 8.09239 4.92851 7.77983C4.61595 7.46727 4.19203 7.29167 3.75 7.29167ZM3.75 11.0417H1.66667V8.95834H3.75V11.0417Z" fill="white"/>
            <path d="M18.333 7.29167H16.2497C15.8076 7.29167 15.3837 7.46727 15.0712 7.77983C14.7586 8.09239 14.583 8.51631 14.583 8.95834V11.0417C14.583 11.4837 14.7586 11.9076 15.0712 12.2202C15.3837 12.5327 15.8076 12.7083 16.2497 12.7083H18.333C18.775 12.7083 19.199 12.5327 19.5115 12.2202C19.8241 11.9076 19.9997 11.4837 19.9997 11.0417V8.95834C19.9997 8.51631 19.8241 8.09239 19.5115 7.77983C19.199 7.46727 18.775 7.29167 18.333 7.29167ZM18.333 11.0417H16.2497V8.95834H18.333V11.0417Z" fill="white"/>
            <path d="M3.75 0H1.66667C1.22464 0 0.800716 0.175595 0.488155 0.488155C0.175595 0.800716 0 1.22464 0 1.66667V3.75C0 4.19203 0.175595 4.61595 0.488155 4.92851C0.800716 5.24107 1.22464 5.41667 1.66667 5.41667H3.75C4.19203 5.41667 4.61595 5.24107 4.92851 4.92851C5.24107 4.61595 5.41667 4.19203 5.41667 3.75V1.66667C5.41667 1.22464 5.24107 0.800716 4.92851 0.488155C4.61595 0.175595 4.19203 0 3.75 0ZM3.75 3.75H1.66667V1.66667H3.75V3.75Z" fill="white"/>
            <path d="M11.042 14.5833H8.95866C8.51663 14.5833 8.09271 14.7589 7.78015 15.0715C7.46759 15.3841 7.29199 15.808 7.29199 16.25V18.3333C7.29199 18.7754 7.46759 19.1993 7.78015 19.5119C8.09271 19.8244 8.51663 20 8.95866 20H11.042C11.484 20 11.9079 19.8244 12.2205 19.5119C12.5331 19.1993 12.7087 18.7754 12.7087 18.3333V16.25C12.7087 15.808 12.5331 15.3841 12.2205 15.0715C11.9079 14.7589 11.484 14.5833 11.042 14.5833ZM11.042 18.3333H8.95866V16.25H11.042V18.3333Z" fill="white"/>
            <path d="M11.042 7.29167H8.95866C8.51663 7.29167 8.09271 7.46727 7.78015 7.77983C7.46759 8.09239 7.29199 8.51631 7.29199 8.95834V11.0417C7.29199 11.4837 7.46759 11.9076 7.78015 12.2202C8.09271 12.5327 8.51663 12.7083 8.95866 12.7083H11.042C11.484 12.7083 11.9079 12.5327 12.2205 12.2202C12.5331 11.9076 12.7087 11.4837 12.7087 11.0417V8.95834C12.7087 8.51631 12.5331 8.09239 12.2205 7.77983C11.9079 7.46727 11.484 7.29167 11.042 7.29167ZM11.042 11.0417H8.95866V8.95834H11.042V11.0417Z" fill="white"/>
            <path d="M11.042 0H8.95866C8.51663 0 8.09271 0.175595 7.78015 0.488155C7.46759 0.800716 7.29199 1.22464 7.29199 1.66667V3.75C7.29199 4.19203 7.46759 4.61595 7.78015 4.92851C8.09271 5.24107 8.51663 5.41667 8.95866 5.41667H11.042C11.484 5.41667 11.9079 5.24107 12.2205 4.92851C12.5331 4.61595 12.7087 4.19203 12.7087 3.75V1.66667C12.7087 1.22464 12.5331 0.800716 12.2205 0.488155C11.9079 0.175595 11.484 0 11.042 0ZM11.042 3.75H8.95866V1.66667H11.042V3.75Z" fill="white"/>
            <path d="M18.333 0H16.2497C15.8076 0 15.3837 0.175595 15.0712 0.488155C14.7586 0.800716 14.583 1.22464 14.583 1.66667V3.75C14.583 4.19203 14.7586 4.61595 15.0712 4.92851C15.3837 5.24107 15.8076 5.41667 16.2497 5.41667H18.333C18.775 5.41667 19.199 5.24107 19.5115 4.92851C19.8241 4.61595 19.9997 4.19203 19.9997 3.75V1.66667C19.9997 1.22464 19.8241 0.800716 19.5115 0.488155C19.199 0.175595 18.775 0 18.333 0ZM18.333 3.75H16.2497V1.66667H18.333V3.75Z" fill="white"/>
            </svg>),
            title: 'Общее',
            description: 'Динамика позиций за текущий месяц'
        },
        {
            icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.1667 18.3333H2.5C2.27899 18.3333 2.06702 18.2455 1.91074 18.0893C1.75446 17.933 1.66667 17.721 1.66667 17.5V0.833333C1.66667 0.61232 1.57887 0.400358 1.42259 0.244078C1.26631 0.0877974 1.05435 0 0.833333 0C0.61232 0 0.400358 0.0877974 0.244078 0.244078C0.0877974 0.400358 0 0.61232 0 0.833333L0 17.5C0 18.163 0.263392 18.7989 0.732233 19.2678C1.20107 19.7366 1.83696 20 2.5 20H19.1667C19.3877 20 19.5996 19.9122 19.7559 19.7559C19.9122 19.5996 20 19.3877 20 19.1667C20 18.9457 19.9122 18.7337 19.7559 18.5774C19.5996 18.4211 19.3877 18.3333 19.1667 18.3333Z" fill="white"/>
            <path d="M12.5013 16.6667C12.7223 16.6667 12.9343 16.5789 13.0906 16.4226C13.2468 16.2663 13.3346 16.0543 13.3346 15.8333V9.99999C13.3346 9.77898 13.2468 9.56701 13.0906 9.41073C12.9343 9.25445 12.7223 9.16666 12.5013 9.16666C12.2803 9.16666 12.0683 9.25445 11.912 9.41073C11.7558 9.56701 11.668 9.77898 11.668 9.99999V15.8333C11.668 16.0543 11.7558 16.2663 11.912 16.4226C12.0683 16.5789 12.2803 16.6667 12.5013 16.6667Z" fill="white"/>
            <path d="M5.83333 16.6667C6.05435 16.6667 6.26631 16.5789 6.42259 16.4226C6.57887 16.2663 6.66667 16.0543 6.66667 15.8333V9.99999C6.66667 9.77898 6.57887 9.56701 6.42259 9.41073C6.26631 9.25445 6.05435 9.16666 5.83333 9.16666C5.61232 9.16666 5.40036 9.25445 5.24408 9.41073C5.0878 9.56701 5 9.77898 5 9.99999V15.8333C5 16.0543 5.0878 16.2663 5.24408 16.4226C5.40036 16.5789 5.61232 16.6667 5.83333 16.6667Z" fill="white"/>
            <path d="M15.8333 16.6667C16.0543 16.6667 16.2663 16.5789 16.4226 16.4226C16.5789 16.2663 16.6667 16.0543 16.6667 15.8333V5.83333C16.6667 5.61232 16.5789 5.40036 16.4226 5.24408C16.2663 5.0878 16.0543 5 15.8333 5C15.6123 5 15.4004 5.0878 15.2441 5.24408C15.0878 5.40036 15 5.61232 15 5.83333V15.8333C15 16.0543 15.0878 16.2663 15.2441 16.4226C15.4004 16.5789 15.6123 16.6667 15.8333 16.6667Z" fill="white"/>
            <path d="M9.16536 16.6667C9.38638 16.6667 9.59834 16.5789 9.75462 16.4226C9.9109 16.2663 9.9987 16.0543 9.9987 15.8333V5.83333C9.9987 5.61232 9.9109 5.40036 9.75462 5.24408C9.59834 5.0878 9.38638 5 9.16536 5C8.94435 5 8.73239 5.0878 8.57611 5.24408C8.41983 5.40036 8.33203 5.61232 8.33203 5.83333V15.8333C8.33203 16.0543 8.41983 16.2663 8.57611 16.4226C8.73239 16.5789 8.94435 16.6667 9.16536 16.6667Z" fill="white"/>
            </svg>),
            title: 'Позиции',
            description: 'Отчеты по позициям и деньгам'
        },
        {
            icon: (<svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.83333 2.50001H19.1667C19.3877 2.50001 19.5996 2.41221 19.7559 2.25593C19.9122 2.09965 20 1.88769 20 1.66667C20 1.44566 19.9122 1.2337 19.7559 1.07742C19.5996 0.921138 19.3877 0.833341 19.1667 0.833341H5.83333C5.61232 0.833341 5.40036 0.921138 5.24408 1.07742C5.0878 1.2337 5 1.44566 5 1.66667C5 1.88769 5.0878 2.09965 5.24408 2.25593C5.40036 2.41221 5.61232 2.50001 5.83333 2.50001Z" fill="white"/>
            <path d="M19.1667 6.66666H5.83333C5.61232 6.66666 5.40036 6.75446 5.24408 6.91074C5.0878 7.06702 5 7.27898 5 7.49999C5 7.72101 5.0878 7.93297 5.24408 8.08925C5.40036 8.24553 5.61232 8.33333 5.83333 8.33333H19.1667C19.3877 8.33333 19.5996 8.24553 19.7559 8.08925C19.9122 7.93297 20 7.72101 20 7.49999C20 7.27898 19.9122 7.06702 19.7559 6.91074C19.5996 6.75446 19.3877 6.66666 19.1667 6.66666Z" fill="white"/>
            <path d="M19.1667 12.5H5.83333C5.61232 12.5 5.40036 12.5878 5.24408 12.7441C5.0878 12.9004 5 13.1123 5 13.3333C5 13.5543 5.0878 13.7663 5.24408 13.9226C5.40036 14.0789 5.61232 14.1667 5.83333 14.1667H19.1667C19.3877 14.1667 19.5996 14.0789 19.7559 13.9226C19.9122 13.7663 20 13.5543 20 13.3333C20 13.1123 19.9122 12.9004 19.7559 12.7441C19.5996 12.5878 19.3877 12.5 19.1667 12.5Z" fill="white"/>
            <path d="M1.66667 3.33333C2.58714 3.33333 3.33333 2.58714 3.33333 1.66667C3.33333 0.746192 2.58714 0 1.66667 0C0.746192 0 0 0.746192 0 1.66667C0 2.58714 0.746192 3.33333 1.66667 3.33333Z" fill="white"/>
            <path d="M1.66667 9.16667C2.58714 9.16667 3.33333 8.42048 3.33333 7.50001C3.33333 6.57953 2.58714 5.83334 1.66667 5.83334C0.746192 5.83334 0 6.57953 0 7.50001C0 8.42048 0.746192 9.16667 1.66667 9.16667Z" fill="white"/>
            <path d="M1.66667 15C2.58714 15 3.33333 14.2538 3.33333 13.3333C3.33333 12.4129 2.58714 11.6667 1.66667 11.6667C0.746192 11.6667 0 12.4129 0 13.3333C0 14.2538 0.746192 15 1.66667 15Z" fill="white"/>
            </svg>
            ),
            title: 'Показатели',
            description: 'Данные из сервисов статистики'
        },
        {
            icon: (<svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 11.6667C12.5 11.8877 12.4122 12.0996 12.2559 12.2559C12.0996 12.4122 11.8877 12.5 11.6667 12.5H4.99999C4.77898 12.5 4.56702 12.4122 4.41074 12.2559C4.25446 12.0996 4.16666 11.8877 4.16666 11.6667C4.16666 11.4457 4.25446 11.2337 4.41074 11.0774C4.56702 10.9211 4.77898 10.8333 4.99999 10.8333H11.6667C11.8877 10.8333 12.0996 10.9211 12.2559 11.0774C12.4122 11.2337 12.5 11.4457 12.5 11.6667ZM9.16666 14.1667H4.99999C4.77898 14.1667 4.56702 14.2545 4.41074 14.4107C4.25446 14.567 4.16666 14.779 4.16666 15C4.16666 15.221 4.25446 15.433 4.41074 15.5893C4.56702 15.7455 4.77898 15.8333 4.99999 15.8333H9.16666C9.38767 15.8333 9.59963 15.7455 9.75591 15.5893C9.91219 15.433 9.99999 15.221 9.99999 15C9.99999 14.779 9.91219 14.567 9.75591 14.4107C9.59963 14.2545 9.38767 14.1667 9.16666 14.1667ZM16.6666 8.73751V15.8333C16.6653 16.938 16.2259 17.997 15.4448 18.7782C14.6637 19.5593 13.6046 19.9987 12.5 20H4.16666C3.062 19.9987 2.00296 19.5593 1.22185 18.7782C0.440735 17.997 0.00132321 16.938 0 15.8333V4.16668C0.00132321 3.06202 0.440735 2.00298 1.22185 1.22187C2.00296 0.440754 3.062 0.00134242 4.16666 1.92072e-05H7.92916C8.69551 -0.00195323 9.45464 0.148009 10.1627 0.441235C10.8707 0.734461 11.5136 1.16513 12.0542 1.70835L14.9575 4.61335C15.501 5.15355 15.932 5.79623 16.2253 6.50416C16.5187 7.21209 16.6687 7.9712 16.6666 8.73751ZM10.8758 2.88668C10.6136 2.63265 10.3191 2.41412 9.99999 2.23668V5.83335C9.99999 6.05436 10.0878 6.26632 10.2441 6.4226C10.4003 6.57888 10.6123 6.66668 10.8333 6.66668H14.43C14.2524 6.34767 14.0336 6.05347 13.7792 5.79168L10.8758 2.88668ZM15 8.73751C15 8.60001 14.9733 8.46834 14.9608 8.33334H10.8333C10.1703 8.33334 9.5344 8.06995 9.06556 7.60111C8.59672 7.13227 8.33332 6.49639 8.33332 5.83335V1.70585C8.19833 1.69335 8.06583 1.66668 7.92916 1.66668H4.16666C3.50362 1.66668 2.86774 1.93008 2.3989 2.39892C1.93006 2.86776 1.66666 3.50364 1.66666 4.16668V15.8333C1.66666 16.4964 1.93006 17.1323 2.3989 17.6011C2.86774 18.0699 3.50362 18.3333 4.16666 18.3333H12.5C13.163 18.3333 13.7989 18.0699 14.2678 17.6011C14.7366 17.1323 15 16.4964 15 15.8333V8.73751Z" fill="white"/>
            </svg>),
            title: 'Отчеты',
            description: 'Ежемесячные отчеты за последние 12 месяцев '
        },
        {
            icon: (<svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.7792 2.60168L12.3992 1.22002C12.013 0.831943 11.5538 0.524298 11.048 0.314886C10.5422 0.105474 9.99992 -0.00154666 9.45249 1.68878e-05H4.16666C3.062 0.0013401 2.00296 0.440751 1.22185 1.22187C0.440735 2.00298 0.00132321 3.06202 0 4.16668V15.8333C0.00132321 16.938 0.440735 17.997 1.22185 18.7782C2.00296 19.5593 3.062 19.9987 4.16666 20H10.8333C11.938 19.9987 12.997 19.5593 13.7781 18.7782C14.5593 17.997 14.9987 16.938 15 15.8333V5.54751C15.0013 5.00017 14.8941 4.45799 14.6846 3.95234C14.475 3.44669 14.1673 2.98762 13.7792 2.60168ZM12.6008 3.78001C12.719 3.89778 12.8249 4.02734 12.9167 4.16668H10.8333V2.08335C10.9724 2.17611 11.1022 2.28217 11.2208 2.40001L12.6008 3.78001ZM13.3333 15.8333C13.3333 16.4964 13.0699 17.1323 12.6011 17.6011C12.1322 18.0699 11.4964 18.3333 10.8333 18.3333H4.16666C3.50362 18.3333 2.86774 18.0699 2.3989 17.6011C1.93006 17.1323 1.66667 16.4964 1.66667 15.8333V4.16668C1.66667 3.50364 1.93006 2.86776 2.3989 2.39891C2.86774 1.93007 3.50362 1.66668 4.16666 1.66668H9.16666V4.16668C9.16666 4.60871 9.34225 5.03263 9.65481 5.34519C9.96737 5.65775 10.3913 5.83334 10.8333 5.83334H13.3333V15.8333ZM10.8333 7.50001C11.0543 7.50001 11.2663 7.58781 11.4226 7.74409C11.5789 7.90037 11.6667 8.11233 11.6667 8.33334C11.6667 8.55436 11.5789 8.76632 11.4226 8.9226C11.2663 9.07888 11.0543 9.16668 10.8333 9.16668H4.16666C3.94565 9.16668 3.73369 9.07888 3.57741 8.9226C3.42113 8.76632 3.33333 8.55436 3.33333 8.33334C3.33333 8.11233 3.42113 7.90037 3.57741 7.74409C3.73369 7.58781 3.94565 7.50001 4.16666 7.50001H10.8333ZM11.6667 11.6667C11.6667 11.8877 11.5789 12.0996 11.4226 12.2559C11.2663 12.4122 11.0543 12.5 10.8333 12.5H4.16666C3.94565 12.5 3.73369 12.4122 3.57741 12.2559C3.42113 12.0996 3.33333 11.8877 3.33333 11.6667C3.33333 11.4457 3.42113 11.2337 3.57741 11.0774C3.73369 10.9211 3.94565 10.8333 4.16666 10.8333H10.8333C11.0543 10.8333 11.2663 10.9211 11.4226 11.0774C11.5789 11.2337 11.6667 11.4457 11.6667 11.6667ZM11.5067 14.5108C11.6362 14.689 11.6899 14.9113 11.656 15.129C11.6221 15.3467 11.5034 15.5421 11.3258 15.6725C10.4815 16.2741 9.48149 16.6193 8.44583 16.6667C7.84073 16.6637 7.25401 16.4584 6.77916 16.0833C6.50583 15.8958 6.40166 15.8333 6.19583 15.8333C5.63868 15.9195 5.11301 16.1474 4.66916 16.495C4.49312 16.6205 4.27519 16.6727 4.06141 16.6405C3.84762 16.6083 3.6547 16.4943 3.5234 16.3226C3.3921 16.1508 3.33268 15.9347 3.3577 15.72C3.38272 15.5052 3.49022 15.3086 3.6575 15.1717C4.39181 14.6016 5.27356 14.253 6.19916 14.1667C6.75427 14.1755 7.29093 14.3674 7.72583 14.7125C7.92406 14.8908 8.1793 14.9927 8.44583 15C9.12722 14.949 9.78247 14.7162 10.3433 14.3258C10.5222 14.1962 10.7451 14.1429 10.9633 14.1776C11.1814 14.2123 11.3769 14.3321 11.5067 14.5108Z" fill="white"/>
            </svg>),
            title: 'Услуги',
            description: 'Дополнительные услуги продвижения'
        },
        {
            icon: (<svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.1667 7.02V5.83333C14.1667 4.28624 13.5521 2.80251 12.4581 1.70854C11.3642 0.614582 9.88043 0 8.33333 0C6.78624 0 5.30251 0.614582 4.20854 1.70854C3.11458 2.80251 2.5 4.28624 2.5 5.83333V7.02C1.7578 7.34392 1.12608 7.8771 0.682082 8.55434C0.238088 9.23158 0.00106531 10.0235 0 10.8333V15.8333C0.00132321 16.938 0.440735 17.997 1.22185 18.7782C2.00296 19.5593 3.062 19.9987 4.16667 20H12.5C13.6047 19.9987 14.6637 19.5593 15.4448 18.7782C16.2259 17.997 16.6653 16.938 16.6667 15.8333V10.8333C16.6656 10.0235 16.4286 9.23158 15.9846 8.55434C15.5406 7.8771 14.9089 7.34392 14.1667 7.02ZM4.16667 5.83333C4.16667 4.72826 4.60565 3.66846 5.38705 2.88705C6.16846 2.10565 7.22826 1.66667 8.33333 1.66667C9.4384 1.66667 10.4982 2.10565 11.2796 2.88705C12.061 3.66846 12.5 4.72826 12.5 5.83333V6.66667H4.16667V5.83333ZM15 15.8333C15 16.4964 14.7366 17.1323 14.2678 17.6011C13.7989 18.0699 13.163 18.3333 12.5 18.3333H4.16667C3.50362 18.3333 2.86774 18.0699 2.3989 17.6011C1.93006 17.1323 1.66667 16.4964 1.66667 15.8333V10.8333C1.66667 10.1703 1.93006 9.53441 2.3989 9.06557C2.86774 8.59672 3.50362 8.33333 4.16667 8.33333H12.5C13.163 8.33333 13.7989 8.59672 14.2678 9.06557C14.7366 9.53441 15 10.1703 15 10.8333V15.8333Z" fill="white"/>
            <path d="M8.33333 11.6667C8.11232 11.6667 7.90036 11.7545 7.74408 11.9108C7.5878 12.067 7.5 12.279 7.5 12.5V14.1667C7.5 14.3877 7.5878 14.5997 7.74408 14.7559C7.90036 14.9122 8.11232 15 8.33333 15C8.55435 15 8.76631 14.9122 8.92259 14.7559C9.07887 14.5997 9.16667 14.3877 9.16667 14.1667V12.5C9.16667 12.279 9.07887 12.067 8.92259 11.9108C8.76631 11.7545 8.55435 11.6667 8.33333 11.6667Z" fill="white"/>
            </svg>
            ),
            title: 'Инспекция',
            description: 'Закрывающие документы за все периоды'
        },
        {
            icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.83334 0H3.33333C2.44928 0 1.60143 0.35119 0.976311 0.976311C0.35119 1.60143 0 2.44928 0 3.33333V5.83334C0 6.71739 0.35119 7.56524 0.976311 8.19036C1.60143 8.81548 2.44928 9.16667 3.33333 9.16667H5.83334C6.71739 9.16667 7.56524 8.81548 8.19036 8.19036C8.81548 7.56524 9.16667 6.71739 9.16667 5.83334V3.33333C9.16667 2.44928 8.81548 1.60143 8.19036 0.976311C7.56524 0.35119 6.71739 0 5.83334 0ZM7.5 5.83334C7.5 6.27536 7.32441 6.69929 7.01185 7.01185C6.69929 7.32441 6.27536 7.5 5.83334 7.5H3.33333C2.89131 7.5 2.46738 7.32441 2.15482 7.01185C1.84226 6.69929 1.66667 6.27536 1.66667 5.83334V3.33333C1.66667 2.89131 1.84226 2.46738 2.15482 2.15482C2.46738 1.84226 2.89131 1.66667 3.33333 1.66667H5.83334C6.27536 1.66667 6.69929 1.84226 7.01185 2.15482C7.32441 2.46738 7.5 2.89131 7.5 3.33333V5.83334Z" fill="white"/>
            <path d="M16.6657 0H14.1657C13.2817 0 12.4338 0.35119 11.8087 0.976311C11.1836 1.60143 10.8324 2.44928 10.8324 3.33333V5.83334C10.8324 6.71739 11.1836 7.56524 11.8087 8.19036C12.4338 8.81548 13.2817 9.16667 14.1657 9.16667H16.6657C17.5498 9.16667 18.3976 8.81548 19.0228 8.19036C19.6479 7.56524 19.9991 6.71739 19.9991 5.83334V3.33333C19.9991 2.44928 19.6479 1.60143 19.0228 0.976311C18.3976 0.35119 17.5498 0 16.6657 0ZM18.3324 5.83334C18.3324 6.27536 18.1568 6.69929 17.8443 7.01185C17.5317 7.32441 17.1078 7.5 16.6657 7.5H14.1657C13.7237 7.5 13.2998 7.32441 12.9872 7.01185C12.6747 6.69929 12.4991 6.27536 12.4991 5.83334V3.33333C12.4991 2.89131 12.6747 2.46738 12.9872 2.15482C13.2998 1.84226 13.7237 1.66667 14.1657 1.66667H16.6657C17.1078 1.66667 17.5317 1.84226 17.8443 2.15482C18.1568 2.46738 18.3324 2.89131 18.3324 3.33333V5.83334Z" fill="white"/>
            <path d="M5.83334 10.8333H3.33333C2.44928 10.8333 1.60143 11.1845 0.976311 11.8096C0.35119 12.4348 0 13.2826 0 14.1667V16.6667C0 17.5507 0.35119 18.3986 0.976311 19.0237C1.60143 19.6488 2.44928 20 3.33333 20H5.83334C6.71739 20 7.56524 19.6488 8.19036 19.0237C8.81548 18.3986 9.16667 17.5507 9.16667 16.6667V14.1667C9.16667 13.2826 8.81548 12.4348 8.19036 11.8096C7.56524 11.1845 6.71739 10.8333 5.83334 10.8333ZM7.5 16.6667C7.5 17.1087 7.32441 17.5326 7.01185 17.8452C6.69929 18.1577 6.27536 18.3333 5.83334 18.3333H3.33333C2.89131 18.3333 2.46738 18.1577 2.15482 17.8452C1.84226 17.5326 1.66667 17.1087 1.66667 16.6667V14.1667C1.66667 13.7246 1.84226 13.3007 2.15482 12.9882C2.46738 12.6756 2.89131 12.5 3.33333 12.5H5.83334C6.27536 12.5 6.69929 12.6756 7.01185 12.9882C7.32441 13.3007 7.5 13.7246 7.5 14.1667V16.6667Z" fill="white"/>
            <path d="M16.6657 10.8333H14.1657C13.2817 10.8333 12.4338 11.1845 11.8087 11.8096C11.1836 12.4348 10.8324 13.2826 10.8324 14.1667V16.6667C10.8324 17.5507 11.1836 18.3986 11.8087 19.0237C12.4338 19.6488 13.2817 20 14.1657 20H16.6657C17.5498 20 18.3976 19.6488 19.0228 19.0237C19.6479 18.3986 19.9991 17.5507 19.9991 16.6667V14.1667C19.9991 13.2826 19.6479 12.4348 19.0228 11.8096C18.3976 11.1845 17.5498 10.8333 16.6657 10.8333ZM18.3324 16.6667C18.3324 17.1087 18.1568 17.5326 17.8443 17.8452C17.5317 18.1577 17.1078 18.3333 16.6657 18.3333H14.1657C13.7237 18.3333 13.2998 18.1577 12.9872 17.8452C12.6747 17.5326 12.4991 17.1087 12.4991 16.6667V14.1667C12.4991 13.7246 12.6747 13.3007 12.9872 12.9882C13.2998 12.6756 13.7237 12.5 14.1657 12.5H16.6657C17.1078 12.5 17.5317 12.6756 17.8443 12.9882C18.1568 13.3007 18.3324 13.7246 18.3324 14.1667V16.6667Z" fill="white"/>
            </svg>),
            title: 'Новости',
            description: 'Будьте в курсе событий'
        },
        {
            icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17316C0.00433284 8.00043 -0.1937 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8078C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9971 7.34871 18.9426 4.80684 17.0679 2.9321C15.1932 1.05736 12.6513 0.00286757 10 0ZM10 18.3333C8.35183 18.3333 6.74066 17.8446 5.37025 16.9289C3.99984 16.0132 2.93174 14.7117 2.30101 13.189C1.67028 11.6663 1.50525 9.99075 1.82679 8.37425C2.14834 6.75774 2.94201 5.27288 4.10745 4.10744C5.27288 2.94201 6.75774 2.14833 8.37425 1.82679C9.99076 1.50525 11.6663 1.67027 13.189 2.301C14.7117 2.93173 16.0132 3.99984 16.9289 5.37025C17.8446 6.74066 18.3333 8.35182 18.3333 10C18.3309 12.2094 17.4522 14.3276 15.8899 15.8899C14.3276 17.4522 12.2094 18.3309 10 18.3333Z" fill="white"/>
            <path d="M10.0009 4.16664C9.77992 4.16664 9.56795 4.25443 9.41167 4.41072C9.25539 4.567 9.1676 4.77896 9.1676 4.99997V11.6666C9.1676 11.8876 9.25539 12.0996 9.41167 12.2559C9.56795 12.4122 9.77992 12.5 10.0009 12.5C10.2219 12.5 10.4339 12.4122 10.5902 12.2559C10.7465 12.0996 10.8343 11.8876 10.8343 11.6666V4.99997C10.8343 4.77896 10.7465 4.567 10.5902 4.41072C10.4339 4.25443 10.2219 4.16664 10.0009 4.16664Z" fill="white"/>
            <path d="M10.8343 15C10.8343 14.5397 10.4612 14.1666 10.0009 14.1666C9.54069 14.1666 9.1676 14.5397 9.1676 15C9.1676 15.4602 9.54069 15.8333 10.0009 15.8333C10.4612 15.8333 10.8343 15.4602 10.8343 15Z" fill="white"/>
            </svg>),
            title: 'Важно',
            description: 'Материалы необходимые для ознакомления'
        },
        {
            icon: (<svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00033 6C8.34106 6 7.69659 6.1955 7.14843 6.56177C6.60026 6.92804 6.17302 7.44863 5.92073 8.05772C5.66844 8.66681 5.60243 9.33703 5.73104 9.98363C5.85966 10.6302 6.17713 11.2242 6.6433 11.6904C7.10948 12.1565 7.70342 12.474 8.35003 12.6026C8.99663 12.7312 9.66685 12.6652 10.2759 12.4129C10.885 12.1606 11.4056 11.7334 11.7719 11.1852C12.1382 10.6371 12.3337 9.9926 12.3337 9.33333C12.3337 8.44928 11.9825 7.60143 11.3574 6.97631C10.7322 6.35119 9.88438 6 9.00033 6ZM9.00033 11C8.67069 11 8.34846 10.9023 8.07438 10.7191C7.8003 10.536 7.58667 10.2757 7.46053 9.97114C7.33438 9.6666 7.30138 9.33149 7.36568 9.00818C7.42999 8.68488 7.58873 8.38791 7.82182 8.15482C8.0549 7.92173 8.35187 7.763 8.67518 7.69869C8.99848 7.63438 9.33359 7.66739 9.63813 7.79353C9.94268 7.91968 10.203 8.1333 10.3861 8.40738C10.5692 8.68147 10.667 9.0037 10.667 9.33333C10.667 9.77536 10.4914 10.1993 10.1788 10.5118C9.86628 10.8244 9.44235 11 9.00033 11Z" fill="white"/>
            <path d="M9.00026 21C8.29855 21.0036 7.60618 20.839 6.98115 20.52C6.35611 20.2011 5.81659 19.737 5.40776 19.1667C2.23193 14.7858 0.621094 11.4925 0.621094 9.37749C0.621094 7.1552 1.5039 5.02392 3.07529 3.45252C4.64669 1.88112 6.77797 0.998322 9.00026 0.998322C11.2226 0.998322 13.3538 1.88112 14.9252 3.45252C16.4966 5.02392 17.3794 7.1552 17.3794 9.37749C17.3794 11.4925 15.7686 14.7858 12.5928 19.1667C12.1839 19.737 11.6444 20.2011 11.0194 20.52C10.3943 20.839 9.70197 21.0036 9.00026 21ZM9.00026 2.81749C7.26061 2.81947 5.59277 3.51143 4.36265 4.74155C3.13253 5.97167 2.44058 7.6395 2.43859 9.37916C2.43859 11.0542 4.01609 14.1517 6.87943 18.1008C7.1225 18.4356 7.4414 18.7081 7.81002 18.896C8.17864 19.0839 8.58651 19.1819 9.00026 19.1819C9.41401 19.1819 9.82188 19.0839 10.1905 18.896C10.5591 18.7081 10.878 18.4356 11.1211 18.1008C13.9844 14.1517 15.5619 11.0542 15.5619 9.37916C15.5599 7.6395 14.868 5.97167 13.6379 4.74155C12.4077 3.51143 10.7399 2.81947 9.00026 2.81749Z" fill="white"/>
            </svg>
            ),
            title: 'Контакты',
            description: 'Свяжитесь с нами'
        },
    ]
    const subnavigation = [
        // {
        //     title: 'Ваш менеджер',
        //     img: managerAvatar,
        //     subtitle: 'Скударнов Сергей Александрович',
        //     butonSign: 'Связаться',
        //     route: ''
        // },
        {
            title: 'Отзывы',
            img: reveiwImg,
            subtitle: 'Отзывы об услугах и опыт наших клиентов',
            butonSign: 'Смотреть',
            route: ''
        },
        {
            title: 'Тех. поддержка',
            img: supportImg,
            subtitle: 'Быстро решаем возникшие проблемы',
            butonSign: 'Обратиться',
            route: ''
        },
        {
            title: 'Привелегии',
            img: privelegiiImg,
            subtitle: 'Программа Привилегий для наших постоянных Клиентов',
            butonSign: 'Ознакомиться',
            route: ''
        },
    ]
    return(
        <section className="personal-cabinet">
            <div className="title">Личный кабинет по SEO</div>
            <div className="content-block" >
                <div className="seo-navigation" >
                {navigation.map((item, index )=>
                (  <div className="navigation_row"  key={index} >
                                <div className="icon">{item.icon}</div>
                                <div className="wrapper">
                                    <div className="item-title"> {item.title}</div>
                                    <div className="item-description">{item.description}</div>
                                </div>
                            </div>
                            ))}
                                    

                </div>

                <div className="seo-subnavigation " >
                            <div className="subnavigation_item item-manager"   >
                                <div className="wrapper">
                                    <div className="block-title">
                                    Ваш менеджер
                                    </div>

                                    <img src={managerAvatar} className="block-image" alt="admin"/>
                                    
                                    <div className="block-subtitle ">
                                        <span className="bold_txt">Скударнов</span>
                                        <br/> Сергей
                                        <br/> Александрович    
                                    </div>

                               
                                </div>
                                    <div className="active_btn">Связаться</div>
                               
                            </div>
                       {subnavigation.map((item, index )=>
                            (<div className="subnavigation_item"  key={index} >
                                <div className="wrapper">
                                    <div className="block-title">{item.title}</div>
                                    <img src={item.img} className="block-image" alt="admin"/>
                                    {/* <div className="block-image"></div> */}
                                    <div className="block-subtitle">{item.subtitle}</div>

                               
                                </div>
                                    <div className="active_btn">{item.butonSign}</div>
                               
                            </div>
                            ))}

                        

                </div>            

            </div>
        </section>
        
    )}

    export default PersonalCabinet;