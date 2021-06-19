import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css'

export default function NavBar(){

    return(
        <header className='navbar'>
          <nav className='list'>
            <li className='list-item'>
               <NavLink  to='/activity'>Agrega Una Actividad</NavLink>
               <NavLink  to='/home'>home</NavLink>

            </li> 
          </nav>
          
        </header>
    )
}