import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Container } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import useFeach from '../useFeach'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export const SwiperTestimonials = () => {
  const { data : testimonials , loading} = useFeach("https://real-eastate-json-server.onrender.com/testimonies");

  return (
    <>
    <div className="testiHeader">
      <h2>Testimonials</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. nam?</p>
    </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // scrollbar={true}
        style={{
          "--swiper-pagination-color": '#FF5363', 
          "--swiper-pagination-bullet-size": '8px',}}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swipeCenter"
      >
        
        {testimonials && testimonials.map((testimonial )=> (
             <SwiperSlide key={testimonial.id}>
             <div className="testiImg1">
               <img src={testimonial.testimonialImg} alt="team image" width={20} height={30} /> 
               <div className="quoteIcon"><FontAwesomeIcon icon={faQuoteLeft}/></div>
               </div>
             <div className="testiText">
               <h4> {testimonial.name} </h4>
               <h6> {testimonial.role} </h6> <br />
               <p>  <q>{testimonial.paragraph} <br />
               Lorem ipsum dolor sit amet.  </q></p>
             </div>
           </SwiperSlide>
        ))}
      </Swiper> <br /> <br />
    </>
  );
}
