import React from 'react';
import { Link } from "react-router-dom";
import "./footer.css"
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube , faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
        <div className='EnquireNSec'>   
            <div className='ENSBgImg'>
                <img src={require ("../../assets/images/footEnowBgImg.jpg")} alt="Banusekar Enquire Now"/>
            </div>
            <div className='textBlock ENTbright'>
                <p className="absimg"><img src={require ("../../assets/images/askbs-img1.png")} alt="Ask Banusekar" /></p>
                <p>Lorem ipsum dolor sit amet consectetur iscing elit<br/> seddo eiusmod tempor incididunt ut labo doloremagna<br/> aliqua Quis ipsumsuspenltrices nciddunt ut lab</p>
                <p className="enquirenpara"><Link className="enquirenLink" href="#">Enquire Now</Link></p>
            </div>
            <div className='textBlock ENTbleft'>
                <p className="absimg"><img src={require ("../../assets/images/askbs-img2.png")} alt="Ask Banusekar" /></p>
            </div>
        </div>
        <div className='MfooterSec'>
            <Container>
                <Row>
                    <Col className='mfsCol-One'>
                        <div className='textBlock'>
                            <h4>Services</h4>
                            <p><strong>Representation in Appellate Fora, High Court <br/>
                            and Supreme Court on Economic Laws</strong></p>
                            <p><strong>Written opinion on the above subject and <br/>
                            other direct tax related issues</strong></p>
                            <p><strong>Consultancy / Advisory Services</strong></p>
                            <ul>
                                <li>- Amalgamation / Merger / Demerger</li>
                                <li>- Slump Sale Transactions</li>
                                <li>- Cross Border Transactions</li>
                                <li>- Tax planning for non residents</li>
                                <li>- Tax deduction and Tax Collection at source</li>
                            </ul>
                        </div>
                    </Col>
                    <Col className='mfsCol-Two'>
                        <div className='textBlock'>
                            <h4>Menu</h4>
                            <ul className="fBSmMenu">
                                <li className="nav__item"><Link to="/" className="nav__link">Home</Link></li>
                                <li className="nav__item"><Link to="/" className="nav__link">About Me</Link></li>
                                <li className="nav__item"><Link to="/" className="nav__link">Services</Link></li>
                                <li className="nav__item"><Link to="/" className="nav__link">Banu Speaks</Link></li>
                                <li className="nav__item"><Link to="/" className="nav__link">News & Events</Link></li>
                                <li className="nav__item"><Link to="/" className="nav__link">Contact Us</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col className='mfsCol-Three'>
                        <div className='textBlock'>
                            <h4>Banusekar</h4>
                            <ul className="fBSmMenu">
                                <li className="nav__item"><Link to="/" className="nav__link">As Legal Counsel</Link></li>
                                <li className="nav__item"><Link to="/" className="nav__link">As a Teacher / Faculty</Link></li>
                                <li className="nav__item"><Link to="/" className="nav__link">Advisory Services</Link></li>
                                <li className="nav__item"><Link to="/" className="nav__link">As an Author</Link></li>
                                <li className="nav__item"><Link to="/" className="nav__link">As a Speaker</Link></li>
                            </ul>                        
                        </div>
                    </Col>
                    <Col className='mfsCol-four'>
                        <div className='textBlock fcrighttb'>
                            <p className="fcright">Copyright © 2023 Banusekar,<br/> All Rights Reserved</p>
                            <h5>Follow Us</h5>
                            <ul className='smedialink'>
                                <li><Link to="/"><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
                                <li><Link to="/"><FontAwesomeIcon icon={faYoutube} /></Link></li>
                            </ul>
                            
                        </div>
                        <div className='textBlock beopenCol'>
                            <p><Link to="https://opendesignsin.com/" target="_blank" rel="noopener">Design BY</Link></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </footer>
  )
}

export default Footer