import React from 'react';
import Header from './components/Header/Header';
import Mainsection from './components/mainsection/Mainsection';
import Stat from './components/Stat/Stat';
import Services from './components/Services/Services';
import Login from "./Pages/login/login"



function App() {
  return (
    <div className="App">
     
      <Header/>
      <Mainsection/> 
      <Stat/>
      <Services/>
      <div>
      <Login/>
      </div>
      
</div> 
  );
}

export default App;
