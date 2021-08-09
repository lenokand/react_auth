
import './App.scss';
import React from "react";
import Header from './components/Header'
import MainBlock from './components/MainBlock'
import Footer from './components/Footer'
import Autorisation from './components/Autorisation';


function App() {
  return (
    <div className="App">


      {/* <Autorisation/> */}


      <header>
        <Header/>
       
      </header>

      <MainBlock/>

    <Footer/>
    </div>
  );
}

export default App;
