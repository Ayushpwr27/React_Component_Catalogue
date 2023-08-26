import React from 'react'
import imagesNC from '../Image/NavDesign.jpg'
import imagesHC from '../Image/HeroDesign.jpg'
import imagesSC from '../Image/SidebarDesign.jpg'
import imagesSIC from '../Image/SignupDesign.jpg'
import imagesLC from '../Image/LoginDesign.jpg'
import imagesDC from '../Image/DashboardDesign.jpg'
import imagesCC from '../Image/CarousalDesign.jpg'
import imagesFC from '../Image/FeaturesDesign.jpg'
import imagesCCC from '../Image/CoverDesign.jpg'
import imagesPC from '../Image/ProductDesign.jpg'
import imagesFOC from '../Image/FooterDesign.jpg'

const Mainpage = () => {

  return (
    <div className='container mb-5'>
      <h1 className='m-5' style={{textAlign:"center", color:"White"}}>React Js Templates Catalogue</h1>
      <div className='row ms-5'>
          <div class="card m-5 p-3" style={{width:"18rem"}}>
            <img src={imagesNC} style={{borderRadius:"10px"}} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Navbar</h5>
                <p class="card-text">A React navbar is a UI menu for easy site navigation, featuring links to sections/pages.</p>
                <a href="/navbar"><button className="btn btn-primary ms-5 mt-4">View Designs</button></a>
              </div>
          </div>
        <div class="card m-5 p-3" style={{width:"18rem"}}>
          <img src={imagesHC} style={{borderRadius:"10px"}} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Hero</h5>
              <p class="card-text">A Hero Section in a React website is a prominent component introducing key content attractively.</p>
              <a href="/hero"><button className="btn btn-primary ms-5">View Designs</button></a>
            </div>
        </div>
        <div class="card m-5 p-3" style={{width:"18rem"}}>
          <img src={imagesSC} style={{borderRadius:"10px"}} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Sidebar</h5>
              <p class="card-text">A sidebar in a React website is a vertical UI element displaying navigation or supplementary information.</p>
              <a href="/sidebar"><button className="btn btn-primary ms-5">View Designs</button></a>
            </div>
        </div>
        <div class="card m-5 p-3" style={{width:"18rem"}}>
          <img src={imagesSIC} style={{borderRadius:"10px"}} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Signup</h5>
              <p class="card-text">A signup component in a React website enables users to create new accounts or profiles.</p>
              <a href='/signup'><button className="btn btn-primary ms-5 mt-4">View Designs</button></a>
            </div>
        </div>
        <div class="card m-5 p-3" style={{width:"18rem"}}>
          <img src={imagesLC} style={{borderRadius:"10px"}} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Login</h5>
              <p class="card-text">A login component in a React website allows users to access their accounts securely.</p>
              <a href="/login"><button className="btn btn-primary ms-5 mt-4">View Designs</button></a>
            </div>
        </div>
        <div class="card m-5 p-3" style={{width:"18rem"}}>
          <img src={imagesDC} style={{borderRadius:"10px"}} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Dashboard</h5>
              <p class="card-text">A dashboard in a React website presents summarized data and controls for user interactions and insights.</p>
              <a href="/dashboard"><button className="btn btn-primary ms-5">View Designs</button></a>
            </div>
        </div>
        <div class="card m-5 p-3" style={{width:"18rem"}}>
          <img src={imagesCC} style={{borderRadius:"10px"}} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Carousal</h5>
              <p class="card-text">A carousel in a React website is a slideshow component for cycling through images or content.</p>
              <a href="/carousal"><button className="btn btn-primary ms-5">View Designs</button></a>
            </div>
        </div>
        <div class="card m-5 p-3" style={{width:"18rem"}}>
          <img src={imagesFC} style={{borderRadius:"10px"}} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Features</h5>
              <p class="card-text">A features component in a React website showcases key functionalities or attributes of a product/service.</p>
              <a href="/features"><button className="btn btn-primary ms-5">View Designs</button></a>
            </div>
        </div>
        <div class="card m-5 p-3" style={{width:"18rem"}}>
          <img src={imagesCCC} style={{borderRadius:"10px"}} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Cover</h5>
              <p class="card-text">A cover component in a React website is a prominent section often displaying title and imagery.</p>
              <a href="/cover"><button className="btn btn-primary ms-5">View Designs</button></a>
            </div>
        </div>
        <div class="card m-5 p-3" style={{width:"18rem"}}>
          <img src={imagesPC} style={{borderRadius:"10px"}} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Product</h5>
              <p class="card-text">A product component in a React website displays details and information about a specific item.</p>
              <a href="/products"><button className="btn btn-primary ms-5">View Designs</button></a>
            </div>
        </div>
        <div class="card m-5 p-3" style={{width:"18rem"}}>
          <img src={imagesFOC} style={{borderRadius:"10px"}} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Footer</h5>
              <p class="card-text">A footer in a React website is a section at the bottom, containing info, links, and credits.</p>
              <a href="/footer"><button className="btn btn-primary ms-5">View Designs</button></a>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Mainpage