import React from 'react'
import { CardInfo } from './CardInfo'
import Card from './Card'

const CarsSection = () => {
    return (
        <>
            <div className="container card-container">
                <div className="row row-container">

                    {
                        CardInfo.map((elem, i) => {
                            return (
                                <>
                                    <div className="col-10 col-lg-3 col-md-3 mx-auto">
                                        <Card key={i} {...elem} />
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default CarsSection