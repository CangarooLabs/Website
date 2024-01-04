import './components/Header/Header';
import Header from './components/Header/Header';
import Mainsection from './components/mainsection/Mainsection';
import Stat from './components/Stat/Stat';
import Services from './components/Services/Services';




function App() {
  return (
    <div className="App">
      <Header/>
      <Mainsection/> 
      <Stat/>
      <Services/>
      
</div>
  );
}

export default App;
