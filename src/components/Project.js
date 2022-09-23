
import ProjectImage1 from '../assets/project.jpg'
import ProjectImage2 from '../assets/project-2.jpg'
import ProjectImage3 from '../assets/project-3.jpg'
import {Card, Button} from 'react-bootstrap';
import React, { Component } from "react";
import HomeImage from '../assets/Home.png'
import Slider from "react-slick";
import '../style/style.css'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";



// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";





function Project() {
  





  return(
    <div id="project" className=''>
      <div className="container text-custom py-5">
        <div className=" d-flex justify-content-between align-items-center">
          <div className=''>
            <p>Recent Project</p>
            <h2>My Portfolio</h2>
          </div>
          <button className='btn btn-outline-primary d-flex align-items-center'>Get More <i class='bx bx-chevron-right'></i></button>
        </div>
        <div className='mt-5' > 
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            navigation={true}
            modules={[FreeMode, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
             <Card style={{height:'300px'}} >
                <Card.Img variant="top" src={HomeImage} />
                <Card.Body>
                  <Card.Title>Web Agency</Card.Title>
                  <Card.Text>
                    My Second Project. Build with React JS and Tailwind CSS
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
             <Card style={{height:'300px'}}>
                <Card.Img variant="top" src={HomeImage} />
                <Card.Body>
                  <Card.Title>Web Agency</Card.Title>
                  <Card.Text>
                    My Second Project. Build with React JS and Tailwind CSS
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
             <Card >
                <Card.Img variant="top" src={ProjectImage3} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
             <Card >
                <Card.Img variant="top" src={ProjectImage1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
             <Card >
                <Card.Img variant="top" src={ProjectImage2} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
             <Card>
                <Card.Img variant="top" src={ProjectImage3} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </SwiperSlide>
            
          </Swiper>

        </div>
        
        
          
        
          

        
       

      </div>
      

      
    </div>

  )
}
export default Project;