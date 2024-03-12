import React from 'react'
import '../css/Header.css'

export default function Header() {
  return (
    <div className='container'>
        <div className='presentacion'>
          <h1 className='saludo'>Nice to meet you! 
            I'm <span className='my-name'>Nicolas Castellanos.</span></h1>  
          <p className='descripcion'>Vivo en Colombia, y soy un apasionado desarrollador web
            que le gusta enfocarse en UX/UI. 
          </p>
          <a href="mailto:nicolas.castellanos012@gmail.com" className='button' target='_blank'>Contact Me</a>
        </div>
        <div className='imagen'>
           <img src="./src/assets/images/foto.jpg" alt="foto" className='img'/> 
        </div>
  
    </div>
  )
}
