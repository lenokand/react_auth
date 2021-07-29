
import Sidebar from './Sidebar'
import Guid from './Guid'
import PersonalCabinet from './PersonalCabinet'

function MainBlock() {
    return(
        <section className="main_block">
        <div className="container">


        <Sidebar/>
        <div className="main_content">
      
        {/* <Guid/> */}
        <PersonalCabinet/>
      
        </div>
      
        
        </div>
        </section>
        
    )}

    export default MainBlock;