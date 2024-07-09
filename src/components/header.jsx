import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function showMenu() {
    navLinks.style.right = "0px";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}


function Header() {
    return (<div><div className="header">
        <nav>
            <div className="nav-links" id="navLinks" name="navlinks">

                <div className="icons">   <CloseIcon onClick={hideMenu} /></div>
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="#footer">ABOUT</a></li>
                    <li><a href="#course">COURSE</a></li>
                    <li><a href="#testimonials">BLOG</a></li>
                    <li><a href="#cta">CONTACT</a></li>
                </ul>
            </div>
            <div className="icons"><MenuIcon onClick={showMenu} /></div>

        </nav>
        <div className="text-box">
            <h1>World's Biggest University</h1>
            <p>
                Alex University the best place to aquire knwolegde in your field<br />
            </p>
            <a href="" className="hero-btn">Visit US To Know More</a> </div> </div> </div>
    )
}
export default Header;