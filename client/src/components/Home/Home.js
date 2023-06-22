import React from 'react'
import Main from '../Main/Main'
import Layout from '../../Layout'
import CardSection from '../CarsSection/CarsSection'
const Home = () => {
    return (
        <>
            <Layout>
                <Main />
                <CardSection />
            </Layout>
        </>
    )
}

export default Home