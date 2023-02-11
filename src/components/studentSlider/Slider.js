import './slider.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import students from './data';


function Slider() {
    return (
    <>
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        >
        {
            students.map((student,index)=>{
                return <SwiperSlide >
                        <Card className={`${index%3===0?'green-card':index%3===1?'blue-card':'pink-card'}`}>
                    <Card.Img variant="top" src="./images/student1.png" />
                    <Card.Body>
                    <Card.Text>
                        <span>الإسم: {student.name}</span>
                        <span>المرحلة: {student.level}</span>
                        <span> الفصل: {student.class}</span>
                    </Card.Text>
                    <Button className='btn btn-secondary'>عرض الطالب</Button>
                    </Card.Body>
                </Card>
                </SwiperSlide>
            })
        }
        
        </Swiper>
    </>
  );


}

export default Slider
