import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { checkboxClasses } from '@mui/material';
import React, { useState } from 'react';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import banner2 from '~/assets/images/banner2.jpg';
import banner3 from '~/assets/images/banner3.jpg';

import './banner.scss';

function Banner() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <Swiper
            style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
            }}
            loop={true}
            spaceBetween={5}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2">
            <SwiperSlide className="my-swiper-slide">
                <img src={banner3} />
                <div className="text-content">
                    <h2 className="title">
                        <p>CHÀO MỪNG BẠN</p>
                        <p>ĐẾN VỚI VƯỜN CHÈ</p>
                        <p className='T'>NHẬT BẢN</p>
                    </h2>
                    <div className="wrapper-text-banner">
                        <p className="text-banner">
                            từ đồng trà này satoen Việt Nam mang đến cho bạn những sản phẩm trà xanh nhật bản chính hiệu
                            với chật lượng cao nhất
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="my-swiper-slide">
                <img src={banner2} />
                <div className="text-content">
                    <h2 className="title">
                        <p>CHÀO MỪNG BẠN</p>
                        <p>ĐẾN VỚI VƯỜN CHÈ</p>
                        <p>NHẬT BẢN</p>
                    </h2>
                    <div className="wrapper-text-banner">
                        <p className="text-banner">
                            từ đồng trà này satoen Việt Nam mang đến cho bạn những sản phẩm trà xanh nhật bản chính hiệu
                            với chật lượng cao nhất
                        </p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default Banner;
