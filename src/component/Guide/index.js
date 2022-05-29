import { Container } from '@mui/material';
import classnames from 'classnames/bind';
import { SwiperSlide } from 'swiper/react';
import CardProductItem from '../CardProductItem';
import ShowSwiper from '../ShowSwiper';
import styles from './Guide.module.scss';
const cx = classnames.bind(styles);
function Guide() {
    const items = [
        {
            id: '1',
            thumbnail:
                'https://product.hstatic.net/200000354189/product/nhan_chai_500ml_-_tra_chanh_mo_muoi_cce5d2b68c2a48cb875eb068cf00bf5f_large.jpg',
            nameItem: 'Trà chanh mơ muối nhật bản',
            contact: '/contact',
            to: 'detailGuide',
        },
        {
            id: '2',
            thumbnail:
                'https://product.hstatic.net/200000354189/product/nhan_chai_500ml_-_sencha_genmai_d4d5c3f6bbf543329429b11e0bafeef7_large.jpg',
            nameItem: 'Trà chanh mơ muối nhật bản',
            contact: '/contact',
            to: 'detailGuide',
        },

        {
            id: '3',
            thumbnail:
                'https://product.hstatic.net/200000354189/product/nhan_chai_500ml_-_sencha_genmai_d4d5c3f6bbf543329429b11e0bafeef7_large.jpg',
            nameItem: 'Trà sữa Gạo Rang Sencha nhật bản',
            contact: '/contact',
            to: 'detailGuide',
        },
        {
            id: '4',
            thumbnail:
                'https://product.hstatic.net/200000354189/product/nhan_chai_500ml_-_sencha_genmai_d4d5c3f6bbf543329429b11e0bafeef7_large.jpg',
            nameItem: 'Trà chanh mơ muối nhật bản',
            contact: '/contact',
            to: 'detailGuide',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <Container maxWidth="lg">
                <div className={cx('title')}>
                    <h2></h2>
                </div>
                <div className={cx('showSwiper')}>
                    <ShowSwiper>
                        {items.map((item, index) => (
                            <SwiperSlide key={item.id}>{<CardProductItem guide search item={item} />}</SwiperSlide>
                        ))}
                    </ShowSwiper>
                </div>
            </Container>
        </div>
    );
}

export default Guide;
