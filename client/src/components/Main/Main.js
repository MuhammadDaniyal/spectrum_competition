import React from 'react';
import './Main.css'
import { NavLink } from 'react-router-dom'

const Main = () => {
    return (
        <>
            <div className="main">

                <div className="intro">
                    <h1><span>Search</span> and find <br />
                        your Best and <span>Rental</span><br /> with easy way
                    </h1>
                    <p>Drive performances and your cross-functional <br /> collaboration with easy-to-use and <br /> automated insights in one clicks</p>
                    <NavLink to='/'>
                        <button className='my-btn'>Book now</button>
                    </NavLink>
                </div>
                <div className="myimg">
                    <img src="./images/iris-removebg-preview.png" alt="main" />
                </div>

            </div>
        </>
    )
}

export default Main;