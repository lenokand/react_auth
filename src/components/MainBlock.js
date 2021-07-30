
import Sidebar from './Sidebar'
import Guid from './Guid'
import PersonalCabinet from './PersonalCabinet'
import General from './General'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function MainBlock() {
    return(
        <section className="main_block">
        <div className="container">


        <Sidebar/>
        <div className="main_content">
        <Router >
            <Switch>
                <Route exact path='/'>
                    <Guid />
                </Route>
                <Route path='/home'>
                1
                </Route>

                <Route path='/seo'>
                    <PersonalCabinet/>
                </Route>

                <Route path='/dialog'>
                    <General/> 
                </Route>
                    


            </Switch>
        </Router >
        {/* <Guid/> */}
        {/* <PersonalCabinet/>  */}
        {/* <General/>  */}
      
        </div>
      
        
        </div>
        </section>
        
    )}

    export default MainBlock;