import logo from '../img/logo.svg'; 
import Autherisationnav from './Autherisationnav'

function Header() {
    return (
      <div className="container">
        <menu>
            
        <img src={logo} className="App-logo" alt="logo"/>
        
        <Autherisationnav/>
        </menu>
      </div>
    
    )
}

export default Header;