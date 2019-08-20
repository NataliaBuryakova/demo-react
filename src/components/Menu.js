import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Menu.css';

const Menu = () => {
    return (
        <nav className="menu">
            <ul >
                <li><Link   to="/">Домашняя</Link></li>
                <li><NavLink  to="/news">Новости</NavLink></li>
              {/*  <li><NavLink  to="/login">Login</NavLink></li>*/}
                <li><NavLink  to="/profile">Профиль</NavLink></li>
            </ul>
        </nav>

    )
}

export default Menu
