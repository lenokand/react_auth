
import home from '../img/home.svg'; 
import seo from '../img/seo.svg'; 
import dialog from '../img/dialog.svg'; 
import docs from '../img/docs.svg'; 
import notif from '../img/notif.svg'; 
import settings from '../img/settings.svg'; 

function Sidebar() {
    return(
        <div className="sidebar">
            <nav>
                <div>
                <img src={home}  alt="home"/>

                </div>
                <div>
                <img src={seo}  alt="seo"/>

                </div>
                <div>
                <img src={dialog}  alt="dialog"/>

                </div>
                <div>
                <img src={docs}  alt="docs"/>

                </div>
                <div>
                <img src={notif}  alt="notif"/>

                </div>
                <div>
                <img src={settings}  alt="settings"/>

                </div>
            </nav>
        </div>
        
    )}

    export default Sidebar;