import styles from './Partner.module.scss';
import classNames from 'classnames/bind';
import { Container } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import ShowSwiper from '../ShowSwiper';
const cx = classNames.bind(styles);

function Partner() {
    const partner = [
        {
            id: '1',
            logo: 'https://theme.hstatic.net/200000354189/1000743772/14/brand_1.png?v=191',
        },
        {
            id: '2',
            logo: 'https://theme.hstatic.net/200000354189/1000743772/14/brand_2.png?v=191',
        },
        {
            id: '3',
            logo: 'https://theme.hstatic.net/200000354189/1000743772/14/brand_3.png?v=191',
        },
        {
            id: '4',
            logo: 'https://theme.hstatic.net/200000354189/1000743772/14/brand_4.png?v=191',
        },
        {
            id: '5',
            logo: 'https://theme.hstatic.net/200000354189/1000743772/14/brand_5.png?v=191',
        },
        {
            id: '6',
            logo: 'https://theme.hstatic.net/200000354189/1000743772/14/brand_6.png?v=191',
        },
    ];
    const setCol = (width) => {
        if (width > 1200) {
            return 6;
        } else {
        }
        if (width > 800) {
            return 3;
        } else {
            return 2;
        }
    };
    return (
        <div className={cx('wrapper')}>
            <Container maxWidth="lg">
                <div className={cx('title')}>
                    <h2></h2>
                </div>
                <div className={cx('showSwiper')}>
                    <ShowSwiper autoplay={true} setCol={setCol}>
                        {partner.map((item) => (
                            <SwiperSlide key={item.id}>
                                <img className={cx('logo')} src={item.logo} alt="logo partner" />
                            </SwiperSlide>
                        ))}
                    </ShowSwiper>
                </div>
            </Container>
        </div>
    );
}

export default Partner;
