
import './App.scss';
import React, {useContext } from "react";

// import Header from './components/Header'
// import MainBlock from './components/MainBlock'
// import Footer from './components/Footer'
// import Autorisation from './components/Autorisation';
import AppRouter from './components/AppRouter';
// import MainPage from './components/MainPage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '.';
import Loader from './components/Loader';



function App() {

  const {auth} =  useContext( Context)
  const [
    user, 
    loading,
     error
    ] = useAuthState(auth)

  if (loading) {
    
    return <Loader/>
  }

  
  return (
    <div className="App">


      {/* <Autorisation/> */}
    <AppRouter/>

    {/* <MainPage/> */}


    </div>
  );
}

export default App;
