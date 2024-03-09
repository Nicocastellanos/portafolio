import React from 'react'
import '../css/Tecnologias.css'

export default function Tecnologias({titulo, descripcion}) {

  return (
    <div>
        <h1 className='title'>{titulo}</h1>
        <p className='description'>{descripcion}</p>
    </div>
  )
}
