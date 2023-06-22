import React from 'react'
import Main from '../Main/Main'
import Layout from '../../Layout'
import Mission from "../Mission/Mission"
import Footer from '../Footer/Footer'
const Home = () => {
    return (
        <>
            <Layout>
                <Main />
                <Mission></Mission>
                <Footer></Footer>
            </Layout>
        </>
    )
}

export default Home