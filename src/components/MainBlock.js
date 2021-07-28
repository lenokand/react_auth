
import Sidebar from './Sidebar'
import Guid from './Guid'

function MainBlock() {
    return(
        <section className="main_block">
        <div className="container">


        <Sidebar/>
        <div className="main_content">
      
        <Guid/>
      
        </div>
      
        
        </div>
        </section>
        
    )}

    export default MainBlock;