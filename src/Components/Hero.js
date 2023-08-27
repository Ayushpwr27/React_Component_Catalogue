import React from 'react'
import heroImage from '../Image/3236267.png'
const Hero = () => {
  return (
    <div>
      <h3 style={{textAlign:"center",borderRadius:"20px", color:"white",fontWeight:"bolder"}} className='m-4'>Designs For Different Hero Sections That Can Be Used In A Website</h3>
      
      <div className='container heroSection_1 ' style={{background:"white" ,borderRadius:"20px"}} >
        <div className='row m-5'>
          <div className='col-6 m-auto pb-lg-1'>
            <h1>Welcome to the hero Section 1</h1>
            <p>This is a template design for hero section</p>
            <button className='me-3 btn btn-primary'>Button 1</button>
            <button className='btn btn-primary'>Button 2</button>
          </div>
          <div className='col-3 m-auto'>
            <img src={heroImage} width={"150%"} alt="" />
          </div>
        </div>
      </div>

      <div className='container heroSection_2' style={{background:"linear-gradient(to Right, #FFBA86 0%, #FFBA86 60%,#F6635C 60%,#F6635C 100%)" ,borderRadius:"20px"}} >
        
        <div className='row m-5'>
          <div className='col-6 m-auto p-5'>
            <h1>Welcome to the hero Section 2</h1>
            <p>This is a template design for hero section</p>
            <button className='me-3 btn btn-primary'>Button 1</button>
            <button className='btn btn-primary'>Button 2</button>
          </div>
          <div className='col-3 m-auto p-0'>
            <img src={heroImage} width={"150%"} alt="" />
          </div>
        </div>
      </div>

      <div className='container heroSection_3' style={{borderRadius:"20px",color:"white",backgroundImage:`url("https://res.cloudinary.com/practicaldev/image/fetch/s--XjWirOW8--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/arasur0jjdbqabgl69xr.png")`}} >
        <div className='row'>
          <div className='col mt-5 p-5' style={{textAlign:'center'}}>
            <h1>Welcome to the hero Section 3</h1>
            <p>This is a template design for hero section</p>
            <button className='me-3 btn btn-primary'>Button 1</button>
            <button className='btn btn-primary'>Button 2</button>
          </div>
        <div className="row m-5">
          <div className='col-12 m-auto p-0' style={{textAlign:'center'}}>
          </div>
          </div>
        </div>
      </div> 

      <div className='container heroSection_4 ' style={{background:"white" ,borderRadius:"20px"}} >
        <div className='row m-5'>
          <div className='col-3 m-auto'>
            <img src={heroImage} width={"150%"} alt="" />
          </div>
          <div className='col-6 m-auto pb-lg-1'>
            <h1>Welcome to the hero Section 4</h1>
            <p>This is a template design for hero section</p>
            <button className='me-3 btn btn-primary'>Button 1</button>
            <button className='btn btn-primary'>Button 2</button>
          </div>
          
        </div>
      </div>

      <div className='container heroSection_5' style={{background:"linear-gradient(to Right, #F6635C 35%,#FFBA86 100%)" ,borderRadius:"20px"}} >
        
        <div className='row m-5'>
        <div className='col-3'>
            <img src={heroImage} width={"150%"} alt="" />
          </div>
          <div className='col-6 m-auto '>
            <h1>Welcome to the hero Section 5</h1>
            <p>This is a template design for hero section</p>
            <button className='me-3 btn btn-primary'>Button 1</button>
            <button className='btn btn-primary'>Button 2</button>
          </div>
          
        </div>
      </div>

      
    </div>
  )
}

export default Hero