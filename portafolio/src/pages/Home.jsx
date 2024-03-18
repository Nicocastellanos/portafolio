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
            <Link to='/TodoTask'><Projects img ="./src/assets/images/foto.jpg" titulo="Todo Task" tec="HTML | CSS | JavaScript | React.js | Material UI"/></Link>
            <Link to='/GestorDeTareas'><Projects img ="./src/assets/images/foto.jpg" titulo="Gestor de Tareas" tec="MongoDB | Express.js | Node.js"/></Link>
            <Link to='/Evently'><Projects img ="./src/assets/images/foto.jpg" titulo="Evently" tec="HTML | CSS | JavaScript | React.js | ChakraUI"/></Link>
            <Link to='/Oddy'><Projects img ="./src/assets/images/foto.jpg" titulo="Oddy" tec="HTML | CSS | JavaScript | React.js"/></Link>
        </div>
    </div>
  )
}
