
import React from "react";
import Sidebar from './Sidebar'
import Guid from './Guid'
import PersonalCabinet from './PersonalCabinet'
import General from './General'
import Dialog from './Dialog'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function MainBlock() {
    return(
        <section className="main_block">
        <Router >
            <div className="container">
                <Sidebar/>
                <div className="main_content">
            
                    <Switch>
                        <Route exact path='/' component={Guid}>
                        {/* <Guid /> */}
                        </Route>

                        <Route path='/home' component={Guid}>
                        {/* <Guid /> */}
                        </Route>

                        <Route exact path='/seo'>
                            <PersonalCabinet/>
                        </Route>

                        <Route path='/dialog'>
                             <Dialog/>
                        </Route>
                        <Route path='/seo/main'>
                             <General/> 
                        </Route>


                    </Switch>
                
                {/* <Guid/> */}
                {/* <PersonalCabinet/>  */}
                {/* <General/>  */}
            
                </div>
            </div>
        </Router >
        </section>
        
    )}

    export default MainBlock;