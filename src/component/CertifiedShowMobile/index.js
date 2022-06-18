import styles from './CertifiedShowMobile.module.scss';
import classnames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { useEffect, useState } from 'react';

import 'swiper/css';
import CardCertifiedShow from '../CardCertifiedShow';
const cx = classnames.bind(styles);

function CertifiedShowMobile({ data }) {
    SwiperCore.use([Autoplay]);

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

    const setCol = (width) => {
        if (width > 1200) {
            return 4;
        } else if (width > 800) {
            return 3;
        } else if (width > 600) {
            return 2;
        } else {
            return 1;
        }
    };
    return (
        <Swiper
            autoplay={{ delay: 3000 }}
            loop={true}
            spaceBetween={30}
            slidesPerView={setCol(widthScreen)}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            {data.map((item) => (
                <SwiperSlide className={cx('slice')} key={item.id}>
                    <CardCertifiedShow data={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default CertifiedShowMobile;
