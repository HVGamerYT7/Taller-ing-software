import React from 'react'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../css/iniciosesion.css'

const Iniciosesion = () => {
  return (
    <div className='contenedor_iniciosesion'>
        <h1>Medi-Mate</h1>
        <Button className='boton_iniciarsesion'>Iniciar sesion</Button>
        <button className='boton_registrarse'>Registrarse</button>
    </div>
  )
}

export default Iniciosesion