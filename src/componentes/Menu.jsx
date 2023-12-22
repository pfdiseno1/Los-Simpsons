import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

function Menu() {
    return (
        
        <div className='menu'>

            
            <Link to="/">
                <button type="submit">Ir al Buscador!</button>
            </Link>
            <Link to="/paginado">
                <button type="submit">Ir al Paginado!</button>
            </Link>
            <Link to="/todojunto">
                <button type="submit">Ir a todo junto!</button>
            </Link>  
            <Link to={"/"}> <button type="submit">Volver</button></Link>
            
         </div>
    )
}

export default Menu