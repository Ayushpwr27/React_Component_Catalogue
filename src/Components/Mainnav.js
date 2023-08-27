import React from 'react'
import { Link} from "react-router-dom";
const Mainnav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg" data-bs-theme="dark" style={{ backgroundColor:"#FFC436"}} >
                <div className="container-fluid mx-5">
                    <Link className="navbar-brand" style={{color:"#191D88", fontWeight:"bolder"}} to="/">Ayushpwr React Components Catalogue </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ justifyContent:"end"}}>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" style={{color:"#191D88"}} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{color:"#191D88"}} to="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"#191D88"}}>
                                    Components
                                </a>
                                <ul className="dropdown-menu" style={{backgroundColor:"#FFC436"}}>
                                    <li className="nav-item">
                                    <Link className="nav-link" style={{color:"#191D88"}} aria-current="page" to="/navbar">Navbar</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{color:"#191D88"}} to="/hero">Hero</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" style={{color:"#191D88"}} to="/sidebar">Sidebar</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{color:"#191D88"}} to="/signup">Signup</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{color:"#191D88"}} to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{color:"#191D88"}} to="/dashboard">Dashborad</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{color:"#191D88"}} to="/carousal">Carousal</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{color:"#191D88"}} to="/features">Features</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{color:"#191D88"}} to="/cover">Cover</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{color:"#191D88"}} to="/product">Product</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{color:"#191D88"}} to="/footer">Footer</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Mainnav