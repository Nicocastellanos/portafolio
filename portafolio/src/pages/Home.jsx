import React from 'react'
import Header from '../components/Header'
import Tecnologias from '../components/Tecnologias'
import Projects from '../components/Projects'
import '../css/App.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <Header/>
        <hr className="hr"/>
        <div className="tecnologias">
            <Tecnologias titulo="HTML" descripcion="1 año de experiencia"/>
            <Tecnologias titulo="CSS" descripcion="1 año de experiencia"/>
            <Tecnologias titulo="JavaScript" descripcion="1 año de experiencia"/>
            <Tecnologias titulo="React" descripcion="6 meses de experiencia"/>
            <Tecnologias titulo="MongoDB" descripcion="4 meses de experiencia"/>
            <Tecnologias titulo="Express" descripcion="4 meses de experiencia"/>
        </div>
          <h1 className="title-project">Projects</h1>
        <div className="project">
            <Link to='/project1'><Projects img ="./src/assets/images/foto.jpg" titulo="Todo Task" tec="HTML | CSS | JavaScript | React.js | Material UI"/></Link>
            <Link to='/project2'><Projects img ="./src/assets/images/foto.jpg" titulo="Gestor de Tareas" tec="MongoDB | Express.js | Node.js"/></Link>
            <Link to='/project3'><Projects img ="./src/assets/images/foto.jpg" titulo="Prueba 3" tec="HTML | CSS"/></Link>
            <Link to='/project4'><Projects img ="./src/assets/images/foto.jpg" titulo="Prueba 4" tec="HTML | CSS | JavaScript"/></Link>
            <Link to='/project5'><Projects img ="./src/assets/images/foto.jpg" titulo="Prueba 5" tec="HTML | CSS"/></Link>
            <Link to='/project6'><Projects img ="./src/assets/images/foto.jpg" titulo="Prueba 6" tec="HTML | CSS  | JavaScript"/></Link>
        </div>
    </div>
  )
}
