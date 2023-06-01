import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import detailImage from "../../assets/images/about-bg.jpg"
import detailImage1 from "../../assets/images/home-background.jpg"
import detailImage2 from "../../assets/images/blog2.jpg"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { PropertyDetailsOverview } from './propertyDetailsOverview';

export const DetailsComp = ({properties}) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        scrollbar={true}
        style={{
          "--swiper-pagination-color": '#F0F0F0', 
          "--swiper-pagination-bullet-size": '8px',
          "--swiper-navigation-color": '#FF5363'
           }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swipeCenter"
      >
             <SwiperSlide className='detailCont'>
             <div className="detailImg1">
               <img src={properties.detail_images.detail_image1} alt="team image" /> 
             </div>
           </SwiperSlide>
            <SwiperSlide className='detailCont'>
             <div className="detailImg1">
               <img src={properties.detail_images.detail_image2} alt="team image" width={100} height={50} /> 
             </div>
           </SwiperSlide>
            <SwiperSlide className='detailCont'>
             <div className="detailImg1">
               <img src={properties.detail_images.detail_image3} alt="team image" width={100} height={50} /> 
             </div>
           </SwiperSlide>
      </Swiper> 
      <PropertyDetailsOverview properties={properties} />
    </>
  )
}
