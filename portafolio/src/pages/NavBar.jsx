import React from 'react'
import '../css/Header.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='nav'>
        <div className='name-box'>
            <Link to='/' className='name'>nicocastellanos</Link>
        </div>
        <div className='links'>
            <Link to='' className='link'><img src="./src/assets/github.svg" alt="github" className='logo'/></Link>
            <Link to='' className='link'><img src="./src/assets/instagram.svg" alt="instagram" className='logo'/></Link>
            <Link to='' className='link'><img src="./src/assets/tik-tok.svg" alt="tik tok" className='logo'/></Link>
            <Link to='' className='link'><img src="./src/assets/linkedin.svg" alt="linkedin" className='logo'/></Link>
        </div>
    </nav>
  )
}
