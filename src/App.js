
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Discription from './Components/Discription';
import Header from './Components/Header';
import NFTcard from './Components/NFTcard';
import Sidebar from './Components/Sidebar';
import SubHeading from './Components/SubHeading';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Staking from './pages/Staking';
import SPage from './Components/SPage';



function App() {
  return (
    
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/staking' element={<Staking />}></Route>
    </Routes>
    
  );
}

export default App;
