import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap"

const Home = () => {
    const hBanSlider = {
        dots: false,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className="HomePage">
        <section className="HbanSec">
            <Slider {...hBanSlider} className='hBanSlider'>
            <div>
                <div className='hBanItem'>
                    <div className='hBanItemImg'><img src={require("../../assets/images/hbanBgImg.jpg")} alt="Banusekar Banner Img"/></div>
                    <div className='hBanItemCont'>
                        <div className='hBanItemInCont'>
                            <div className='hBIBox BoxOne'>
                                <img src={require("../../assets/images/ban-lc-icon.svg").default} alt="Banusekar Banner Img"/>
                                <h3>Legal Counsel </h3>
                                <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit sed<br/> do eiusmod </p>
                                <Link to="/" className="expolink">Explore</Link>
                            </div>
                            <div className='hBIBox BoxTwo'>
                                <img src={require("../../assets/images/ban-author-icon.svg").default} alt="Banusekar Banner Img"/>
                                <h3>Legal Counsel </h3>
                                <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit sed<br/> do eiusmod </p>
                                <Link to="/" className="expolink">Explore</Link>
                            </div>
                            <div className='hBIBox BoxThree'>
                                <img src={require("../../assets/images/ban-teaching-icon.svg").default} alt="Banusekar Banner Img"/>
                                <h3>Legal Counsel </h3>
                                <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit sed<br/> do eiusmod </p>
                                <Link to="/" className="expolink">Explore</Link>
                            </div>
                            <div className='hBIBox BoxFour'>
                                <img src={require("../../assets/images/ban-speaker-icon.svg").default} alt="Banusekar Banner Img"/>
                                <h3>Legal Counsel </h3>
                                <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit sed<br/> do eiusmod </p>
                                <Link to="/" className="expolink">Explore</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='hBanItem'>
                    <div className='hBanItemImg'><img src={require("../../assets/images/hbanBgImg.jpg")} alt="Banusekar Banner Img"/></div>
                    <div className='hBanItemCont'>
                        <div className='hBanItemInCont'>
                            <div className='hBIBox BoxOne'>
                                <img src={require("../../assets/images/ban-lc-icon.svg").default} alt="Banusekar Banner Img"/>
                                <h3>Legal Counsel </h3>
                                <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit sed<br/> do eiusmod </p>
                                <Link to="/" className="expolink">Explore</Link>
                            </div>
                            <div className='hBIBox BoxTwo'>
                                <img src={require("../../assets/images/ban-author-icon.svg").default} alt="Banusekar Banner Img"/>
                                <h3>Legal Counsel </h3>
                                <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit sed<br/> do eiusmod </p>
                                <Link to="/" className="expolink">Explore</Link>
                            </div>
                            <div className='hBIBox BoxThree'>
                                <img src={require("../../assets/images/ban-teaching-icon.svg").default} alt="Banusekar Banner Img"/>
                                <h3>Legal Counsel </h3>
                                <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit sed<br/> do eiusmod </p>
                                <Link to="/" className="expolink">Explore</Link>
                            </div>
                            <div className='hBIBox BoxFour'>
                                <img src={require("../../assets/images/ban-speaker-icon.svg").default} alt="Banusekar Banner Img"/>
                                <h3>Legal Counsel </h3>
                                <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit sed<br/> do eiusmod </p>
                                <Link to="/" className="expolink">Explore</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Slider>
        </section>
        <section className='HIntroSec'>
            <div className='HIntroImgdiv'><img src={require("../../assets/images/HIntroImg.jpg")} alt="Banusekar Banner Img"/></div>
            <div className='HIntroContdiv'>
                <h5>Introduction</h5>  
                <h2>About Me</h2> 
                <p>Lorem ipsum dolor sit amet consectetur iscing elit seddo<br/> eiusmod tempor incididunt ut labo doloremagna aliqua Quis<br/> ipsum suspenltrices ncididunt ut labore et doloreelit seddusmod<br/> tempor incididun labore et dolore magnaQuis ipsumsuspenltrices<br/> ncididunt ut labore et oloreelit seddusmod tempormagna<br/> Quis ipsumuspenltrices ncididunt ut labore et oloreelit<br/> seddusmomagnaQuis ipsumsuspenltrices ncididunt ut labore<br/> et oloreelit seddusmod tempormagnauis ipsumuspenltrices<br/> ncididunt ut labore et oloreelit. </p> 
                <Link to="/" className="expolink">Explore</Link>
            </div>
        </section>
        <section className='HServiceSec'>
            <Container>
                <div className='HSereHead ComHeadTitles textalcenter mrgnbtm'>
                    <h2>Services</h2> 
                    <p>Lorem ipsum dolor sit amet consectetur iscing elit seddo eiusmod tempor incididunt ut labo doloremagna aliqua<br/> Quis ipsum suspenltrices ncididunt ut lab</p> 
                </div>
                <div className='HIntroContdiv'>
                    <h5>Introduction</h5>  
                    <h2>About Me</h2> 
                    <p>Lorem ipsum dolor sit amet consectetur iscing elit seddo<br/> eiusmod tempor incididunt ut labo doloremagna aliqua Quis<br/> ipsum suspenltrices ncididunt ut labore et doloreelit seddusmod<br/> tempor incididun labore et dolore magnaQuis ipsumsuspenltrices<br/> ncididunt ut labore et oloreelit seddusmod tempormagna<br/> Quis ipsumuspenltrices ncididunt ut labore et oloreelit<br/> seddusmomagnaQuis ipsumsuspenltrices ncididunt ut labore<br/> et oloreelit seddusmod tempormagnauis ipsumuspenltrices<br/> ncididunt ut labore et oloreelit. </p> 
                    <Link to="/" className="expolink">Explore</Link>
                </div>
            </Container>
        </section>
    </div>
  )
}

export default Home