import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



const home = ( <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.2675 7.53968L12.9467 1.21802C12.1644 0.438012 11.1047 0 10 0C8.89528 0 7.83563 0.438012 7.05334 1.21802L0.732509 7.53968C0.499531 7.77117 0.314818 8.0466 0.189079 8.35C0.0633393 8.65341 -0.000925333 8.97875 1.00662e-05 9.30718V17.488C1.00662e-05 18.151 0.263402 18.7869 0.732242 19.2558C1.20108 19.7246 1.83697 19.988 2.50001 19.988H17.5C18.163 19.988 18.7989 19.7246 19.2678 19.2558C19.7366 18.7869 20 18.151 20 17.488V9.30718C20.0009 8.97875 19.9367 8.65341 19.8109 8.35C19.6852 8.0466 19.5005 7.77117 19.2675 7.53968ZM12.5 18.3213H7.5V15.043C7.5 14.38 7.76339 13.7441 8.23223 13.2752C8.70108 12.8064 9.33696 12.543 10 12.543C10.663 12.543 11.2989 12.8064 11.7678 13.2752C12.2366 13.7441 12.5 14.38 12.5 15.043V18.3213ZM18.3333 17.488C18.3333 17.709 18.2455 17.921 18.0892 18.0773C17.933 18.2335 17.721 18.3213 17.5 18.3213H14.1667V15.043C14.1667 13.9379 13.7277 12.8781 12.9463 12.0967C12.1649 11.3153 11.1051 10.8763 10 10.8763C8.89493 10.8763 7.83513 11.3153 7.05372 12.0967C6.27232 12.8781 5.83334 13.9379 5.83334 15.043V18.3213H2.50001C2.27899 18.3213 2.06703 18.2335 1.91075 18.0773C1.75447 17.921 1.66668 17.709 1.66668 17.488V9.30718C1.66745 9.08633 1.75517 8.87467 1.91084 8.71801L8.23167 2.39885C8.70142 1.93129 9.33722 1.66881 10 1.66881C10.6628 1.66881 11.2986 1.93129 11.7683 2.39885L18.0892 8.72051C18.2442 8.87655 18.3319 9.0872 18.3333 9.30718V17.488Z" />
                </svg>)
const seo = ( <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8333 0H4.16667C3.062 0.00132321 2.00296 0.440735 1.22185 1.22185C0.440735 2.00296 0.00132321 3.062 0 4.16667V10.8333C0.00132321 11.938 0.440735 12.997 1.22185 13.7782C2.00296 14.5593 3.062 14.9987 4.16667 15H15.8333C16.938 14.9987 17.997 14.5593 18.7782 13.7782C19.5593 12.997 19.9987 11.938 20 10.8333V4.16667C19.9987 3.062 19.5593 2.00296 18.7782 1.22185C17.997 0.440735 16.938 0.00132321 15.8333 0ZM18.3333 10.8333C18.3333 11.4964 18.0699 12.1323 17.6011 12.6011C17.1323 13.0699 16.4964 13.3333 15.8333 13.3333H4.16667C3.50363 13.3333 2.86774 13.0699 2.3989 12.6011C1.93006 12.1323 1.66667 11.4964 1.66667 10.8333V4.16667C1.66667 3.50363 1.93006 2.86774 2.3989 2.3989C2.86774 1.93006 3.50363 1.66667 4.16667 1.66667H15.8333C16.4964 1.66667 17.1323 1.93006 17.6011 2.3989C18.0699 2.86774 18.3333 3.50363 18.3333 4.16667V10.8333Z" />
                <path d="M7.11767 9.16665C6.78512 9.16665 6.50949 9.09511 6.29078 8.95204C6.07208 8.80897 5.91929 8.61566 5.8324 8.37213L6.51997 7.96574C6.63682 8.24884 6.84354 8.3904 7.14014 8.3904C7.38581 8.3904 7.50864 8.31886 7.50864 8.17578C7.50864 8.08142 7.43824 8.00531 7.29743 7.94747C7.23751 7.92312 7.10568 7.88202 6.90196 7.82419C6.61435 7.73895 6.38666 7.62023 6.21888 7.46802C6.05111 7.31277 5.96722 7.09816 5.96722 6.82419C5.96722 6.5289 6.07058 6.28994 6.2773 6.10729C6.48702 5.92464 6.74767 5.83332 7.05925 5.83332C7.32289 5.83332 7.55658 5.89572 7.7603 6.02053C7.96403 6.14534 8.11982 6.32647 8.22767 6.56391L7.55358 6.96574C7.45471 6.7283 7.29143 6.60957 7.06374 6.60957C6.96787 6.60957 6.89447 6.62936 6.84354 6.66894C6.7956 6.70851 6.77164 6.75874 6.77164 6.81962C6.77164 6.88964 6.80759 6.949 6.87949 6.9977C6.95439 7.04641 7.09819 7.10273 7.31091 7.16665C7.4637 7.21231 7.58654 7.25493 7.67941 7.29451C7.77228 7.33408 7.87415 7.39192 7.985 7.46802C8.09585 7.54108 8.17824 7.63697 8.23216 7.75569C8.28609 7.87137 8.31306 8.00836 8.31306 8.16665C8.31306 8.4802 8.2037 8.72525 7.985 8.90181C7.76629 9.07837 7.47718 9.16665 7.11767 9.16665Z" />
                <path d="M9.40993 8.33104H10.6278V9.09816H8.60551V5.90181H10.6053V6.66437H9.40993V7.10729H10.493V7.86072H9.40993V8.33104Z" />
                <path d="M13.6849 8.6872C13.3673 9.00683 12.9778 9.16665 12.5165 9.16665C12.0551 9.16665 11.6641 9.00683 11.3435 8.6872C11.026 8.36452 10.8672 7.96878 10.8672 7.49999C10.8672 7.03119 11.026 6.63697 11.3435 6.31734C11.6641 5.99466 12.0551 5.83332 12.5165 5.83332C12.9778 5.83332 13.3673 5.99466 13.6849 6.31734C14.0055 6.63697 14.1657 7.03119 14.1657 7.49999C14.1657 7.96878 14.0055 8.36452 13.6849 8.6872ZM11.9098 8.12556C12.0716 8.2869 12.2738 8.36757 12.5165 8.36757C12.7591 8.36757 12.9614 8.2869 13.1231 8.12556C13.2849 7.96117 13.3658 7.75265 13.3658 7.49999C13.3658 7.24732 13.2849 7.04032 13.1231 6.87898C12.9614 6.7146 12.7591 6.63241 12.5165 6.63241C12.2738 6.63241 12.0716 6.7146 11.9098 6.87898C11.748 7.04032 11.6671 7.24732 11.6671 7.49999C11.6671 7.75265 11.748 7.96117 11.9098 8.12556Z" />
                </svg>)
const dialog = ( <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8333 0H4.16667C3.062 0.00132321 2.00296 0.440735 1.22185 1.22185C0.440735 2.00296 0.00132321 3.062 0 4.16667L0 10C0.00132321 11.1047 0.440735 12.1637 1.22185 12.9448C2.00296 13.7259 3.062 14.1653 4.16667 14.1667H15.8333C16.938 14.1653 17.997 13.7259 18.7782 12.9448C19.5593 12.1637 19.9987 11.1047 20 10V4.16667C19.9987 3.062 19.5593 2.00296 18.7782 1.22185C17.997 0.440735 16.938 0.00132321 15.8333 0ZM4.16667 1.66667H15.8333C16.3323 1.66765 16.8196 1.81793 17.2325 2.09817C17.6453 2.37841 17.9649 2.77579 18.15 3.23917L11.7683 7.955C11.2987 8.42276 10.6628 8.68539 10 8.68539C9.33715 8.68539 8.70131 8.42276 8.23167 7.955L1.85 3.23917C2.03512 2.77579 2.35468 2.37841 2.76754 2.09817C3.1804 1.81793 3.66768 1.66765 4.16667 1.66667ZM15.8333 12.5H4.16667C3.50363 12.5 2.86774 12.2366 2.3989 11.7678C1.93006 11.2989 1.66667 10.663 1.66667 10V5.41667L7.05333 9.13333C7.83552 9.91355 8.89521 10.3517 10 10.3517C11.1048 10.3517 12.1645 9.91355 12.9467 9.13333L18.3333 5.41667V10C18.3333 10.663 18.0699 11.2989 17.6011 11.7678C17.1323 12.2366 16.4964 12.5 15.8333 12.5Z" />
                </svg>)
const docs = ( <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8333 3.33333H14.9167C14.7233 2.39284 14.2115 1.54779 13.4677 0.940598C12.7239 0.333408 11.7935 0.0012121 10.8333 0L9.16667 0C8.2065 0.0012121 7.2761 0.333408 6.53229 0.940598C5.78848 1.54779 5.27675 2.39284 5.08333 3.33333H4.16667C3.062 3.33466 2.00296 3.77407 1.22185 4.55518C0.440735 5.3363 0.00132321 6.39534 0 7.5L0 15.8333C0.00132321 16.938 0.440735 17.997 1.22185 18.7782C2.00296 19.5593 3.062 19.9987 4.16667 20H15.8333C16.938 19.9987 17.997 19.5593 18.7782 18.7782C19.5593 17.997 19.9987 16.938 20 15.8333V7.5C19.9987 6.39534 19.5593 5.3363 18.7782 4.55518C17.997 3.77407 16.938 3.33466 15.8333 3.33333ZM9.16667 1.66667H10.8333C11.3485 1.6688 11.8505 1.83007 12.2706 2.12841C12.6906 2.42674 13.0083 2.84758 13.18 3.33333H6.82C6.99174 2.84758 7.30936 2.42674 7.72942 2.12841C8.14948 1.83007 8.65145 1.6688 9.16667 1.66667ZM4.16667 5H15.8333C16.4964 5 17.1323 5.26339 17.6011 5.73223C18.0699 6.20107 18.3333 6.83696 18.3333 7.5V10H1.66667V7.5C1.66667 6.83696 1.93006 6.20107 2.3989 5.73223C2.86774 5.26339 3.50363 5 4.16667 5ZM15.8333 18.3333H4.16667C3.50363 18.3333 2.86774 18.0699 2.3989 17.6011C1.93006 17.1323 1.66667 16.4964 1.66667 15.8333V11.6667H9.16667V12.5C9.16667 12.721 9.25446 12.933 9.41074 13.0893C9.56702 13.2455 9.77899 13.3333 10 13.3333C10.221 13.3333 10.433 13.2455 10.5893 13.0893C10.7455 12.933 10.8333 12.721 10.8333 12.5V11.6667H18.3333V15.8333C18.3333 16.4964 18.0699 17.1323 17.6011 17.6011C17.1323 18.0699 16.4964 18.3333 15.8333 18.3333Z" />
                </svg>
                )
const notif = ( <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.9722 11.3818L16.3891 5.6858C15.925 4.0171 14.9165 2.55139 13.5239 1.52166C12.1312 0.491935 10.4343 -0.0427253 8.70284 0.00266955C6.97142 0.0480644 5.30485 0.67091 3.96805 1.7722C2.63125 2.87349 1.70093 4.39003 1.32497 6.08075L0.0992736 11.5926C-0.0361147 12.2017 -0.0329845 12.8333 0.108433 13.441C0.249851 14.0487 0.525945 14.6168 0.916332 15.1035C1.30672 15.5902 1.80143 15.983 2.36394 16.2529C2.92645 16.5228 3.5424 16.6629 4.16631 16.6629H5.09453C5.28578 17.6047 5.79673 18.4514 6.54082 19.0596C7.28491 19.6678 8.21638 20 9.1774 20C10.1384 20 11.0699 19.6678 11.814 19.0596C12.5581 18.4514 13.069 17.6047 13.2603 16.6629H13.9585C14.6008 16.6629 15.2344 16.5145 15.8098 16.2291C16.3852 15.9438 16.8868 15.5293 17.2755 15.0179C17.6642 14.5066 17.9294 13.9124 18.0504 13.2816C18.1714 12.6509 18.1449 12.0007 17.9731 11.3818H17.9722ZM9.1774 18.3293C8.66224 18.3272 8.16033 18.166 7.74032 17.8677C7.32031 17.5694 7.00272 17.1486 6.831 16.6629H11.5238C11.3521 17.1486 11.0345 17.5694 10.6145 17.8677C10.1945 18.166 9.69256 18.3272 9.1774 18.3293ZM15.9483 14.009C15.7161 14.317 15.4153 14.5667 15.0697 14.7381C14.7242 14.9095 14.3434 14.9979 13.9577 14.9964H4.16631C3.792 14.9963 3.42249 14.9122 3.08505 14.7502C2.7476 14.5883 2.45084 14.3526 2.21667 14.0606C1.98249 13.7686 1.81688 13.4277 1.73205 13.0632C1.64723 12.6986 1.64536 12.3196 1.72659 11.9542L2.95145 6.44154C3.24671 5.11353 3.97742 3.92233 5.02742 3.0573C6.07743 2.19228 7.38646 1.70306 8.74643 1.66743C10.1064 1.63181 11.4392 2.05181 12.5331 2.86068C13.627 3.66954 14.419 4.82085 14.7834 6.13158L16.3666 11.8276C16.4712 12.1987 16.4878 12.5891 16.4152 12.9677C16.3426 13.3464 16.1827 13.7029 15.9483 14.009Z" />
                </svg>)
const settings = (<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.9974 6.66667C8.33813 6.66667 7.69366 6.86217 7.1455 7.22844C6.59733 7.59471 6.17009 8.1153 5.9178 8.72439C5.66551 9.33348 5.5995 10.0037 5.72811 10.6503C5.85673 11.2969 6.1742 11.8909 6.64037 12.357C7.10655 12.8232 7.70049 13.1407 8.3471 13.2693C8.9937 13.3979 9.66392 13.3319 10.273 13.0796C10.8821 12.8273 11.4027 12.4001 11.769 11.8519C12.1352 11.3037 12.3307 10.6593 12.3307 10C12.3307 9.11595 11.9795 8.2681 11.3544 7.64298C10.7293 7.01786 9.88145 6.66667 8.9974 6.66667ZM8.9974 11.6667C8.66776 11.6667 8.34553 11.5689 8.07145 11.3858C7.79737 11.2027 7.58374 10.9424 7.4576 10.6378C7.33145 10.3333 7.29845 9.99816 7.36276 9.67485C7.42706 9.35155 7.5858 9.05458 7.81889 8.82149C8.05197 8.58841 8.34895 8.42967 8.67225 8.36536C8.99555 8.30105 9.33066 8.33406 9.6352 8.4602C9.93975 8.58635 10.2 8.79997 10.3832 9.07405C10.5663 9.34813 10.6641 9.67037 10.6641 10C10.6641 10.442 10.4885 10.866 10.1759 11.1785C9.86335 11.4911 9.43942 11.6667 8.9974 11.6667Z" />
                <path d="M16.7422 11.5833L16.3722 11.37C16.5388 10.4637 16.5388 9.53463 16.3722 8.62833L16.7422 8.415C17.0268 8.25085 17.2762 8.03226 17.4762 7.77172C17.6763 7.51118 17.8231 7.21378 17.9082 6.89651C17.9933 6.57925 18.0151 6.24832 17.9723 5.92263C17.9296 5.59694 17.823 5.28286 17.6589 4.99833C17.4947 4.7138 17.2762 4.46439 17.0156 4.26434C16.7551 4.06428 16.4577 3.91751 16.1404 3.83239C15.8231 3.74726 15.4922 3.72547 15.1665 3.76824C14.8408 3.81101 14.5268 3.91751 14.2422 4.08167L13.8714 4.29583C13.171 3.69743 12.3661 3.23354 11.4972 2.9275V2.5C11.4972 1.83696 11.2338 1.20107 10.765 0.732233C10.2962 0.263392 9.66027 0 8.99723 0C8.33419 0 7.6983 0.263392 7.22946 0.732233C6.76062 1.20107 6.49723 1.83696 6.49723 2.5V2.9275C5.62838 3.23464 4.82377 3.69967 4.12389 4.29917L3.75139 4.08333C3.17676 3.75181 2.49396 3.66214 1.85321 3.83405C1.21246 4.00596 0.666249 4.42536 0.334728 5C0.00320756 5.57464 -0.0864617 6.25743 0.0854466 6.89818C0.257355 7.53893 0.676759 8.08515 1.25139 8.41667L1.62139 8.63C1.45482 9.5363 1.45482 10.4654 1.62139 11.3717L1.25139 11.585C0.676759 11.9165 0.257355 12.4627 0.0854466 13.1035C-0.0864617 13.7442 0.00320756 14.427 0.334728 15.0017C0.666249 15.5763 1.21246 15.9957 1.85321 16.1676C2.49396 16.3395 3.17676 16.2499 3.75139 15.9183L4.12223 15.7042C4.82287 16.3027 5.62805 16.7666 6.49723 17.0725V17.5C6.49723 18.163 6.76062 18.7989 7.22946 19.2678C7.6983 19.7366 8.33419 20 8.99723 20C9.66027 20 10.2962 19.7366 10.765 19.2678C11.2338 18.7989 11.4972 18.163 11.4972 17.5V17.0725C12.3661 16.7654 13.1707 16.3003 13.8706 15.7008L14.2431 15.9158C14.8177 16.2474 15.5005 16.337 16.1412 16.1651C16.782 15.9932 17.3282 15.5738 17.6597 14.9992C17.9912 14.4245 18.0809 13.7417 17.909 13.101C17.7371 12.4602 17.3177 11.914 16.7431 11.5825L16.7422 11.5833ZM14.6189 8.43667C14.9011 9.45922 14.9011 10.5391 14.6189 11.5617C14.5696 11.7396 14.5809 11.9289 14.6508 12.0998C14.7208 12.2707 14.8456 12.4135 15.0056 12.5058L15.9089 13.0275C16.1004 13.138 16.2402 13.3201 16.2974 13.5336C16.3547 13.7472 16.3248 13.9747 16.2143 14.1663C16.1038 14.3578 15.9217 14.4975 15.7082 14.5548C15.4946 14.6121 15.2671 14.5822 15.0756 14.4717L14.1706 13.9483C14.0105 13.8556 13.8241 13.8188 13.6408 13.8437C13.4574 13.8686 13.2876 13.9538 13.1581 14.0858C12.4163 14.843 11.4819 15.3833 10.4556 15.6483C10.2764 15.6944 10.1177 15.7987 10.0044 15.9449C9.89108 16.0911 9.82964 16.2709 9.82973 16.4558V17.5C9.82973 17.721 9.74193 17.933 9.58565 18.0893C9.42937 18.2455 9.21741 18.3333 8.99639 18.3333C8.77538 18.3333 8.56342 18.2455 8.40714 18.0893C8.25086 17.933 8.16306 17.721 8.16306 17.5V16.4567C8.16315 16.2717 8.10171 16.092 7.9884 15.9458C7.87509 15.7996 7.71637 15.6952 7.53723 15.6492C6.51085 15.3831 5.57667 14.8416 4.83556 14.0833C4.706 13.9513 4.53618 13.8661 4.35286 13.8412C4.16954 13.8163 3.98315 13.8531 3.82306 13.9458L2.91973 14.4683C2.82492 14.5239 2.72005 14.5602 2.61117 14.5751C2.50228 14.59 2.39152 14.5832 2.28527 14.5551C2.17902 14.527 2.07938 14.4782 1.99208 14.4114C1.90478 14.3446 1.83154 14.2613 1.77659 14.1661C1.72164 14.0709 1.68606 13.9658 1.67189 13.8568C1.65773 13.7479 1.66526 13.6372 1.69405 13.5311C1.72285 13.425 1.77234 13.3257 1.83967 13.2389C1.90701 13.152 1.99086 13.0793 2.08639 13.025L2.98973 12.5033C3.14969 12.411 3.27446 12.2682 3.34444 12.0973C3.41443 11.9264 3.42567 11.7371 3.37639 11.5592C3.09419 10.5366 3.09419 9.45672 3.37639 8.43417C3.42478 8.25657 3.41301 8.06795 3.34291 7.89774C3.27281 7.72754 3.14832 7.58534 2.98889 7.49333L2.08556 6.97167C1.89405 6.86116 1.75429 6.6791 1.69701 6.46555C1.63973 6.25199 1.66964 6.02442 1.78014 5.83292C1.89065 5.64141 2.07271 5.50164 2.28627 5.44437C2.49982 5.38709 2.72739 5.41699 2.91889 5.5275L3.82389 6.05083C3.98354 6.14376 4.16955 6.18101 4.35267 6.15672C4.53579 6.13244 4.70565 6.048 4.83556 5.91667C5.5773 5.15945 6.51175 4.61918 7.53806 4.35417C7.71775 4.30797 7.87689 4.20313 7.99026 4.05625C8.10362 3.90938 8.16473 3.72887 8.16389 3.54333V2.5C8.16389 2.27899 8.25169 2.06702 8.40797 1.91074C8.56425 1.75446 8.77621 1.66667 8.99723 1.66667C9.21824 1.66667 9.4302 1.75446 9.58648 1.91074C9.74276 2.06702 9.83056 2.27899 9.83056 2.5V3.54333C9.83047 3.7283 9.89192 3.90804 10.0052 4.05423C10.1185 4.20043 10.2773 4.30478 10.4564 4.35083C11.4831 4.61679 12.4176 5.15824 13.1589 5.91667C13.2885 6.04872 13.4583 6.13391 13.6416 6.15881C13.8249 6.1837 14.0113 6.14689 14.1714 6.05417L15.0747 5.53167C15.1695 5.47609 15.2744 5.43981 15.3833 5.42492C15.4922 5.41003 15.6029 5.41683 15.7092 5.44492C15.8154 5.47301 15.9151 5.52184 16.0024 5.58859C16.0897 5.65535 16.1629 5.73872 16.2179 5.83389C16.2728 5.92907 16.3084 6.03417 16.3226 6.14316C16.3367 6.25214 16.3292 6.36285 16.3004 6.46891C16.2716 6.57497 16.2221 6.67429 16.1548 6.76114C16.0875 6.848 16.0036 6.92068 15.9081 6.975L15.0047 7.49667C14.8456 7.58892 14.7215 7.73123 14.6517 7.90141C14.5819 8.07159 14.5704 8.25925 14.6189 8.43667Z" />
                </svg>)

function Sidebar() {
    return(
        <div className="sidebar">
            <nav>
                {/* <Router > */}
                    <Link to="/home">
                    
                        <div className="menu-item">
                        {home}
                        </div >
                    </Link>
                   
                    <Link to="/seo">
                        <div className="menu-item">
                        
                        {seo}
                        
                        </div>
                    </Link>

                    <Link to="/dialog">
                        <div className="menu-item">
                            {dialog}
                            <div className="pointer">3</div>
                        </div>
                    </Link>
                    <Link to="/docs">
                        <div className="menu-item">
                        {docs}
                        

                        </div>
                    </Link>
                    <Link to="/notification">
                        <div className="menu-item">
                            {notif}
                            <div className="pointer">3</div> 
                        </div>
                    </Link>
                    <Link to="/settings">
                        <div className="menu-item">
                         {settings}
                        

                        </div>
                    </Link>

                {/* </Router> */}
            </nav>
        </div>
        
    )}

    export default Sidebar;