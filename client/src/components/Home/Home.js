import React from 'react'
import Main from '../Main/Main'
import Layout from '../../Layout'
import CardSection from '../CarsSection/CarsSection'
import Services from '../OurServices/Services'
import Choose from '../ChooseUs/Choose'
import Mission from "../Mission/Mission"
import Footer from '../Footer/Footer'
const Home = () => {
    return (
        <>
            <Layout>
                <Main />
                <Mission />
                <Services />
                <CardSection />
                <Choose />
                <Footer />
            </Layout>
        </>
    )
}

export default Home