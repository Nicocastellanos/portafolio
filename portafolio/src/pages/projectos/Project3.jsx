import React from 'react'
import '../projectos/Projectos.css'
import { Link } from 'react-router-dom'

export default function Project3() {
  return (
    <div className='projects-container'>
      <h1 className='title-project3'>Evently</h1>
      <p className='p-pj'>Esta aplicacion es un gestor de eventos, donde los usuarios podran crear eventos 
        para asi organizar y manejar mejor sus empresas. Despues de que la gente cree sus eventos
        , la gente puede vizualizar en otra pagina los eventos que han creado par asi editarlos completarlos o borrarlos.</p>
      <p className='p2-pj'>Para este proyecto use: </p>
      <ul>
        <li className='li-3'>HTML</li>
        <li className='li-3'>CSS</li>
        <li className='li-3'>JavaScript</li>
        <li className='li-3'>React js</li>
        <li className='li-3'>Chakra UI</li>
      </ul>
      <div className='links'>
          <Link to='https://nicocastellanos.github.io/evaluacion-react/' className='link-pj1' target='_blank'>Ver Projecto</Link>
          <Link to='https://github.com/Nicocastellanos/evaluacion-react' className='link-pj1'>View Code</Link>
      </div>
    </div>
  )
}
