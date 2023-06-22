import React from 'react'
import Main from '../Main/Main'
import Layout from '../../Layout'
import Services from '../OurServices/Services'
import Choose from '../ChooseUs/Choose'
import Mission from "../Mission/Mission"
import Footer from '../Footer/Footer'
const Home = () => {
    return (
        <>
            <Layout>
                <Main />
                <Services/>
                <Choose/>
                <Mission></Mission>
                <Footer></Footer>
            </Layout>
        </>
    )
}

export default Home