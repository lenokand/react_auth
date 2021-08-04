
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import React from "react";
import Sidebar from './Sidebar'
import Guid from './Guid'
import PersonalCabinet from './PersonalCabinet'
import General from './General'
import Dialog from './Dialog'
import Settings from "./Settings";
import Docs from "./Docs";
import SeoPosition from "./SeoPosition";
import SeoIndex from "./SeoIndex";
import SeoReport from "./SeoReport";
import SeoServices from "./SeoServices";
import SeoInspection from "./SeoInspection";

function MainBlock() {
    return(
        <section className="main_block">
       
            <div className="container">
                <Sidebar/>
                <div className="main_content">
            
                    <Switch>
                        <Route exact path='/' component={Guid}>
                     
                        </Route>

                        <Route path='/home' component={Guid}>
                       
                        </Route>

                        <Route exact path='/seo'>
                            <PersonalCabinet/>
                        </Route>

                        <Route path='/seo/main'>
                             <General/> 
                        </Route>
                        <Route path='/seo/position'>
                             <SeoPosition/>
                        </Route>
                        <Route path='/seo/index'>
                             <SeoIndex/>
                        </Route>
                        <Route path='/seo/report'>
                             <SeoReport/>
                        </Route>
                        <Route path='/seo/services'>
                             <SeoServices/>
                        </Route>
                        <Route path='/seo/inspection'>
                             <SeoInspection/>
                        </Route>

                        <Route path='/dialog'>
                             <Dialog/>
                        </Route>
                        <Route path='/docs'>
                             <Docs/>
                        </Route>
                        <Route path='/settings'>
                             <Settings/>
                        </Route>
                        


                    </Switch>
                
              
            
                </div>
            </div>
       
        </section>
        
    )}

    export default MainBlock;