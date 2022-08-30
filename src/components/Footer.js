import LogoImage from '../assets/Logo.svg';

function Footer() {
  return (
    <div className='container py-3'>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <img src={LogoImage}></img>
        
        <div className='fs-3'>
          <a href='#'><i class='bx bxl-instagram-alt'></i></a>
          <a href='#'><i class='bx bxl-linkedin-square' ></i></a>
          <a href='#'><i class='bx bxl-facebook' ></i></a>
          <a href='#'><i class='bx bxl-twitter' ></i></a>
        </div>
      </div>
      <div className='bg-primary mx-auto mb-3' style={{height:'5px',width:'95%'}}></div>
      <p className='text-center'>Made With <i class='bx bxs-heart' ></i> By Paig</p>
      
      

    </div>
  );
}

export default Footer;