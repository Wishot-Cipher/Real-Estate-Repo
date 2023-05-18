import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {Container } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookF, faGoogle, faGooglePlusG, faInstagram, faInstagramSquare, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFaceGrinBeam } from '@fortawesome/free-regular-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
const [value, setValue] = useState("")
  return (
    <>
    <div className='footerCont'>
       <Container>
            <div className="footer">
                      <div className="footerLink">
                         <h6>About Site</h6>
                           <p>We’re reimagining how you buy, sell and
                            rent. It’s now easier to get into a place you
                            love. So let’s do this, together.
                          </p>
                      </div>
                      <div className="footerLink">
                          <h6> Quick Links</h6>
                          <p className='quikeLinks'>
                            <Link> About Us</Link> <br />
                            <Link> Terms & Conditions</Link> <br />
                            <Link> User’s Guide </Link><br />
                            <Link> Support Center </Link><br />
                            <Link> Press Info </Link>
                          </p>
                      </div>
                      <div className="footerLink">
                          <h6>Contact Us</h6>
                          <p>wishot@gmail.com</p>
                          <p>Collins Street West, Victoria
                              8007, Australia.</p>
                          <span><p>8007, Australia</p></span>
                          <p>+1 246-345-0695</p>
                      </div>
                      <div className="footerLink followLink">
                          <h6> Follow Us</h6>
                          <p>
                           <i><FontAwesomeIcon icon={faFacebookF}/> </i> 
                            <i><FontAwesomeIcon icon={faTwitter} /> </i>
                            <i><FontAwesomeIcon icon={faInstagram}/> </i> 
                            <i><FontAwesomeIcon icon={faLinkedinIn}/> </i> 
                            <i><FontAwesomeIcon icon={faGlobe}/> </i> 
                            <i><FontAwesomeIcon icon={faGoogle}/> </i> 
                          </p>
                          <h6> Subscribe</h6>
                          <input type="text" placeholder='your email' onChange={e=>{setValue(e.target.value)}} />
                      </div>
                </div>
            </Container>
    </div>
    <div className="lastFooter">
         <Container>
            <div className='flexedFoot'>
                <div className="lastFooterLinks">
                    <Link> Home </Link>
                    <Link> Listing </Link>
                    <Link> Property </Link>
                    <Link> Page </Link>
                    <Link> Blogs</Link>
                    <Link> Contact</Link>
                </div>
                <div className="copywrite">
                  © 2023 Wishot. Made with love.
                </div>
            </div>
         </Container>
    </div>
    </>
  )
}
