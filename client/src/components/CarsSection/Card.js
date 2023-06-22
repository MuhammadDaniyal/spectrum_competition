import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoLocationSharp } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import './Card.css'

const Card = ({ heading, img, para, price1, price2 }) => {
    return (
        <>
            <div className='card'>
                <div className='card-img-div'>
                    <img src={img} alt="logo-image" />
                    <h3>{heading}</h3>
                </div>
                <div className='card-info-div'>
                    <p style={{ marginBottom: "8px", textAlign: 'center' }}>{para}</p>
                    <div className='card-info-div-inner'>
                        <div className='d-flex flex-column '>
                            <p><BsCurrencyDollar className='card-logo-car-span' /><span className='sp'>{price1}</span> /days</p>
                            <p><IoLocationSharp className='card-logo-car-span' />{price2}</p>
                        </div>
                        <NavLink className={"card-btn"} to={'/'}>Book Now</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card