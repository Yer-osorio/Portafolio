import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import Menu from './Components/Menu'
import Aspirations from './Components/Aspirations'
import Proyects from './Components/Proyects'
import Contact from './Components/Contact'
import PortfolioInfo from './Components/PortfolioInfo';



function App() {
  return (
    <div className="App">
      <Menu/>
      <Home/>
      <Aspirations/>
      <Proyects/>
      <Contact/>
    </div>
  );
}

export default App;
