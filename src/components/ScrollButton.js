
import React, {useState} from 'react';

// import { Button } from './Styles';

const arrow_up = (<svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6798 3.39183C11.3951 3.11408 11.0091 2.95804 10.6066 2.95804C10.2041 2.95804 9.8181 3.11408 9.53345 3.39183L2.57239 10.1848C2.28612 10.4547 1.90269 10.604 1.50471 10.6006C1.10672 10.5972 0.726012 10.4414 0.444583 10.1667C0.163153 9.89204 0.0035171 9.52045 5.86501e-05 9.13199C-0.0033998 8.74353 0.149596 8.36928 0.426092 8.08986L7.38715 1.30134C8.24109 0.468093 9.39913 -1.30715e-06 10.6066 -1.47507e-06C11.8141 -1.64299e-06 12.9721 0.468092 13.8261 1.30134L20.7871 8.09578C21.0636 8.37521 21.2166 8.74945 21.2131 9.13791C21.2097 9.52637 21.0501 9.89797 20.7686 10.1727C20.4872 10.4474 20.1065 10.6032 19.7085 10.6065C19.3105 10.6099 18.9271 10.4606 18.6408 10.1907L11.6798 3.39183Z" fill="white"/>
</svg>)

const ScrollButton = () =>{
  
    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 100){
        setVisible(true)
      } 
      else if (scrolled <= 100){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
       
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
    
       <div className="toTop" onClick={scrollToTop} 
       style={{display: visible ? 'flex' : 'none'}} >
           {arrow_up}
        </div>
   
    );
  }
    
  export default ScrollButton;