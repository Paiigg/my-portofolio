import Profile from '../assets/profile.JPG'
import { AnimationOnScroll } from 'react-animation-on-scroll';


function About() {
  return(
    <div id="about" className="bg-custom">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 mt-4">
            <AnimationOnScroll animateIn="animate__slideInLeft">
              <img src={Profile} className='w-50 mx-auto d-block rounded shadow'></img>
            </AnimationOnScroll>
            
          </div>
          <div className="col-lg-6 align-self-center text-custom mt-4 text-responsive">
            <p className="">About</p>
            <h2>About <span className="text-primary">Me</span></h2>
            <p>“Mahasiswa Elektro yang antusias dan bermotivasi tinggi dengan kemampuan kepemimpinan, inisiatif, dan mencari tantangan baru. Berpengalaman dalam berbagai organisasi internal maupun eksternal kampus.</p>
          </div>       
        </div>
      </div>
   </div>
  )
}

export default About;