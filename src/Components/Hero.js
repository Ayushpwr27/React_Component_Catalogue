import React from 'react'
import heroImage from '../Image/3236267.png'
import imgBg from '../Image/bg.png'
const Hero = () => {
  return (
    <div>
      <h3 style={{textAlign:"center",borderRadius:"20px", color:"white",fontWeight:"bolder"}} className='m-4'>
        Designs For Different Navbars That Can Be Used In A Website</h3>
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
      <div className='container heroSection_2' style={{background:{heroImage},borderRadius:"20px"}} >
        
        <div className='row m-5'>
          <div className='col m-auto p-5' style={{textAlign:'center'}}>
            <h1>Welcome to the hero Section 2</h1>
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
    </div>
  )
}

export default Hero