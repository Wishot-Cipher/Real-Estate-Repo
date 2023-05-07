import React, { useRef, useState} from "react";
import {Link} from "react-router-dom"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Container } from "react-bootstrap"
// Import Swiper styles
import {allImages} from "./swiperImgs"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

export const Swipers = () => {
  return (
    <>
    <Container fluid>
    <div className="featureCont">
          <div> <h1>Featured Properties</h1> <p>Handpicked properties by our team</p></div>
          <div><Link> View All></Link></div>
    </div>
    <Swiper
      breakpoints={{
        750: {
            width: 740,
            slidesPerView: 2
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
        361:{
             width: 340,
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
            allImages.map((imgs) => (
                <SwiperSlide key={imgs.id} className="swiContainer">
                          <div> 
                          <img src={imgs.image} alt="" />
                          </div>
                          <div className="features">
                           <p className="feaName"> {imgs.property_type}</p>
                           <h1>{imgs.property_name}</h1>
                           <p className="location">{imgs.property_location}</p>
                           <div className="subFeatures"> 
                            <p> <b> Bed: {imgs.Bed} </b></p>
                             <p><b>Sqft: {imgs.Sqft}</b> </p>
                              <p><b>Bath: {imgs.Bath}</b> </p>
                           </div>
                          </div>
                  </SwiperSlide>
              
            ))
            }
        
      </Swiper>
      </Container>
    </>
  );
}
