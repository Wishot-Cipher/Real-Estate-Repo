import {useState,useEffect} from 'react'
import { NavLink, Outlet} from  "react-router-dom"
import swiperImg2 from "../assets/images/home-background.jpg"
import swiperImg4 from "../assets/images/about-bg.jpg"
import brandLogo1 from "../assets/images/brand01.png"
import brandLogo2 from "../assets/images/brand03.png"
import brandLogo3 from "../assets/images/brand04.png"
import brandLogo4 from "../assets/images/brand05.png"
import brandLogo5 from "../assets/images/brand06.png"
import {Container } from "react-bootstrap"
import { Swipers } from '../components/home Components/swiper';
import useFeach from '../components/useFeach'
import { SwiperTestimonials } from '../components/home Components/swiperTestimonials'
import { SwiperArticle } from '../components/home Components/swiperArticle'
import { SwiperServices } from '../components/home Components/swiperServices'
import { Footer } from '../components/footer'

export const Home = () => {

  const { data : posts , loading} = useFeach("https://real-eastate-json-server.onrender.com/posts");
  const navLinkStyles = ({isActive}) => {
    return {
      fontWeight : isActive ? "bold" : "normal",
      color : isActive ? '#FF5363' : 'rgba(5, 5, 5, 0.7)',
      textDecoration: isActive ? 'none':'none',
      background : isActive ? '#FF5363' : "white",
      color : isActive ? "white" : "black"
    }
  }

  return (
    <>
        {loading && <div style={{display:"flex", justifyContent :"center"}}> Loading.... </div> }
        <div className="navback">
            <div className="overlay"> 
            {/* <NavbarComp />       */}
                <div className="text">
                    <div className='homeText'> 
                     <h1> Your Property, Our Priority.</h1>
                     <p>From as low as $10 per day with limited time offer discont</p>
                    </div> <br /> <br />
                    <div>
                    <NavLink to="buy" style={navLinkStyles} className='button2'>  Buy </NavLink>
                    <NavLink to="rent"  style={navLinkStyles} className="button1"> Rent </NavLink>
                    </div> <br />
                     <Outlet/>
                </div>
             </div>
             </div> <br /> <br /> <br />
            {posts && <Swipers posts={posts} />}
            <Container>
              <div className='citesBackground'>
                    <div className='cites'>
                       <h1>Find Properties In These Cities</h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div  className='citisImgCont'> 
                    <div className='img2'>
                        <img src={swiperImg2} alt=""  /> 
                         <div> 
                            <h5>Miami Abakpa</h5>
                            <p>9 Properties</p> 
                         </div>  
                      </div>
                      <div className='img1 img2plus'>
                        <img src={swiperImg4} alt=""  />
                        <div> 
                          <h5>Miami</h5>
                          <p>9 Properties</p>
                        </div> 
                      </div>
                    </div>
                    <div className='citisImgCont'>
                      <div className='img1 '>
                        <img src={swiperImg2} alt=""  /> 
                         <div> 
                            <h5>Miami Abakpa</h5>
                            <p>9 Properties</p> 
                         </div>  
                      </div>
                      <div className='img2 '>
                        <img src={swiperImg4} alt=""  />
                        <div> 
                          <h5>Miami</h5>
                          <p>9 Properties</p>
                        </div> 
                      </div>
                    </div>
              </div>  <br /> <br /> 
            </Container>
              <SwiperServices /> 
                  <Container fluid>
               <SwiperTestimonials />
            </Container>
              <SwiperArticle />
            <>
                  <div className="partnersCont">
                    <div className="partnersText">
                      <h2> Our Partners</h2>
                      <p>We only work with the best companies around the globe </p>
                    </div>
                    <div className="partnersLogo">
                      <div className='companyLogo'> <img src={brandLogo1} alt="BrandLogo" /> </div>
                      <div className='companyLogo'> <img src={brandLogo2} alt="BrandLogo" /> </div>
                      <div className='companyLogo'> <img src={brandLogo3} alt="BrandLogo" /> </div>
                      <div className='companyLogo'> <img src={brandLogo4} alt="BrandLogo" /> </div>
                      <div className='companyLogo'> <img src={brandLogo5} alt="BrandLogo" /> </div>
                    </div>
                  </div>
            </>
                 
                  <div className="becomeAgentCont">
                  <Container>
                    <div className="agentFlex">
                    <div className="becomeAgentText">
                       <h3>Become A Real Estate Agent </h3>
                       <p>We only work with the best companies around the globe</p>
                    </div>
                    <div className="linkToBecomeOne">
                      <button> Register Now</button>
                    </div>
                  </div>
                </Container>  
                  </div>
            </>
  )
}
