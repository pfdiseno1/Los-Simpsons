import React, { useState } from 'react'

export default function NavBar() {
   const[state,setState]=useState()
    const handleState = (event) => {
        console.log(event.target.value)
    } 
  return (
    <div>
        <select name="estado" id="estado" onChange={handleState}>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>

        </select>
    </div>
  )
}


