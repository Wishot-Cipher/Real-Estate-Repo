import React, { useRef, useState} from "react";
import {Link} from "react-router-dom"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Container } from "react-bootstrap"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

export const Swipers = ({posts}) => {
  return (
    <>
    <Container>
    <div className="featureCont">
          <div> <h1>Featured Properties</h1> 
          <p>Handpicked properties by our team</p></div>
    </div>
    <Swiper
      breakpoints={{
        750: {
            width: 1115,
            slidesPerView: 3.1
        },
        650:{
             width: 600,
             slidesPerView: 2
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
             width: 345,
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
        spaceBetween={30}
        style={{"--swiper-pagination-color": '#FF5363',
                 "--swiper-navigation-color": '#FF5363', 
                 "--swiper-pagination-bullet-size": '8px',
                 "--swiper-navigation-size": '35px',
                 "--swiper-navigation-background-color": '#fff'}}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            posts.map((post) => (
                <SwiperSlide key={post.id} className="swiContainer">
                         <div className="swiperImg">
                            <div>
                             <img src={post.image} alt="" />
                             <h6>{post.market_option}</h6>
                             {post.market_option ==="For Rent"? <h4>${post.market_price.toLocaleString()}/mo </h4> : <h4>${post.market_price.toLocaleString()} </h4>}
                             </div>
                         </div>
                         <div className="features">
                              <p className="feaName"> {post.property_type}</p>
                              <h1>{post.property_name}</h1>
                              <p className="location">{post.property_location}</p>
                              <div className="subFeatures"> 
                                  <p> <b> Bed: {post.Bed} </b></p>
                                  <p><b>Sqft: {post.Sqft}</b> </p>
                                  <p><b>Bath: {post.Bath}</b> </p>
                              </div>
                              <hr />
                          </div>
                              <div className="profileCont">
                                <div className="profileImg">
                                  <img src={post.image} alt="" /> <h6>Agent {post.agent_name}</h6>
                                </div>
                                <div className="datePosted"> <h6> {post.date_posted}</h6></div>
                              </div>
                  </SwiperSlide>
              
            ))
            }
        
      </Swiper>
      </Container>
    </>
  );
}
