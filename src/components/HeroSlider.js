import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box } from '@mui/material';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'

function HeroSlider() {
    return (
        <Box sx={{ width: "calc(100% - 1rem)", boxShadow: "0px 0px 10px lightgray", margin: "auto", borderRadius: "10px" }} className="hero_slider">
            <Swiper className="mySwiper">
                <SwiperSlide>
                    <Box component="div" sx={{ width: "100%", overflow: "hidden", borderRadius: "10px" }}>
                        <img src={img1} alt="" style={{ width: "100%", aspectRatio: "16 / 9" }} />
                    </Box>
                </SwiperSlide>

                <SwiperSlide>
                    <Box component="div" sx={{ width: "100%", overflow: "hidden", borderRadius: "10px" }}>
                        <img src={img2} alt="" style={{ width: "100%", aspectRatio: "16 / 9" }} />
                    </Box>
                </SwiperSlide>

                <SwiperSlide>
                    <Box component="div" sx={{ width: "100%", overflow: "hidden", borderRadius: "10px" }}>
                        <img src={img3} alt="" style={{ width: "100%", aspectRatio: "16 / 9" }} />
                    </Box>
                </SwiperSlide>

            </Swiper>
        </Box>
    )
}

export default HeroSlider