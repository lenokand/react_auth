import React from 'react'
import {
   
    Switch,
    Route
   
  } from "react-router-dom";

export default function UserInfo(props) {
    return (
       
            
            <div >
                     {props.dialogMenu.map((item, index )=>
                                              (       
                                                  <Switch key={index}>
                                                      <Route exact path={`/dialog/${index + 1}`}>
                                                      
                                                      <div className={`autor ${item.online}`} >
                                                              
                                                              <img src={item.avatar}  className="dialog-avatar"/>
                                                              <div className="wrapper">
                                                                  <div className="autor-name"> {item.name}</div>  
                                                                  <div className="status ">В сети</div>
                                                              </div>
                                                      
                                                          </div>
                                                      </Route> 
                                                  </Switch>
                  
                 ))}
                                        
            </div>



       
    )
}
