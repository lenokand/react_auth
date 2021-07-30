
import './App.scss';
import React from "react";
import Header from './components/Header'
import MainBlock from './components/MainBlock'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <header>
        <Header/>
       
      </header>

      <MainBlock/>

    <Footer/>
    </div>
  );
}

export default App;
