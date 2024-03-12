import React from 'react'
import { Link } from 'react-router-dom'

export default function Project2() {
  return (
    <div className='projects-container'>
      <h1 className='title-project2'>Gestor de Tareas</h1>
      <img src="" alt="projecto 2" />
      <p className='p-pj1'>Esta aplicacion es paracida a la de Todo Task, solo que en este proyecto solo 
        realice el backend con las mismas funcionaliades que el proyecto 
        de todo task donde me permite ver, crear, actualizar y borrar una tarea. 
       </p>
       <p className='p2-pj1'>Para este proyecto use: </p>
      <ul>
        <li className='li-2'>MongoDB</li>
        <li className='li-2'>Node js</li>
        <li className='li-2'>Express js</li>
        <li className='li-2'>Git y Github</li>
      </ul>
      <Link to='https://github.com/Nicocastellanos/MongoDB-tasklist' className='link-pj1'>View Code</Link>
  </div>
  )
}
