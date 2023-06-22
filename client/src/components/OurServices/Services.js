import {React,useState} from 'react'
import './Services.css'
import { FaCarAlt, } from "react-icons/fa";
import { FaCarOn,FaCarSide } from "react-icons/fa6";

const Services = () => {
    // const [serviceData, setServiceData] = useState([])
    const serviceData = [
        {
          id: 1,
        logo:<FaCarAlt/>,
          title: "Quality Choice",
          info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?",
        },
        {
          id: 2,
          logo:<FaCarOn/>,
          title: "Exclusive Service",
          info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?",
        },
        {
          id: 3,
          logo: <FaCarSide/>,
          title: "Fast and Safe",
          info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?",
        }
      ];

      return (
        <>
            <section className='work-section'>
                <div className='work-container container'>
                    <h1 className='main-heading text-center'>How does it Works</h1>
                    <div className="row">
                        {
                            serviceData.map((curElem) => {
                                const { id, logo, title, info } = curElem;
                                return (
                                    <>
                                        <div className='col-12 col-lg-4 text-center work-container-subdiv' key={id}>
                                            <i className='fontawesome-style ser_logo'>{logo}</i>
                                            <h2 className='sub-heading'>{title}</h2>
                                            <p className='main-work-para w-100'>
                                                {info}
                                            </p>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
