import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import Project1 from './pages/projectos/Project1';
import Project2 from './pages/projectos/Project2';
import Project3 from './pages/projectos/Project3';
import Project4 from './pages/projectos/Project4';
import Footer from './components/Footer';

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/TodoTask' element={<Project1/>}></Route>
              <Route path='/GestorDeTareas' element={<Project2/>}></Route>
              <Route path='/Evently' element={<Project3/>}></Route>
              <Route path='/Oddy' element={<Project4/>}></Route>
          </Routes>
        <div className='footer'>
          <Footer></Footer>
        </div>
        </BrowserRouter>
  )
}

export default App
