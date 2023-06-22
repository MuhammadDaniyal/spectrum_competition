import React from 'react'
import Main from '../Main/Main'
import Layout from '../../Layout'
import Services from '../OurServices/Services'
import Choose from '../ChooseUs/Choose'
const Home = () => {
    return (
        <>
            <Layout>
                <Main />
                <Services/>
                <Choose/>
            </Layout>
        </>
    )
}

export default Home