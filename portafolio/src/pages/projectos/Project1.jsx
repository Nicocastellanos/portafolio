import React from 'react';
import '../projectos/Projectos.css';
import { Link } from 'react-router-dom';

export default function Project1() {
  return (
    <div className='project1-container'>
        <h1 className='title-project1'>Todo Task</h1>
        <img src="" alt="Todo task" />
        <p className='p-pj1'>
          Esta es una aplicacion de tareas donde las personas podran crear tareas 
          y decidir si ya las completaron o quieren eliminarlas.
          esta aplicacion puede ser muy util para organizar nuestro dia a dia para asi
          saber que cosas tenemos pendientes por hacer, y que cosas ya realizamos
        </p>
        <p className='p2-pj1'>Este proyecto lo realice con: </p>
          <ul>
            <li>HTML</li>
            <li>JavaScript</li>
            <li>Css</li>
            <li>React js</li>
            <li>Mui material</li>
            <li>Github</li>
          </ul>
        <Link to='https://nicocastellanos.github.io/Todo-task/'>Ver Projecto</Link>
    </div>
  )
}
