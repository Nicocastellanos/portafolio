import React from 'react';
import '../projectos/Projectos.css';
import { Link } from 'react-router-dom';

export default function Project1() {
  return (
    <div className='projects-container'>
        <h1 className='title-project1'>Todo Task</h1>
        <img src="" alt="Todo task" />
        <p className='p-pj'>
          Esta es una aplicacion de tareas donde las personas podran crear tareas 
          y decidir si ya las completaron o quieren eliminarlas.
          esta aplicacion puede ser muy util para organizar nuestro dia a dia para asi
          saber que cosas tenemos pendientes por hacer, y que cosas ya realizamos
        </p>
        <p className='p2-pj'>Este proyecto lo realice con: </p>
          <ul className='ul-pj1'>
            <li className='li-1'>HTML</li>
            <li className='li-1'>JavaScript</li>
            <li className='li-1'>Css</li>
            <li className='li-1'>React js</li>
            <li className='li-1'>Mui material</li>
            <li className='li-1'>Git y Github</li>
          </ul>
        <div className='links'>
          <Link to='https://nicocastellanos.github.io/Todo-task/' className='link-pj1' target='_blank'>Ver Projecto</Link>
          <Link to='https://github.com/Nicocastellanos/Todo-task' className='link-pj1'>View Code</Link>
        </div>
    </div>
  )
}
