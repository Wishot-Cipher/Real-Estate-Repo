import React, { useRef, useState} from "react";
import {Link} from "react-router-dom"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Container } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles, faDashboard, faPersonDotsFromLine } from '@fortawesome/free-solid-svg-icons'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

export const SwiperServices = () => {
  return (
    <>
    <Container>
        <div className="serviceHeader">
           <h1>Why Choose Us </h1>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
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
             slidesPerView: 1,
             centeredSlides:true
        },
        500:{
             width: 500,
             slidesPerView: 1
        },
        450:{
             width: 445,
             slidesPerView: 1,
             spaceBetween: 20
        },
        400:{
             width: 370,
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
                <SwiperSlide className="serviceContent">
                <div className='serviceContentOne'>
                              <div className='personIcon'> <FontAwesomeIcon icon={faPersonDotsFromLine}/>
                              </div>
                              <div>
                                <h4>Trusted By Thousands</h4> 
                                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit optio laudantium deleniti obcaecati ab quaerat dolores? In nam, sint laboriosam exercitationem repellat a quas velit quasi! Iusto accusantium sunt commodi!</p>
                              </div>
                        </div>
                  </SwiperSlide>
                <SwiperSlide className="serviceContent">
                       <div className='serviceContentOne' >
                              <div className='personIcon'> <FontAwesomeIcon icon={faDashboard}/> </div>
                              <div>
                                <h4>With Range Of Properties</h4> 
                                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit optio laudantium deleniti obcaecati ab quaerat dolores? In nam, sint laboriosam exercitationem repellat a quas velit quasi! Iusto accusantium sunt commodi!  </p>
                              </div>
                        </div>
                  </SwiperSlide>
                  <SwiperSlide className="articleColCont serviceContent">
                       <div className='serviceContentOne'>
                            <div className='personIcon'> <FontAwesomeIcon icon={faCakeCandles}/> </div>
                            <div>
                                <h4>Financing Mode Easy</h4> 
                                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit optio laudantium deleniti obcaecati ab quaerat dolores? In nam, sint laboriosam exercitationem repellat a quas velit quasi! Iusto accusantium sunt commodi!</p>
                              </div>
                        </div>
                  </SwiperSlide>
         </Swiper>

      </Container>
    </>
  );
}
