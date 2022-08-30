import Feather from "../assets/feather.svg"
import ClipBoard from "../assets/clipboard.svg"
import CodeImage from "../assets/code.svg"
import FileImage from "../assets/file-text.svg"
import { AnimationOnScroll } from 'react-animation-on-scroll';

import {Card} from 'react-bootstrap'


function Skills() {
  return(
    <div id="skills">
      <div className="container text-custom py-5 overflow-hidden">
        <div className="text-responsive">
          <p>My Skills</p>
          <h2>My Expertise</h2>
        </div>
        <div className="row">
      
          <div className="col-lg-3 ">
            <AnimationOnScroll  animateIn="animate__slideInUp">
              <div className="rounded bg-custom text-custom shadow-sm  mt-5" style={{ width: '100%', height: '250px'}}>
                <div className="px-3 py-3">
                  <div className='bg-white shadow-sm rounded d-flex justify-content-center mb-2' style={{ width: '60px',  height: '60px'}}>
                    <img src={CodeImage} className='w-50'></img>
                  </div>
                  <p className=" fw-semibold fs-4">Web Development</p>
                  <p className="m">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
                
              </div>
            </AnimationOnScroll>
          </div>
          
          
          <div className="col-lg-3 ">
            <AnimationOnScroll delay='500' animateIn="animate__slideInUp">
              <div className="rounded bg-custom text-custom shadow-sm  mt-5" style={{ width: '100%', height: '250px'}}>
                <div className="px-3 py-3">
                  <div className='bg-white shadow-sm rounded d-flex justify-content-center mb-2' style={{ width: '60px',  height: '60px'}}>
                    <img src={Feather} className='w-50'></img>
                  </div>
                  <p className=" fw-semibold fs-4">UI/UX Design</p>
                  <p className="m">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
              </div>
            </AnimationOnScroll> 
          </div>

          <div className="col-lg-3 ">
            <AnimationOnScroll delay='1000' animateIn="animate__slideInUp">
              <div className="rounded bg-custom text-custom shadow-sm  mt-5" style={{ width: '100%', height: '250px'}}>
                <div className="px-3 py-3">
                  <div className='bg-white shadow-sm rounded d-flex justify-content-center mb-2' style={{ width: '60px',  height: '60px'}}>
                    <img src={FileImage} className='w-50'></img>
                  </div>
                  <p className=" fw-semibold fs-4">UI/UX Design</p>
                  <p className="m">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
              </div>
            </AnimationOnScroll> 
          </div>
          <div className="col-lg-3 ">
            <AnimationOnScroll delay='1500' animateIn="animate__slideInUp">
              <div className="rounded bg-custom text-custom shadow-sm  mt-5" style={{ width: '100%', height: '250px'}}>
                <div className="px-3 py-3">
                  <div className='bg-white shadow-sm rounded d-flex justify-content-center mb-2' style={{ width: '60px',  height: '60px'}}>
                    <img src={ClipBoard} className='w-50'></img>
                  </div>
                  <p className=" fw-semibold fs-4">UI/UX Design</p>
                  <p className="m">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
              </div>
            </AnimationOnScroll> 
          </div>
        
          

        </div>
       

      </div>
    </div>

  )
}

export default Skills;