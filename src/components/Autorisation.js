import React, {useState, useContext} from 'react'
import AutorisationWrapper from './AutorisationWrapper'
import { Context } from '..';

import { useAuthState } from 'react-firebase-hooks/auth';

export default function Autorisation() {
    // const {auth} = useContext(Context)
    // let [userlogin2] = useAuthState(auth)
    // console.log(userlogin2)

    
    // const [user1, setUser1] = useState('11 ');
    // const {authlog} = useContext(Context)

    // function ChangeUid(value) {
    //         return(
    //             setUser1(value)
    //         )            
    //     }
           

    return (
        <div>
            
        <AutorisationWrapper
        //  user1={user1} 
        //  ChangeUid={ChangeUid}
         />
            {/* console.log({user1, "auth"}) */}
        </div>
    )
}
