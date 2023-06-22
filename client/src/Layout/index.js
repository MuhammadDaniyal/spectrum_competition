import React from 'react'
import Header from "../components/Navbar/Header"

const index = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default index