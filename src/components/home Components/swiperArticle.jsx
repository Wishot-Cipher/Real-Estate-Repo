import React, { useRef, useState} from "react";
import {Link} from "react-router-dom"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Container } from "react-bootstrap"
import swiperImg3 from "../../assets/images/me.jpg"
import blogImg from "../../assets/images/MortgageInsurance.png"
import blogImg2 from "../../assets/images/MortgageLender.png"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

export const SwiperArticle = () => {
  return (
    <>
    <Container>
           <div className="articleCont">
                <div className="article">
                  <h2>Article and Tips</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit you got.</p>
                </div>
    <Swiper
      breakpoints={{
        1200:{
            width: 1115,
            slidesPerView: 3
        },
        1000: {
            width: 929,
            slidesPerView: 3
        },

        850: {
            width: 680,
            slidesPerView: 1,
            spaceBetween:30
        },
        650:{
             width: 500,
             slidesPerView: 1
        },
        500:{
             width: 500,
             slidesPerView: 1
        },
        450:{
             width: 450,
             slidesPerView: 1,
             spaceBetween: 20
        },
        400:{
             width: 390,
             slidesPerView: 1,
             spaceBetween: 20
        },
        360:{
             width: 348,
             slidesPerView: 1,
             spaceBetween: 15
        },
        300:{
             width: 300,
             slidesPerView: 1,
             spaceBetween: 15,
            //  width: full
        },
        200:{
             width: 250,
             slidesPerView: 1
        }
      }}
       slidesPerView={3}
        spaceBetween={20}
        style={{"--swiper-pagination-color": '#FF5363',
                 "--swiper-navigation-color": '#FF5363', 
                 "--swiper-pagination-bullet-size": '8px',
                 "--swiper-navigation-size": '35px',
                 "--swiper-navigation-background-color": '#fff'}}
        loop={true}
        centeredSlides={false}
        // autoplay={{
        //   delay: 3500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[ Pagination, Navigation]}
        className="mySwiper"
      >
                <SwiperSlide>
                        <div className="col col1">
                            <div className="imageDiv">
                              <img src={blogImg} alt="image" />
                            </div>
                            <div className='textDiv'>
                              <h6> Family House</h6>
                              <h4>Halfins Ranks The Most Nice Neighboorhoods 0...</h4>
                              <hr />
                              <div className="profileCont">
                                <div className="profileImg">
                                  <img src={swiperImg3} alt="" /> <h6>Admin</h6>
                                </div>
                                <div className="datePosted"> <h6> Febuary 2019</h6></div>
                              </div>
                            </div>
                         </div>
                  </SwiperSlide>
                <SwiperSlide>
                <div className="col col2">
                      <div className="imageDiv">
                        <img src={blogImg2} alt="image" />
                      </div>
                      <div className='textDiv'>
                            <h6> Apartment.</h6>
                            <h4>Redfins Unvails The Best Canadian City For Biking....</h4>
                            <hr />
                            <div className="profileCont">
                                <div className="profileImg">
                                    <img src={swiperImg3} alt="" /> <h6>Admin</h6>
                                </div>
                                <div className="datePosted"> <h6> Febuary 2019</h6></div>
                            </div>
                      </div>
                </div>
                  </SwiperSlide>
                <SwiperSlide className="articleColCont" >
                  <div className="col col3">
                        <div className="imageDiv">
                          <img src={blogImg} alt="image" />
                        </div>
                        <div className='textDiv'>
                          <h6> Town House</h6> 
                          <h4>House Market That Changes The Most, This..</h4>
                          <hr />
                          <div className="profileCont">
                             <div className="profileImg">
                               <img src={swiperImg3} alt="" /> <h6>Admin</h6>
                             </div>
                            <div className="datePosted"> <h6> Febuary 2019</h6></div>
                          </div>
                       </div>
                  </div>
                  </SwiperSlide>
         </Swiper>
         </div>

      </Container>
    </>
  );
}
