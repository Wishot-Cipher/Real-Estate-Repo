import React from 'react'
import { NavLink, Outlet} from  "react-router-dom"
import swiperImg2 from "../assets/images/hero-bg.jpg"
import swiperImg4 from "../assets/images/me.jpg"
import {Container } from "react-bootstrap"
import { Swipers } from '../components/swiper';

export const Home = () => {

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
        <div className="navback">
            <div className="overlay"> 
            {/* <NavbarComp />       */}
                <div className="text">
                    <div className='homeText'> 
                     <h1> Your Property, Our Priority.</h1>
                     <p>From as low as $10 per day with limited time offer discont</p>
                    </div> <br /> <br />
                    <div>
                    <NavLink to="sale"  style={navLinkStyles} className="button1"> Sale </NavLink>
                    <NavLink to="buy" style={navLinkStyles} className='button2'>  Buy </NavLink>
                    </div> <br />
                     <Outlet/>
                </div>
             </div>
             </div> <br /> <br /> <br />
            <Swipers />
            <Container fluid>
              <div className='citesBackground'>
                <div className='cites'>
                  <h1>Find Properties In These Cities</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div  className='citiesCont'> 
                    <div>
                      <img src={swiperImg2} alt=""  />
                    </div>
                    <div>
                      <img src={swiperImg2} alt=""  /> 
                    </div>
                    <div>
                      <img src={swiperImg2} alt=""  />
                    </div>
                </div>
                <div className='citisImgCont'>
                  <div className='img1'><img src={swiperImg2} alt=""  /></div>
                  <div className='img2'><img src={swiperImg4} alt=""  /></div>
                </div>
              </div>  <br /> <br /> <br />
            </Container>
            </>
  )
}
