import styles from './showSwiper.module.scss';
import classnames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { Children, useEffect, useState } from 'react';

import 'swiper/css';
import CardCertifiedShow from '../CardCertifiedShow';
const cx = classnames.bind(styles);

function showSwiper({ children, setCol, autoplay = true }) {
    SwiperCore.use([Autoplay]);
    if (!setCol) {
        setCol = (width) => {
            if (width > 1200) {
                return 4;
            } else {
            }
            if (width > 600) {
                return 3;
            } else {
                return 1;
            }
        };
    }

    const [widthScreen, setWidthScreen] = useState(0);
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;

        return {
            width,
            height,
        };
    }
    useEffect(() => {
        function handleResize() {
            setWidthScreen(getWindowDimensions().width);
        }
        setWidthScreen(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Swiper autoplay={autoplay} loop={true} spaceBetween={50} slidesPerView={setCol(widthScreen)}>
            {children}
        </Swiper>
    );
}

export default showSwiper;
{
    /* {data.map((item) => (
                <SwiperSlide className={cx('slice')} key={item.id}>
                    <CardCertifiedShow data={item} />
                </SwiperSlide>
            ))} */
}
