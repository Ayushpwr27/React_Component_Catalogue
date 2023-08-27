import React from 'react'

import * as iconsai from "react-icons/ai";
import * as iconsim from "react-icons/im";
// import * as iconsfa6 from "react-icons/fa6";
// import * as iconsbi from "react-icons/bi";
// import * as iconsgr  from "react-icons/gr";
const Mainfooter = () => {
    return (
        <div className='mt-5 pt-5'>
            <footer style={{ background: "#FFC436", color: "white" }}>
                <div className="container">
                    <div className="row pb-2 pt-2" style={{ textAlign: "center" }}>
                        <div className="col-12 " style={{ fontSize: "30px" }}>
                            <a href="https://instagram.com/ayushpwr_" target='blank_'><iconsai.AiOutlineInstagram className="me-5" /></a>
                            <a href="https://linkedin.com/in/27-ayush-pawar" target='blank_'><iconsim.ImLinkedin className="me-5" /></a>
                            <a href="https://github.com/Ayushpwr27" target='blank_'><iconsai.AiFillGithub className="me-5" /></a>
                            <a href="https://www.facebook.com/ayushpwr/" target='blank_'><iconsim.ImFacebook2 className="me-5" /></a>
                            <a href="https://twitter.com/Ayushpwr" target='blank_'><iconsim.ImTwitter className="me-5" /></a>
                        </div>
                    </div>
                    <div className="row pb-2 pe-5" style={{ textAlign: "center" }}>
                        <div className="col-12 ">
                            <p style={{ textAlign: "center", color: "white" }}>Copyright ©️2023, <a href="https://linktr.ee/ayushpwr" target='blank_'>Ayushpwr</a>. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Mainfooter