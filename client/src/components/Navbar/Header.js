import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar.js'
import './Navbar.css'

const Header = () => {

    return (
        <header className={'default-header'}>
            <NavLink to={'/'}>
                <img className='logo' src="/images/logo.jpeg" alt="logo" />
            </NavLink>
            <Navbar />
        </header>
    )
}

export default Header