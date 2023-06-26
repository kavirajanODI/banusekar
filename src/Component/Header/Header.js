import React from 'react';
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
    var pageWidth = window.innerWidth;
    var body= document.getElementsByTagName('body')[0];
    var script= document.createElement('script');
    script.type= 'text/javascript';
    
    if (pageWidth >801) {
        const body = document.body;
        const scrollUp = "scroll-up";
        const scrollDown = "scroll-down";
        const scrollanimi = "sscroll-animi";
        let lastScroll = 0;
        
        window.addEventListener("scroll", () => {
          const currentScroll = window.pageYOffset;
          if (currentScroll <= 0) {
            body.classList.remove(scrollUp);
            body.classList.remove(scrollanimi);
            return;
          }
  
          if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {	
            body.classList.remove(scrollUp);
            body.classList.add(scrollDown);
            body.classList.add(scrollanimi);
          } else if (
            currentScroll < lastScroll &&
            body.classList.contains(scrollDown)
          ) {
            body.classList.remove(scrollDown);
            body.classList.add(scrollUp);
            body.classList.add(scrollanimi);
          }
          lastScroll = currentScroll;
        });
        
    }
    
    else{
        
    };
    body.appendChild(script);


  return (
    <header>       
        <div className="HeadContainer">
            <div className="headlogo"><Link to="/" ><img src={require("../../assets/images/BS-Logo.png")} alt="LOGO"/></Link></div>
            <nav className="nav">
                <ul className="BSmainMenu">
                    <li className="nav__item"><Link to="/" className="nav__link">Home</Link></li>
                    <li className="nav__item"><Link to="/" className="nav__link">About Me</Link></li>
                    <li className="nav__item"><Link to="/" className="nav__link">Services</Link></li>
                    <li className="nav__item"><Link to="/" className="nav__link">Banu Speaks</Link></li>
                    <li className="nav__item"><Link to="/" className="nav__link">News & Events</Link></li>
                    <li className="nav__item"><Link to="/" className="nav__link">Contact Us</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header