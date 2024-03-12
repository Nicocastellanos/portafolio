import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import Project1 from './pages/projectos/Project1';
import Project2 from './pages/projectos/Project2';
import Project3 from './pages/projectos/Project3';
import Project4 from './pages/projectos/Project4';

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/project1' element={<Project1/>}></Route>
              <Route path='/project2' element={<Project2/>}></Route>
              <Route path='/project3' element={<Project3/>}></Route>
              <Route path='/project4' element={<Project4/>}></Route>
          </Routes>
        </BrowserRouter>
  )
}

export default App
