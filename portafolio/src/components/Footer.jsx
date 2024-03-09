import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Footer.css'

export default function Footer() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    setError(send(name,email,message))
  }, [name,email,message])
  

  const send = (name, email, message) =>{
      if ( !name.includes('0','1','2','3','4','5','6','7','8','9') && !name) {
        return 'Valid name is required'
      }

      if (!email.includes('@', '.com') && !email) {
        return 'Valid email is required'
      }

      if (!message) {
        return 'Message is required'
      }
  }
  return (
    <div className='footer-container'>
      <div className='contacto'>
        <div className='titles'>
          <h1 className='contact-title'>Contact</h1>
          <p className='message'>Si estas interesado en conocerme mas y conocer a mas profundidad mis poryectos, llena el formulario y te respondere lo mas pronto posible</p>
        </div>
        <div className='formulario'>
          <form className='form' onSubmit={e => {
            e.preventDefault()
            const name = e.target.name.value
            const email = e.target.email.value
            const message = e.target.email.value
            send(name, email, message);
          }}>
            <label htmlFor="name" className='label'>Name
              <input 
                type="text"
                placeholder=''
                value={name}
                name='name'
                className='input'
                onChange={e => setName(e.target.value)}
              />
            </label>
            <label htmlFor="email" className='label'>Email
              <input 
                type="text"
                placeholder=''
                value={email}
                name='email'
                className='input'
                onChange={e => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="message" className='label'>Message
              <input 
                type="text"
                placeholder=''
                value={message}
                name='message'
                className='input-message'
                onChange={e => setMessage(e.target.value)}
              />
            </label>
            <span className='alert'>{error}</span>
            <button className='button-footer'>S E N D</button>
          </form>
        </div>
      </div>
      <hr className='hr'/>
      <div className='redes'>
        <div className='name-footer'><h1 className='name-footer'>nicocastellanos</h1></div>
        <div className='links-redes'>
          <Link to='/' className='link-footer'><img src="./src/assets/github.svg" alt="github" className='logo'/></Link>
          <Link to='/' className='link-footer'><img src="./src/assets/tik-tok.svg" alt="tik-tok" className='logo'/></Link>
          <Link to='/' className='link-footer'><img src="./src/assets/instagram.svg" alt="instagram" className='logo'/></Link>
          <Link to='/' className='link-footer'><img src="./src/assets/linkedin.svg" alt="linkedin" className='logo'/></Link>
        </div>
      </div>
    </div>
  )
}
