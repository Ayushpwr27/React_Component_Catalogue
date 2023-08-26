import React from 'react'
import * as iconsbs from "react-icons/bs";
import * as iconsfa6 from "react-icons/fa6";
import * as iconsbi from "react-icons/bi";
import * as iconsgr  from "react-icons/gr";
const Navbar = () => {
    return (
    <div className='NavBarTemp mx-3 mt-4'>  
        <h3 style={{textAlign:"center",borderRadius:"20px", color:"white",fontWeight:"bolder"}} className='mb-4'>
        Designs For Different Navbars That Can Be Used In A Website</h3>
        <div className='Navbar_1 my-2' style={{borderRadius:"20px"}}>
            <nav className="navbar center navbar-expand-lg " style={{backgroundColor:"#F6635C"}} data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navbar 1</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true" href='/'>Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex form_1" role="search">
                            <input className="form-control me-2" type="search" style={{backgroundColor:"white"}} placeholder="Search" aria-label="Search" />
                            <button className="btn btn-warning" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
        <div className='Navbar_2 my-2'>
            <nav className="navbar center navbar-expand-lg " style={{backgroundColor:"#FFBA86", fontWeight:"bolder"}} data-bs-theme="light" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Nav Bar 2</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true" href='/'>Disabled</a>
                            </li>
                        </ul>
                        <button className="btn btn-danger mx-2" type="submit">Login</button>
                        <button className="btn btn-danger" type="submit">Signup</button>
                        
                    </div>
                </div>
            </nav>
        </div>
        <div className='Navbar_3 my-2'>
            <nav className="navbar center navbar-expand-lg " style={{backgroundColor:"#F6635C"}} data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navbar 3</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true" href='/'>Disabled</a>
                            </li>
                        </ul>
                        <button className="btn btn-warning mx-2" type="submit">Contact Us</button>
                        
                    </div>
                </div>
            </nav>
        </div>
        <div className='Navbar_4 my-2'>
            <nav className="navbar center navbar-expand-lg " style={{backgroundColor:"#FFBA86", fontWeight:"bolder"}} data-bs-theme="light" >
                <div className="container-fluid">
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true" href='/'>Disabled</a>
                            </li>
                        </ul>
                        
                    </div>
                    <a className="navbar-brand" href="/">Navbar 4</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </div>
        <div className='Navbar_5 my-2'>
            <nav className="navbar center navbar-expand-lg " style={{backgroundColor:"#F6635C"}} data-bs-theme="dark">
                <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar 5</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true" href='/'>Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div className='Navbar_6 my-2'>
            <nav className="navbar center navbar-expand-lg " style={{backgroundColor:"#FFBA86", fontWeight:"bolder"}} data-bs-theme="light" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><iconsfa6.FaReact style={{color:"red",fontSize:"30px"}}/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true" href='/'>Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex me-auto" role="search">
                            <input className="form-control me-auto" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <form className="d-flex" role="search">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            </ul>
                            
                        </form>
                    </div>
                </div>
            </nav>
        </div>
        <div className='Navbar_7 my-2'>
            <nav className="navbar center navbar-expand-lg " style={{backgroundColor:"#F6635C"}} data-bs-theme="dark">
                <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar 7</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse col-6" style={{justifyContent:"end"}} id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true" href='/'>Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div className='Navbar_8 my-2'>
            <nav className="navbar center navbar-expand-lg " style={{backgroundColor:"#FFBA86", fontWeight:"bolder"}} data-bs-theme="light" >
                <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar 8</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true" href='/'>Disabled</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <iconsbs.BsInstagram className='mx-2' style={{fontSize:"30px", color:"red"}}/>
                        <iconsbs.BsTwitter className='mx-2'  style={{fontSize:"30px", color:"red"}}/>
                        <iconsbs.BsFacebook className='mx-2'  style={{fontSize:"30px", color:"red"}}/>
                    </div>
                </div>
            </nav>
        </div>
        <div className='Navbar_9 my-2'>
            <nav className="navbar center navbar-expand-lg " style={{backgroundColor:"#F6635C"}} data-bs-theme="dark">
                <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar 9</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true" href='/'>Disabled</a>
                            </li>
                            {/* style={{backgroundColor:"rgba(0, 0, 0, 0)",border:"none",borderBlockEnd:"0.5px solid rgb(75, 75, 75)",borderRadius:"1px"}} */}
                        </ul>
                    </div>
                        <form className="d-flex form_1" role="search">
                            <input className="form-control me-2" type="search" style={{backgroundColor:"rgba(0, 0, 0, 0)",border:"none",borderBlockEnd:"0.5px solid rgb(75, 75, 75)",borderRadius:"1px"}} placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-warning" style={{borderColor:"rgba(75, 75, 75)",color:"rgba(75, 75, 75)"}} type="submit">Search</button>
                        </form>
                </div>
            </nav>
        </div>
        <div className='Navbar_10 my-2'>
            <nav className="navbar center navbar-expand-lg " style={{background:"linear-gradient(to Right, #FFBA86 10%,#F6635C)",border:"1px solid", fontWeight:"bolder"}} data-bs-theme="light" >
                <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar 10</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true" href='/'>Disabled</a>
                            </li>
                        </ul>
                    </div>
                    <iconsgr.GrNotification style={{fontSize:"4vh"}}/>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <iconsbi.BiSolidUserCircle style={{fontSize:"5vh"}}/> User Name
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            </ul>
                </div>
            </nav>
        </div>
    </div>
    )
}

export default Navbar