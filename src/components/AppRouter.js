import React, {useContext } from "react";

import { Route, Switch, Redirect } from "react-router";
import { privateRouts, publicRouts } from "../routs";
import { LOGIN_ROUTE, MAIN_ROUTE } from "../utils/const";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Context } from "..";
import { useAuthState } from 'react-firebase-hooks/auth';

const AppRouter = () => {
//  let userlogin2 = ['user', false, 'error']
 const {auth} = useContext(Context)
 let [userlogin2] = useAuthState(auth)
//  console.log(userlogin2)

    


    // onAuthStateChanged(auth, (user) => {
    // if (user) {
    //     // User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/firebase.User
    //     userlogin = true

    //     const uid = user.uid;
    //     // ...
    // } else {
    //     // User is signed out
    //     // ...
    // }
    // });


// console.log(userlogin2)



return userlogin2 ? 
(
    <Switch>
        {privateRouts.map(({path, Component}) =>
            <Route path={path} component={Component} exact={true} key={path}/>
        )}

        <Redirect to={MAIN_ROUTE}/>
      
    </Switch>
    
)
:
(
    <Switch>
        {publicRouts.map(({path, Component}) =>
            <Route path={path} component={Component} exact={true} key={path}/>
        )}

        <Redirect to={LOGIN_ROUTE}/>
        
    </Switch>
)
}

export default AppRouter;