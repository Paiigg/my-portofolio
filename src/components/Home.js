import React from "react";
import HomeImage from "../assets/home.svg"
import { AnimationOnScroll } from 'react-animation-on-scroll';




function Home() {
  return (
   <div id="home" className="bg-custom vh-100">
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 align-self-center text-custom text-responsive">
          <p className="">Hi I am Faiqul Washfi</p>
          <h1>I am A <span className="text-primary">FrontEnd</span> Developer </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
          <button className="btn btn-primary">Contact Me</button>
          
        </div>
       
        <div className="col-lg-6 mt-4">
          
            <img src={HomeImage} className='w-100'></img>
          
        </div>
        
       

      </div>


    </div>

   </div>
  );
}

export default Home;