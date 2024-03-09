import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import Project1 from './pages/projectos/Project1';

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/project1' element={<Project1/>}></Route>
          </Routes>
        </BrowserRouter>
  )
}

export default App
