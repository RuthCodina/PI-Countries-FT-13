import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css'

export default function NavBar(){

    return(
        <header className='navbar'>
          <nav className='list'>
            <li className='list-item'>
               <NavLink  to='/home'>home</NavLink>
               <NavLink  to='/activity'>Agrega Una Actividad</NavLink>
               <NavLink  to='/busqueda'>Haz una Busqueda</NavLink>

            </li> 
          </nav>
          
        </header>
    )
}