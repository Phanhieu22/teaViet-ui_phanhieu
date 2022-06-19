import { Container } from '@mui/material';
import classnames from 'classnames/bind';
import { SwiperSlide } from 'swiper/react';
import CardNews from '../CardNews';
import ShowSwiper from '../ShowSwiper';
import styles from './New.module.scss';
const cx = classnames.bind(styles);
function News() {
    const items = [
        {
            id: '1',
            thumbnail: 'https://file.hstatic.net/200000354189/article/tea_2_ffe29d8cdd9b408faf04d648f7deffb5_large.jpg',
            SVGComponentTransferFunctionElement: 'Một mùa chề mới tại tuyên quang',
            intro: 'Chúng tôi đã chọn tuyên quang  để gieo trồng cây chè nhật bản đây là một huyện thuộc vùng núi phía bắc',
            contact: '/news',
            title: 'mùa chè mới đến với tuyên quang',
            dateSubmitted: '17/5/2022',
            author: 'phan đức hiếu',
            to: 'detailGuide',
        },
        {
            id: '2',
            thumbnail: 'https://file.hstatic.net/200000354189/article/tea_2_ffe29d8cdd9b408faf04d648f7deffb5_large.jpg',
            SVGComponentTransferFunctionElement: 'Một mùa chề mới tại tuyên quang',
            intro: 'Chúng tôi đã chọn tuyên quang  để gieo trồng cây chè nhật bản đây là một huyện thuộc vùng núi phía bắc',
            contact: '/news',
            title: 'mùa chè mới đến với tuyên quang',

            dateSubmitted: '17/5/2022',
            author: 'phan đức hiếu',
            to: 'detailGuide',
        },

        {
            id: '3',
            thumbnail: 'https://file.hstatic.net/200000354189/article/tea_2_ffe29d8cdd9b408faf04d648f7deffb5_large.jpg',
            SVGComponentTransferFunctionElement: 'Một mùa chề mới tại tuyên quang',
            intro: 'Chúng tôi đã chọn tuyên quang  để gieo trồng cây chè nhật bản đây là một huyện thuộc vùng núi phía bắc',
            contact: '/news',
            title: 'mùa chè mới đến với tuyên quang',
            dateSubmitted: '17/5/2022',

            author: 'phan đức hiếu',
            to: 'detailGuide',
        },
    ];
    const setCol = (width) => {
        if (width > 1200) {
            return 3;
        } else {
        }
        if (width > 600) {
            return 2;
        } else {
            return 1;
        }
    };
    return (
        <div className={cx('wrapper')}>
            <Container maxWidth="lg">
                <div className={cx('title')}>
                    <h2></h2>
                </div>
                <div className={cx('showSwiper')}>
                    <ShowSwiper autoplay={false} setCol={setCol}>
                        {items.map((item, index) => (
                            <SwiperSlide key={item.id}>{<CardNews item={item} />}</SwiperSlide>
                        ))}
                    </ShowSwiper>
                </div>
            </Container>
        </div>
    );
}

export default News;
