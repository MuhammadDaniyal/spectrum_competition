import React from "react";
import "./Mission.css";

const Mission = () => {
  return (
    <>
      <div className="conatiner">
        <div className="row">

          <h1>Our Mission is to provide sustainaible and <br/> convienient transportation to ours <br/> 
          customers while reducing their carbon footprints</h1>

          <div className="col-3"> 
            <h5>Welcome to our Electric Car Rental Service <br/> We offer a convienient and
            eco-friendly way to travel while reducing your carbon footprints</h5>
            <button>Learn More</button>
          </div>

          <div className="col-6">
             <div className="row">
            
              <div className="col-6">
              <h1>100+</h1>
              <p>Vehile Ready</p>
              </div>

              <div className="col-6">
              <h1>80+</h1>
              <p>Office in the World</p>
              </div>

              <div className="col-6">
              <h1>120+</h1>
              <p>Charging</p>
              </div>

              <div className="col-6">
              <h1>4K+</h1>
              <p>Happy Clients</p>
              </div>

             </div>
            
          </div>


        </div>
      </div>
    </>
  );
};

export default Mission;
