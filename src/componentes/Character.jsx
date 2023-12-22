import React from 'react'
import  './character.css'

export default function Character(personaje) {
    console.log(personaje)
  return (
    <div className="card-padre">
<div className="card-junior">
      <h2>{personaje.personaje.Nombre}</h2>
      <img src={personaje.personaje.Imagen}></img>
      <p>{personaje.personaje.Genero}</p>
      <p>{personaje.personaje.Ocupacion}</p>
    </div>
    </div>
    )
}