
import './App.scss';
import React from "react";
import Header from './components/Header'
import MainBlock from './components/MainBlock'
import Footer from './components/Footer'
import Autorisation from './components/Autorisation';
import AppRouter from './components/AppRouter';
import MainPage from './components/MainPage';


function App() {
  return (
    <div className="App">


      {/* <Autorisation/> */}
    <AppRouter/>

    {/* <MainPage/> */}


    </div>
  );
}

export default App;
