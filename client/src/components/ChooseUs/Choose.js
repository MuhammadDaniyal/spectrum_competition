import React from 'react'
import { BiMicrophone } from "react-icons/bi";
import { IoRocketOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import './Choose.css'

const Choose = () => {
    const data = [
        {
          id: 1,
          heading: 'Easy Online Booking',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus massa nec graviante.',
          img:<BiMicrophone size={40} />
        },
        {
          id: 1,
          heading: 'Online Payment',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus massa nec graviante.',
          img:<IoRocketOutline size={40} />
        },
        {
          id: 1,
          heading: 'Variety of Car Brands',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus massa nec graviante.',
          img:<AiOutlineClockCircle size={40} />
        },
      ]
    return (
        <>
              {/* <Fade right> */}
            <div className="event-page-card-main">


                
                <h1 style={{fontSize:'50px',color:'#6054fc'}} >Why Choose Us</h1>

            {/* <div className="event-page-card-main"> */}
            <div style={{display:'flex',gap:'20px'}}>

            {
                data.map((h => {
                    return (
                        
                        <div class="event-page-card">
                    <div className="icon">
                      {h.img}
                    </div>

                    <div class="event-page-card-card-content">
                      <h2>
                        {h.heading}
                      </h2>
                      <p>
                        {h.description}
                      </p>
                    </div>

                  </div>
                )
            }))
        }
        </div>
            </div>
            {/* </div> */}
                  {/* </Fade> */}
        </>
    )
}
    

export default Choose