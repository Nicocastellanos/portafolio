import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Footer.css'

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='contacto'>
        <div className='titles'>
          <h1 className='contact-title'>Contact</h1>
          <p className='message'>Si estas interesado en conocerme mas y conocer a mas profundidad mis poryectos, da click al boton y enviame un mensaje</p>
        </div>
        <a className='button-footer' href='mailto:nicolas.catellanos012@gmail.com'>Contact Me</a>
      </div>
      <hr className='hr'/>
      <div className='redes'>
        <div className='name-footer'><h1 className='name-footer'>nicocastellanos</h1></div>
        <div className='links-redes'>
          <Link to='https://github.com/Nicocastellanos' className='link-footer'><img src="./src/assets/github.svg" alt="github" className='logo'/></Link>
          <Link to='/' className='link-footer'><img src="./src/assets/tik-tok.svg" alt="tik-tok" className='logo'/></Link>
          <Link to='/' className='link-footer'><img src="./src/assets/instagram.svg" alt="instagram" className='logo'/></Link>
          <Link to='/' className='link-footer'><img src="./src/assets/linkedin.svg" alt="linkedin" className='logo'/></Link>
        </div>
      </div>
    </div>
  )
}
